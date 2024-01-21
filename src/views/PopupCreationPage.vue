<script setup>
import { ref, computed, watch, inject, reactive } from "vue";
import moment from "moment";

import { ResultKeepingMap } from "@/config/config.js";

const infoDialog = inject("$InfoDialog");
const snackBar = inject("$SnackBar");
const loadingComponent = inject("$LoadingComponent");

import Parse from "parse/dist/parse.min.js";
Parse.serverURL = import.meta.env.VITE_APP_PARSE_SERVER_URL;
Parse.initialize(import.meta.env.VITE_APP_PARSE_APP_ID, import.meta.env.VITE_APP_PARSE_JAVASCRIPT_ID);

const imageHost = import.meta.env.VITE_APP_IMAGE_SERVER;
const origin = new URL(window.location.href).origin;

import AGB from "@/components/framework/AGB.vue";
import Datenschutz from "@/components/framework/Datenschutz.vue";

const agb = ref(null);
const datenschutz = ref(null);

const showHelpName = ref(false);
const showHelpEmail = ref(false);
const showHelpTimeKeeping = ref(false);
const showprivacyPopup = ref(false);

//model
const eventName = ref("evetname");
const email = ref("grexess@googlemail.com");
const timeKeeping = ref(null);
const agbCheckbox = ref(false);
const privacyCheckbox = ref(false);
const otp = ref("");

let popupData = reactive({});

const isPaymentCode = ref(false);
const isPaymentFree = ref(false);
const isPayed = ref(false);
const loading = ref(false);
const validCode = ref(null);
const remainingUsage = ref(0);

const setPaymentFree = () => {
  isPaymentCode.value = false;
  isPaymentFree.value = true;
};

const setPaymentCode = () => {
  isPaymentCode.value = true;
  isPaymentFree.value = false;
};

const eventNameRules = [
  (v) => !!v || "EventName ist erforderlich",
  (v) => (v && v.length > 2 && v.length <= 20) || "Name muß aus 3 - 20 Zeichen bestehen ",
];

const emailRules = [(v) => !!v || "EMail ist erforderlich", (v) => /.+@.+\..+/.test(v) || "Bitte gültiges EMail Format eingeben"];

const timeKeepings = computed(() => {
  return Object.entries(ResultKeepingMap).reduce((acc, [key, value]) => {
    if (value.hasOwnProperty("modeDropDown")) {
      acc.push({ text: value.modeDropDown, value: key });
    }
    return acc;
  }, []);
});

const showNextButton = () => {
  if (!timeKeeping.value) {
    return false;
  }

  if (!eventName.value || eventName.value.length < 3) {
    return false;
  }
  if (!email.value || !/.+@.+\..+/.test(email.value)) {
    return false;
  }

  if (!agbCheckbox.value) {
    return false;
  }

  return true;
};

watch(otp, async (v) => {
  if (v.length < 5) return;
  await onFinish();
});

const onFinish = async () => {
  try {
    loading.value = true;
    const data = {
      code: otp.value,
      Owner: email.value,
    };
    remainingUsage.value = (await Parse.Cloud.run("checkCode", { data })).remain;
    validCode.value = 200;
  } catch (error) {
    validCode.value = error.code;
  } finally {
    loading.value = false;
  }
};

const doPayment = async (v) => {
  loadingComponent.value.open();

  try {
    const data = {
      Owner: email.value,
      Name: eventName.value,
      ResultKeeping: timeKeeping.value,
      origin,
      private: privacyCheckbox.value,
    };

    switch (v) {
      case "free5x5":
        data.type = "free5x5";
        break;
      case "code":
        data.type = "code";
        data.code = otp.value;
        break;
      default:
        break;
    }

    loading.value = true;
    try {
      popupData = await Parse.Cloud.run("createPopup", { data });
    } catch (error) {
      if (error.code === 209) {
        Parse.User.logOut();
        popupData = await Parse.Cloud.run("createPopup", { data });
      }
    }
    isPayed.value = true;
  } catch (error) {
    loadingComponent.value.close();
    infoDialog.value.open({
      title: "Fehler",
      text: error.message || error,
      color: "red",
    });
  } finally {
    loadingComponent.value.close();
  }
};

const getAlertMessage = computed(() => {
  switch (true) {
    case validCode.value === 200 && remainingUsage.value > 1:
      return {
        show: true,
        type: "success",
        html: `Gutschein-Code gültig. <b>${remainingUsage.value}</b>  ${remainingUsage.value !== 1 ? " Popups offen" : " Popup offen"}`,
      };
    case validCode.value === 200 && remainingUsage.value === 1:
      return {
        show: true,
        type: "warning",
        html: `Gutschein-Code gültig, aber es ist dann Dein letztes Popup!`,
      };
    case validCode.value === 501:
      return {
        show: true,
        type: "error",
        html: `Gutscheincode falsch oder nicht mit <b>${email.value}</b> verknüpft`,
      };
    case validCode.value === 502:
      return {
        show: true,
        type: "error",
        html: `Gutscheincode konnte leider nicht überprüft werden`,
      };
    case validCode.value === 503:
      return {
        show: true,
        type: "error",
        html: `Gutschein-Code hat keine Popups mehr.`,
      };
    default:
      break;
  }
  return { show: false };
});

