<script setup>
import { ref, inject } from "vue";
import { useTimerStore } from "@/scripts/stores/index.js";
const timerStore = useTimerStore();

const infoDialog = inject("$InfoDialog");
const confirmDialog = inject("$ConfirmDialog");
const loadingComponent = inject("$LoadingComponent");

const crud = inject("$CRUD");

const pin = ref("");

const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const addDigit = (digit) => {
  if (pin.value.length < 6) {
    pin.value += digit;
  }
};

const removeDigit = () => {
  if (pin.value.length > 0) {
    pin.value = pin.value.slice(0, -1);
  }
};

const clearPin = () => {
  pin.value = "";
};

const doLogin = async () => {
  const loader = loadingComponent.value;
  try {
    loader.open();
    await timerStore.login(pin.value, pin.value);
  } catch (error) {
    loader.close();
    let dialog = infoDialog.value;
    let dialogData = { title: "Anmeldung nicht möglich", text: error.message || error, color: "red" };
    switch (error.code) {
      case 101:
        dialogData = {
          title: "Anmeldung nicht möglich",
          text: "PIN ist ungültig",
          color: "red",
        };
        break;
      case 700:
        dialog = confirmDialog.value;
        dialogData = {
          title: "Achtung",
          text: "Diese Zeitname ist bereits von einem anderen Gerät besetzt. Möchtest Du übernehmen?",
          color: "orange",
          confirmBtn: "Übernehmen",
        };
        break;
    }
    await dialog.open(dialogData);
    if (error.code === 700) {
      // delete the existing session
      crud.value.crudNonConfirmAction(
        "logoutConcurrentUser",
        () => timerStore.callParseFunction("logoutConcurrentUser", { userName: pin.value }),
        { obj: "Logout" }
      );
      // try {
      //   await timerStore.logoutConcurrentUser(pin.value);
      // } catch (error) {
      //   infoDialog.open({
      //     title: "Fehler",
      //     text: error.message || error,
      //     color: "red",
      //   });
      // }
      doLogin();
    }
  } finally {
    loader.close();
  }
};
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-card max-width="300px">
      <v-card-title class="bg-blue">Zeitnahme-PIN eingeben</v-card-title>
      <v-card-text class="mt-4 pb-0">
        <v-row align-center>
          <v-col v-for="d in digits" class="text-center">
            <v-btn @click="addDigit(d)">{{ d }}</v-btn>
          </v-col>
        </v-row>
        <v-divider class="ma-4"></v-divider>
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field label="PIN" v-model="pin" variant="outlined" hide-details class="centered-input" maxlength="6" type="tel">
              <template v-slot:prepend> <v-icon icon="mdi-close" @click="clearPin()" /> </template>
              <template v-slot:append>
                <v-icon icon="mdi-keyboard-backspace" @click="removeDigit()" /> </template></v-text-field></v-col></v-row
        ><v-divider class="ma-4"></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <transition name="roll">
          <v-btn size="large" v-if="pin.length === 5" @click="doLogin" variant="tonal" color="blue">Zur Zeitnahme</v-btn>
        </transition>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
.centered-input :deep(input) {
  text-align: center;
}
</style>
