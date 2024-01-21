<script setup>
import { inject } from "vue";
import { useTimerStore } from "@/scripts/stores/index.js";

const emit = defineEmits(["reset"]);
const confirmDialog = inject("$ConfirmDialog");
const infoDialog = inject("$InfoDialog");
const loadingComponent = inject("$LoadingComponent");

const timerStore = useTimerStore();

const confirmReset = async (starter) => {
  await confirmDialog.value.open({
    title: "Starter - RESET",
    text: `Startnummer ${starter} zurücksetzen?`,
    color: "red",
    confirmBtn: "Reset",
  });
  const loader = loadingComponent.value;
  try {
    loader.open();
    await timerStore.resetSelectedStarter(starter);
    emit("reset", { text: `Startnummer ${starter} zurückgesetzt` });
  } catch (error) {
    await infoDialog.value.open({
      title: "Starter - RESET",
      text: error.message || error,
      color: "red",
    });
  } finally {
    loader.close();
  }
};
</script>
<template>
  <v-sheet class="elevation-4 d-flex flex-wrap align-center justify-center my-2 zRelative">
    <!-- <v-sheet class="legend rounded elevation-4 pa-1" color="white">
      <v-img class="" src="./resetWatch.png" cover :width="25"></v-img>
    </v-sheet> -->
    <TransitionGroup name="backUp" tag="button" class="d-flex flex-wrap justify-center pa-4">
      <v-btn
        class="d-flex align-center justify-center text-white ma-2"
        :elevation="12"
        :height="80"
        :width="80"
        color="#FFC107"
        rounded="xl"
        v-for="(sn, idx) in timerStore.getStartNumbersOnStage"
        :key="idx"
        @click="confirmReset(sn)"
      >
        <div class="text-center">
          <span class="text-h5">{{ sn }}</span
          ><br /><v-divider />
          <span class="text-caption">Reset</span>
        </div>
      </v-btn></TransitionGroup
    >
  </v-sheet>
</template>
