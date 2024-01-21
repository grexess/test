<script setup>
import { useTimerStore } from "@/scripts/stores/index.js";
import { useRoute } from "vue-router";
const route = useRoute();
const timerStore = useTimerStore();
</script>

<template>
  <v-app-bar :elevation="4">
    <v-app-bar-nav-icon icon="mdi-arrow-left-bold" to="/"></v-app-bar-nav-icon>
    {{ route.meta.title }}
  </v-app-bar>
  <v-container class="fill-height justify-center"> Einstellungen </v-container>
</template>
