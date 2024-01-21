<template>
  <v-dialog v-model="dialog" width="auto" max-width="300px">
    <v-card class="rounded elevation-12">
      <v-card-title :style="`background-color: ${dialogData.color}`" class="errorHeadline">{{ dialogData.title }}</v-card-title>
      <v-card-text>
        {{ dialogData.text }}
      </v-card-text>
      <v-divider class="mx-4" />
      <v-card-actions>
        <v-btn icon="mdi-close" color="grey" @click="cancel" />
        <v-spacer />
        <v-btn prepend-icon="mdi-close" :color="dialogData.color" @click="close" variant="tonal">
          <template v-slot:prepend> <v-icon :color="dialogData.color"></v-icon> </template>{{ dialogData.confirmBtn }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";

const dialog = ref(false);
const dialogData = ref("");
const resolve = ref(null);
const reject = ref(null);

const open = (o) => {
  dialog.value = true;
  dialogData.value = o;

  return new Promise((res, rej) => {
    resolve.value = res;
    reject.value = rej;
  });
};

const close = () => {
  dialog.value = false;
  resolve.value(true);
};

const cancel = () => {
  dialog.value = false;
  reject.value(true);
};

defineExpose({
  open,
  close,
});
</script>

<style scoped>
.errorHeadline {
  /* background-color: red; */
  color: aliceblue;
}
</style>
