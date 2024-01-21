<script setup>
import { ref, computed, inject } from "vue";
const emit = defineEmits(["save"]);
import { useTimerStore } from "@/scripts/stores/index.js";
const timerStore = useTimerStore();
import { ResultKeepingMap } from "@/config/config.js";
const infoDialog = inject("$InfoDialog");
const loadingComponent = inject("$LoadingComponent");
const input = ref("0");
const measurementToggle = ref("1");

const isWidthMode = computed(() => {
  return timerStore.mode === "MODE_WIDTH";
});

const title = computed(() => {
  return Object.entries(ResultKeepingMap).find(([key, value]) => key === timerStore.mode)[1].title;
});

const label = computed(() => {
  return isWidthMode.value ? Object.entries(widthMeasurements)[measurementToggle.value][1].label : " Punkte";
});

const factor = computed(() => {
  return Object.entries(widthMeasurements)[measurementToggle.value][1].factor;
});

const showIncrementButton = computed(() => {
  return true;
});

const increment = () => {
  const newVal = parseInt(input.value, 10);
  input.value = String(newVal + 1);
};

const decrement = () => {
  const newVal = parseInt(input.value, 10);
  input.value = String(newVal - 1);
};

const saveResult = async () => {
  const loader = loadingComponent.value;
  try {
    loader.open();
    const inpVal = parseFloat(input.value);
    const result = isWidthMode.value ? inpVal * factor.value : inpVal;
    await timerStore.saveResult(result);
    emit("save", { text: `Ergebnis gespeichert` });
  } catch (error) {
    await infoDialog.value.open({
      title: "Starter - Resultatseingabe",
      text: error.message || error,
      color: "red",
    });
  } finally {
    input.value = "0";
    loader.close();
  }
};

const addDigit = (digit) => {
  input.value = input.value === "0" ? "" + digit : input.value + digit;
};

const removeDigit = () => {
  input.value = input.value.length > 1 ? input.value.slice(0, -1) : "0";
};

const widthMeasurements = {
  cm: { factor: 1, label: "Zentimeter" },
  m: { factor: 100, label: "Meter" },
  km: { factor: 100000, label: "Kilometer" },
};
</script>
<template>
  <v-card class="elevation-4align-center justify-center my-4">
    <v-row justify="center" align="center" class="ma-2">
      <v-col class="text-wrDarkGreen text-h6"
        ><v-icon color="wrDarkGreen" large class="pr-4">mdi-comment-arrow-right-outline</v-icon>{{ title }}</v-col
      >
      <v-col v-if="isWidthMode">
        <v-btn-toggle v-model="measurementToggle" mandatory variant="outlined" density="compact" divided color="wrDarkGreen">
          <v-btn class="text-caption px-0" density="compact" v-for="i in Object.keys(widthMeasurements)" :key="i" :text="i" /></v-btn-toggle
      ></v-col>
    </v-row>
    <v-card-text>
      <v-row class="ma-2" align="center">
        <v-btn v-if="showIncrementButton" @click="decrement('input')" variant="text" :disabled="input === '0' || input.includes('.')">
          <v-icon color="wrDarkGreen" size="36"> mdi-minus-box</v-icon></v-btn
        >
        <v-text-field v-model="input" :label="label" variant="outlined" hide-details disabled> </v-text-field>
        <v-btn v-if="showIncrementButton" @click="increment('input')" variant="text" :disabled="input.includes('.')">
          <v-icon color="wrDarkGreen" size="36"> mdi-plus-box</v-icon></v-btn
        >
      </v-row>
      <v-row justify="center" no-gutters class="px-12">
        <v-col cols="4" v-for="d in 9" class="my-2 text-center">
          <v-btn density="compact" class="pa-0 text-wrDarkGreen" @click="addDigit(d)"
            ><v-icon>{{ `mdi-numeric-${d}` }}</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters class="px-12">
        <v-col cols="4" class="my-2 text-center">
          <v-btn density="compact" class="pa-0 text-wrDarkGreen" @click="addDigit(0)" :disabled="input === '0'"
            ><v-icon>mdi-numeric-0</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters class="px-12">
        <v-col cols="4" class="my-2 text-center">
          <v-btn density="compact" class="pa-0 text-wrDarkGreen" @click="input = '0'" :disabled="input === '0'"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-col>
        <v-col cols="4" class="my-2 text-center">
          <v-btn density="compact" class="pa-0 text-wrDarkGreen" @click="input = input + '.'" :disabled="input.includes('.')"
            ><v-icon>mdi-decimal</v-icon></v-btn
          >
        </v-col>
        <v-col cols="4" class="my-2 text-center">
          <v-btn density="compact" class="pa-0 text-wrDarkGreen" @click="removeDigit()" :disabled="input === '0'"
            ><v-icon>mdi-keyboard-backspace</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-divider class="ma-4" />
      <div class="text-center pa-4">
        <v-card
          color="wrDarkGreen"
          @click="saveResult()"
          width="380px"
          class="pa-4 mb-4 text-left"
          :disabled="parseFloat(input) === 0 || !timerStore.selectedStarter"
        >
          <div class="d-flex justify-space-between">
            <v-sheet class="ma-2 pa-2" color="transparent">
              <div>
                <div class="d-block pa-2">
                  Startnummer: <b>{{ timerStore.selectedStarter }}</b>
                </div>
                <div class="d-block pa-2 text-h5">
                  <b>{{ input }} {{ label }}</b>
                </div>
              </div>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 d-flex align-center" color="transparent">
              <v-icon size="64" class="ml-4"> mdi-content-save-move-outline </v-icon>
            </v-sheet>
          </div>
        </v-card>
      </div>
    </v-card-text>
  </v-card>
</template>
