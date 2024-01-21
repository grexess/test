<script setup>
import { ref } from "vue";

const dialog = ref(false);
const open = () => {
  dialog.value = true;
};

const close = () => {
  dialog.value = false;
};

defineExpose({
  open,
  close,
});
</script>
<template>
  <v-dialog ref="loader" v-model="dialog" persistent max-width="290">
    <v-card class="pa-4">
      <div class="text-center py-4">We race through the internet</div>
      <div class="my-4 text-center">
        <v-progress-circular indeterminate color="primary" />
        <v-progress-circular indeterminate color="red" />
        <v-progress-circular indeterminate color="purple" />
        <v-progress-circular indeterminate color="green" />
        <v-progress-circular indeterminate color="#FFC107" />
      </div>
    </v-card>
  </v-dialog>
</template>