const getFinishMessage = computed(() => {
  switch (true) {
    case popupData.remain > 1:
      return {
        show: true,
        type: "info",
        html: `Noch ${popupData.remain} verbleibende Popups auf Deinem Gutschein`,
      };
    case popupData.remain === 1:
      return {
        show: true,
        type: "warning",
        html: `Nur noch ${popupData.remain} verbleibender Popup auf Deinem Gutschein`,
      };

    case popupData.remain === 0:
      return {
        show: true,
        type: "error",
        html: `Das war Dein letzter Popup auf Deinem Gutschein`,
      };
    default:
      break;
  }
  return { show: false };
});

const getResultKeepingText = () => {
  return ResultKeepingMap[timeKeeping.value].modeDropDown;
};

const getLabelPIN = (v) => {
  if ([1, 2].includes(popupData.resultKeeping)) {
    return "Zeitnahme-PIN " + v;
  }

  if ([3, 4, 5, 6].includes(popupData.resultKeeping)) {
    return "PIN Resultserfassung";
  }
  return "PIN";
};

const getLabelLogin = () => {
  if ([1, 2].includes(popupData.resultKeeping)) {
    return "Zeitnahme-Logon";
  }

  if ([3, 4, 5, 6].includes(popupData.resultKeeping)) {
    return "Logon Resultserfassung";
  }
  return "PIN";
};

const formatValidTo = (v) => {
  return moment(v).format("DD.MM.YYYY HH:mm");
};

const copyValue = async (v) => {
  await navigator.clipboard.writeText(v);
  snackBar.value.open({ text: "Pin in Zwischenablage kopiert" });
};

