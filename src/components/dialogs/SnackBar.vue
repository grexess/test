<template>
  <v-snackbar v-model="snackbar" :timeout="1500" color="blue-grey" rounded="pill" class="text-center"
    >{{ snackBarData.text }} <template v-slot:actions> <v-btn icon=" mdi-close" @click="snackbar = false"> </v-btn> </template
  ></v-snackbar>
</template>

<script setup>
import { ref } from "vue";

const snackbar = ref(false);
const snackBarData = ref("");
const open = (o) => {
  snackbar.value = true;
  snackBarData.value = o;
};

defineExpose({
  open,
});
</script>
