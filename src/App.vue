<script setup>
import { provide, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useTimerStore } from "@/scripts/stores/index.js";
import { useRoute } from "vue-router";

import Footer from "@/components/framework/Footer.vue";

import ConfirmDialog from "@/components/dialogs/ConfirmDialog.vue";
import InfoDialog from "@/components/dialogs/InfoDialog.vue";
import SnackBar from "@/components/dialogs/SnackBar.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";
import CRUDComponent from "@/components/renderless/CRUDRecords.vue";

const confirmDialog = ref(null);
const infoDialog = ref(null);
const snackBar = ref(null);
const loadingComponent = ref(null);
const crud = ref(null);
provide("$ConfirmDialog", confirmDialog);
provide("$InfoDialog", infoDialog);
provide("$SnackBar", snackBar);
provide("$LoadingComponent", loadingComponent);
provide("$CRUD", crud);

const imageHost = import.meta.env.VITE_APP_IMAGE_SERVER;
const timerStore = useTimerStore();
const route = useRoute();

const { sessionTakeOver } = storeToRefs(timerStore);

// watch for session take over by another device
watch(sessionTakeOver, async (newValue) => {
  if (newValue) {
    try {
      await infoDialog.value.open({
        title: "Sessionübernahme",
        text: "Jemand anderes hat sich wahrscheinlich bei dieser Zeitnahme angemeldet. Du wurdest abgemeldet.",
        color: "red",
      });
      await timerStore.logout();
    } catch (error) {
      await timerStore.logout();
    } finally {
      timerStore.sessionTakeOver = false;
    }
  }
});

import NavigationDrawer from "@/components/NavigationDrawer.vue";

const getTargetLabel = () => {
  return Object.entries(timerStore.modeMap).find((e) => e[0] === timerStore.mode)[1].title;
};
</script>

<template>
  <v-app>
    <NavigationDrawer />
    <v-app-bar :elevation="4" v-if="route.meta.showHeader">
      <v-app-bar-nav-icon @click.stop="timerStore.toggleNavDrawer()" color="teal-darken-2"></v-app-bar-nav-icon>
      <div class="text-caption text-teal-darken-2" v-if="timerStore.user">
        <div class="text-h6">{{ timerStore.getEventName }}</div>
        <v-divider class="d-none d-sm-flex" />
        <div class="d-none d-sm-flex">
          <div v-if="!timerStore.isPopup">
            <b>{{ timerStore.user?.usertype?.stage }}</b> ({{ timerStore.user?.usertype?.stageTryCount }} Versuch{{
              timerStore.user?.usertype?.stageTryCount > 1 ? "e" : ""
            }}
            je Starter) | {{ getTargetLabel() }}
          </div>
          <div v-else>{{ getTargetLabel() }}</div>
        </div>
      </div>
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn density="compact" v-bind="props" color="grey" icon="mdi-information-outline" class="d-flex d-sm-none"></v-btn>
        </template>
        <v-list class="text-wrDarkGreen">
          <v-list-item v-if="!timerStore.isPopup">
            <v-list-item-subtitle>Stage</v-list-item-subtitle>
            <v-list-item-title>{{ timerStore.user?.usertype?.stage }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!timerStore.isPopup">
            <v-list-item-subtitle>Versuche je Starter</v-list-item-subtitle>
            <v-list-item-title>{{ timerStore.user?.usertype?.stageTryCount }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!timerStore.isPopup">
            <v-list-item-subtitle>Stage-Typ</v-list-item-subtitle>
            <v-list-item-title>{{ getTargetLabel() }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="timerStore.isPopup">
            <v-list-item-title>Popup</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:append>
        <v-img :width="35" cover :src="`${imageHost}/logo/wrSymbol-black-small.png`"></v-img>
      </template>
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'"> <component :is="Component" /> </transition>
      </router-view>
    </v-main>
    <ConfirmDialog ref="confirmDialog" />
    <InfoDialog ref="infoDialog" />
    <SnackBar ref="snackBar" />
    <LoadingComponent ref="loadingComponent" />
    <CRUDComponent ref="crud" />

    <Footer :app="true" v-if="!timerStore.user" />
  </v-app>
</template>

<style></style>
