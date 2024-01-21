<script setup>
import { inject } from "vue";
import { useTimerStore } from "@/scripts/stores/index.js";
const timerStore = useTimerStore();

const snackBar = inject("$SnackBar");

const crud = inject("$CRUD");

const openSnackBar = (o) => {
  snackBar.value.open(o);
};

import NumberSelection from "@/components/startPage/NumberSelection.vue";
import StartTime from "@/components/startPage/StartTime.vue";
import ResetTime from "@/components/startPage/ResetTime.vue";
import StopTime from "@/components/startPage/StopTime.vue";
import ValueInput from "@/components/startPage/ValueInput.vue";

const fetchData = () => {
  crud.value.crudNonConfirmAction("read", timerStore.fetchData, { obj: "Resultate" });
};

fetchData();
</script>
<template>
  <v-container class="fill-height" style="background-color: #fff; max-width: 470px">
    <div class="container mx-1">
      <NumberSelection v-if="timerStore.showSelection" />
      <TransitionGroup name="roll"> <StartTime v-if="timerStore.showStartTimer" @start="openSnackBar" /></TransitionGroup>
      <TransitionGroup name="roll"> <ResetTime v-if="timerStore.showResetTimer" @reset="openSnackBar" /></TransitionGroup>
      <TransitionGroup name="roll"> <StopTime v-if="timerStore.showStopTime" @stop="openSnackBar" /></TransitionGroup>
      <TransitionGroup name="roll"> <ValueInput v-if="timerStore.showValueInput" @save="openSnackBar" /></TransitionGroup>
    </div>
    <VLayoutItem model-value position="bottom" class="text-end" size="88">
      <div class="ma-4">
        <v-btn @click="fetchData" icon="mdi-refresh" size="large" color="blue" elevation="8" />
      </div>
    </VLayoutItem>
  </v-container>
</template>

<style></style>
