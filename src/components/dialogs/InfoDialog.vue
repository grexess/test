<template>
  <v-dialog v-model="dialog" width="auto" max-width="300px">
    <v-card>
      <v-card-title :class="`bg-${dialogData.color}`">{{ dialogData.title }}</v-card-title>
      <v-card-text class="text-center">
        {{ dialogData.text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn icon="mdi-close" color="grey" @click="close" />
        <v-spacer />
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

defineExpose({
  open,
  close,
});
</script>
