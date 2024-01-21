<script setup>
import { useTimerStore } from "@/scripts/stores/index.js";
import { useRoute } from "vue-router";

const timerStore = useTimerStore();
</script>

<template>
  <div>
    <v-app-bar :elevation="4">
      <v-app-bar-nav-icon icon="mdi-arrow-left-bold" to="/"></v-app-bar-nav-icon>
      TestPage
    </v-app-bar>
    <v-container class="fill-height justify-center">
      <!-- <v-select v-model="timerStore.mode" :items="timerStore.getModes" density="compact" label="Compact"></v-select> -->
    </v-container>
  </div>
</template>
