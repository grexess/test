<script setup>
import { inject } from "vue";

import { useTimerStore } from "@/scripts/stores/index.js";
const timerStore = useTimerStore();
const emit = defineEmits(["start"]);

const crud = inject("$CRUD");

const startStarter = () => {
  const starter = timerStore.selectedStarter;
  crud.value.crudNonConfirmAction("start", () => timerStore.startSelectedStarter(), { obj: "Starter" });
  emit("start", { text: `Startnummer ${starter} gestartet` });
};
</script>

<template>
  <v-sheet class="elevation-4 box d-flex align-center justify-center mt-3 mb-2 zRelative">
    <div class="pa-4">
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
            class="d-flex align-center justify-center"
            :elevation="12"
            :height="150"
            :width="150"
            color="green"
            rounded="xl"
            @click="startStarter"
            ><div class="text-center">
              <span class="text-caption">Startnummer</span><br />
              <span class="text-h3">{{ timerStore.selectedStarter }}</span
              ><br /><v-divider />
              <span>START</span>
            </div>
          </v-btn></v-col
        ></v-row
      ><v-row justify="center" align="center">
        <v-col class="text-center">
          <v-btn class="text-caption" variant="tonal" size="small" :elevation="12" color="red" @click="timerStore.removeSelectedStarter">
            <template v-slot:prepend> <v-icon color="error">mdi-card-remove</v-icon> </template>Entfernen</v-btn
          ></v-col
        ></v-row
      >
    </div>
  </v-sheet>
</template>