const getFooterButtons = () => {
  return [
    { title: "Zeitnahme", attr: "href", value: `${origin}/timer` },
    // { title: "Resultate", attr: "href", value: `${origin}/timer#/popup/results/${popupData.id}` },
    { title: "Neues Popup", attr: "href", value: `${origin}/timer/#/popup` },
  ];
};
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-card class="mx-auto" width="470">
      <v-card-title class="ma-4"
        ><v-row class="text-h5 font-italic text-wrDarkGreen"
          >WeRace - Popups <v-spacer /><v-img
            :src="`${imageHost}logo/wrSymbol-black-small.png`"
            max-width="35px"
            height="35px"
          ></v-img></v-row
      ></v-card-title>
      <v-card-text v-if="!isPayed">
        <span class="text-caption text-grey-darken-1"> Name Deines Popup-Events </span>

        <v-text-field
          v-model="eventName"
          variant="solo-inverted"
          density="compact"
          :rules="eventNameRules"
          :append-icon="showHelpName ? 'mdi-open-in-app' : 'mdi-comment-question-outline'"
          @click:append="showHelpName = !showHelpName"
        ></v-text-field>
        <v-expand-transition>
          <div v-show="showHelpName">
            <v-divider></v-divider>
            <v-card-text> Gib Deinem Event ein coolen Namen </v-card-text>
          </div>
        </v-expand-transition>
        <span class="text-caption text-grey-darken-1">Deine Email Addresse</span>
        <v-text-field
          v-model="email"
          variant="solo-inverted"
          density="compact"
          :rules="emailRules"
          :append-icon="showHelpEmail ? 'mdi-open-in-app' : 'mdi-comment-question-outline'"
          @click:append="showHelpEmail = !showHelpEmail"
        >
        </v-text-field>
        <v-expand-transition>
          <div v-show="showHelpEmail">
            <v-divider></v-divider>
            <v-card-text> An diese Adresse schicken wir Dir die Anmelde-Pins für die Zeitnahme. </v-card-text>
          </div>
        </v-expand-transition>
        <span class="text-caption text-grey-darken-1"> Wie sollen die Ergebnisse erfasst werden? </span>
        <v-select
          :items="timeKeepings"
          item-title="text"
          item-value="value"
          placeholder="Erfassungsart"
          v-model="timeKeeping"
          variant="solo-inverted"
          density="compact"
          :append-icon="showHelpTimeKeeping ? 'mdi-open-in-app' : 'mdi-comment-question-outline'"
          @click:append="showHelpTimeKeeping = !showHelpTimeKeeping"
        ></v-select>
        <v-expand-transition>
          <div v-show="showHelpTimeKeeping">
            <v-divider></v-divider>
            <v-card-text> Wir unterstützen Zeiten, Weite oder Punkte </v-card-text>
          </div>
        </v-expand-transition>
        <v-checkbox hide-details class="" v-model="agbCheckbox" color="wrDarkGreen" h>
          <template v-slot:label>
            <div style="font-size: 0.8em">
              Hiermit akzeptiere ich die
              <v-tooltip bottom>
                <template v-slot:activator="{ props }">
                  <a @click="agb.open()" v-bind="props" style="color: #005058; text-decoration: underline">
                    allgemeinen Geschäftsbedingungen
                  </a>
                </template>
                Öffne Geschäftsbedingungen
              </v-tooltip>
              &nbsp;und
              <v-tooltip bottom>
                <template v-slot:activator="{ props }">
                  <a @click="datenschutz.open()" v-bind="props" style="color: #005058; text-decoration: underline">
                    Datenschutzerklärung
                  </a>
                </template>
                Öffne Datenschutzerklärung
              </v-tooltip>
              &nbsp;von WeRace
            </div>
          </template> </v-checkbox
        ><v-checkbox hide-details class="" v-model="privacyCheckbox" color="wrDarkGreen">
          <template v-slot:label>
            <div style="font-size: 0.8em">Anonymes Popup</div>
            <v-icon class="ml-4" @click="showprivacyPopup = !showprivacyPopup">{{
              showprivacyPopup ? "mdi-open-in-app" : "mdi-comment-question-outline"
            }}</v-icon>
          </template>
        </v-checkbox>
        <v-expand-transition>
          <div v-show="showprivacyPopup">
            <v-divider></v-divider>
            <v-card-text style="color: rgba(0, 0, 0, 0.6)">
              <span style="font-size: 0.75em">
                Jedes Popup hat eine Gültigkeit von 24h.<br />
                <b>Anonyme Popups</b> erscheinen nicht in der Referenzliste auf unserer Webseite. Ausserdem werden das Popup inklusive
                Ergebnisse nach 24h komplett gelöscht.<br />
                <b>Normale Popups</b> sind sichtbar, die Ergebnisse sind auch noch nach Ablauf der Gültigkeit abrufbar.
              </span>
            </v-card-text>
          </div>
        </v-expand-transition>
        <v-fade-transition>
          <div v-if="showNextButton()">
            <v-row justify="center" no-gutters
              ><v-col class="text-center"
                ><span class="text-caption text-grey-darken-1">Was für ein Popup möchtest Du erstellen? </span></v-col
              ></v-row
            >
            <v-row justify="center" no-gutters>
              <v-col class="text-center mx-4"
                ><v-btn :color="isPaymentFree ? 'wrDarkGreen' : ''" block @click="setPaymentFree()">FREE BETA [5x]</v-btn></v-col
              ><v-col class="text-center mx-4"
                ><v-btn :color="isPaymentCode ? 'wrDarkGreen' : ''" block @click="setPaymentCode()">Gutschein</v-btn></v-col
              ></v-row
            >

            <v-fade-transition>
              <v-card v-if="isPaymentFree" class="my-2 mx-4 pa-4" elevation="4">
                <v-card-text class="pa-0 text-wrDarkGreen" style="font-size: 0.8em">
                  Während der Beta Phase ist unser <b>[5 x 5]</b> Popup <b>kostenfrei</b>!<br />
                  Allerdings ist die Anzahl der Teilnehmer sowie die möglichen Starts pro Teilnehmer auf maximal
                  <b>5</b> begrenzt.
                  <v-btn block dark color="wrDarkGreen" @click="doPayment('free5x5')">FREE [5 x 5] Popup erstellen</v-btn>
                </v-card-text>
              </v-card>
            </v-fade-transition>
            <v-fade-transition>
              <v-card v-if="isPaymentCode" class="my-2 mx-4 pa-4" elevation="4">
                <v-card-text class="pa-0">
                  <span class="text-caption text-grey-darken-1">
                    Dein Gutscheincode für <b>{{ email }}</b>
                  </span>
                  <v-otp-input v-model="otp" :length="5" variant="solo-inverted" color="wrDarkGreen"></v-otp-input>
                  <v-overlay absolute :value="loading">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-overlay>
                  <v-alert v-if="getAlertMessage.show" density="compact" variant="outlined" text :type="getAlertMessage.type">
                    <span style="font-size: 0.75em" v-html="getAlertMessage.html"></span>
                  </v-alert>
                  <br />
                  <v-btn v-if="validCode === 200 && remainingUsage > 0" block dark color="wrDarkGreen" @click="doPayment('code')"
                    >Gutschein einlösen</v-btn
                  >
                </v-card-text>
              </v-card>
            </v-fade-transition>
          </div></v-fade-transition
        >
      </v-card-text>
      <v-slide-y-reverse-transition>
        <v-card-text v-if="isPayed">
          <div class="mx-auto text-center" max-width="444">
            <div class="mt-2">
              <v-icon size="30" color="wrDarkGreen"> mdi-check-outline </v-icon>
            </div>
            <v-card-subtitle>Danke und viel Spass bei Deinem Popup! </v-card-subtitle>
            <v-card-title>{{ popupData.name }}</v-card-title>
            <v-card-subtitle>{{ getResultKeepingText() }} </v-card-subtitle>
            <v-alert density="compact" variant="outlined" color="wrDarkGreen" class="ma-2 text-center bg-green-lighten-5">
              <span style="font-size: 0.75em"> Popup gültig bis {{ formatValidTo(popupData.createdAt) }} Uhr!</span>
            </v-alert>
            <v-row class="ma-4" v-if="popupData.starterPin" justify="center">
              <v-col cols="12" class="pa-1 text-grey-darken-1"
                >{{ getLabelPIN("Start")
                }}<v-tooltip text="Kopiere PIN">
                  <template v-slot:activator="{ props }">
                    <v-icon class="ml-2" v-bind="props" color="grey" x-small @click="copyValue(popupData.starterPin)">
                      mdi-content-copy
                    </v-icon>
                  </template>
                </v-tooltip></v-col
              >
              <v-otp-input :model-value="popupData.starterPin" length="5" color="wrDarkGreen" dense disabled></v-otp-input>
            </v-row>

            <v-row class="ma-4" v-if="popupData.finishPin" justify="center">
              <v-col cols="12" class="pa-1 text-grey-darken-1"
                >{{ getLabelPIN("Ziel")
                }}<v-tooltip text="Kopiere PIN">
                  <template v-slot:activator="{ props }">
                    <v-icon class="ml-2" v-bind="props" color="grey" x-small @click="copyValue(popupData.finishPin)">
                      mdi-content-copy
                    </v-icon>
                  </template>
                </v-tooltip></v-col
              >
              <v-otp-input :model-value="popupData.finishPin" length="5" color="wrDarkGreen" dense disabled></v-otp-input>
            </v-row>

            <v-row class="ma-2" no-gutters>
              <v-col cols="12" class="text-grey-darken-1"
                >Popup - Resultate<v-tooltip text="Gehe zu Resultatsseite">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon="mdi-open-in-new"
                      class=""
                      v-bind="props"
                      color="grey"
                      variant="plain"
                      :href="`${origin}/timer#/popup/results/${popupData.id}`"
                      target="_blank"
                    >
                    </v-btn>
                  </template> </v-tooltip
              ></v-col>
              <v-col class="my-1 white text-disabled elevation-2 rounded" style="font-size: 0.7em">{{
                `${origin}/timer#/popup/results/${popupData.id}`
              }}</v-col>
            </v-row>

            <v-row class="ma-2" no-gutters>
              <v-col cols="12" class="text-grey-darken-1"
                >{{ getLabelLogin()
                }}<v-tooltip text="Gehe zu Zeitnahme">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon="mdi-open-in-new"
                      class=""
                      v-bind="props"
                      color="grey"
                      variant="plain"
                      :href="`${origin}/timer#/popup/timer`"
                      target="_blank"
                    >
                    </v-btn>
                  </template> </v-tooltip
              ></v-col>
              <v-col class="my-1 white text-disabled elevation-2 rounded" style="font-size: 0.7em"
                >{{ `${origin}/timer#/popup/timer` }}
              </v-col>
            </v-row>

            <div style="font-size: 0.8em" class="pa-2 text-disabled text-center">
              Anmeldeinformation wurden zusätzlich an
              <b>{{ popupData.email }}</b> übermittelt. Schaue bitte auch in Deinem Spam-Ordner!
            </div>

            <v-alert
              v-if="getFinishMessage.show"
              class="ma-2 bg-blue-lighten-5"
              style="font-size: 0.7em"
              density="compact"
              variant="outlined"
              text
              :type="getFinishMessage.type"
              >{{ getFinishMessage.html }}
            </v-alert>
          </div>
          <v-row>
            <v-col cols="12" sm="4" cols- v-for="(b, i) in getFooterButtons()" :key="i" class="text-center"
              ><v-btn variant="plain" color="wrDarkGreen" v-bind:[b.attr]="b.value" :text="b.title"
            /></v-col>
          </v-row> </v-card-text
      ></v-slide-y-reverse-transition>
      <v-divider class="ma-4" />
      <v-row justify="center"
        ><v-col class="text-center"
          ><v-btn variant="text" color="wrDarkGreen" :href="`https://werace.de`">WeRace-Homepage</v-btn></v-col
        ></v-row
      >
    </v-card>
    <AGB ref="agb" />
    <Datenschutz ref="datenschutz" />
  </v-container>
</template>
