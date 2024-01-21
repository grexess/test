<script setup>
import { inject } from "vue";
import Parse from "parse/dist/parse.min.js";
import { useRoute } from "vue-router";
import { router } from "@/scripts/router.js";
const route = useRoute();

import { useTimerStore } from "@/scripts/stores/index.js";
const timerStore = useTimerStore();

const snackBar = inject("$SnackBar");
const infoDialog = inject("$InfoDialog");
const loadingComponent = inject("$LoadingComponent");
const confirmDialog = inject("$ConfirmDialog");

const actionMap = new Map([
  ["read", { action: "Lesen", color: "red" }],
  ["start", { action: "Starten", color: "red" }],
  ["logoutConcurrentUser", { action: "Logout", color: "red" }],
]);

const crudNonConfirmAction = async (crudAction, crudFunction, { obj }) => {
  const { action, color } = actionMap.get(crudAction);
  const errorDialogData = {
    title: `${obj} - ${action}`,
    color: color,
  };
  const loader = loadingComponent.value;

  try {
    loader.open();
    await crudFunction.apply();
    loader.close();
  } catch (error) {
    loader.close();
    errorDialogData.text = error.message || error;
    await infoDialog.value.open(errorDialogData);
    handleParseError(error);
  }
};

const crudConfirmAction = async (crudAction, crudFunction, { obj, objText }) => {
  const { title, text1, text2, color, action, confirmIcon } = actionMap.get(crudAction);
  const confirmDialogData = {
    title,
    text: `${obj} [${objText}] ${text1}?`,
    color,
    confirmBtn: action,
    confirmIcon,
  };
  const snackBarData = { text: `${obj} [${objText}]  ${text2}` };
  const errorDialogData = {
    title: `${obj} - ${action}`,
    color: color,
  };
  await confirmDialog.value.open(confirmDialogData);
  const loader = loadingComponent.value;

  try {
    loader.open();
    await crudFunction.apply();
    snackBar.value.open(snackBarData);
    loader.close();
  } catch (error) {
    loader.close();
    errorDialogData.text = error.message || error;
    await infoDialog.value.open(errorDialogData);
    handleParseError(error);
  }
};

const handleParseError = (err) => {
  switch (err.code) {
    case Parse.Error.INVALID_SESSION_TOKEN:
      Parse.User.logOut();
      router.push("/login");
      break;
    // Other Parse API errors that you want to explicitly handle
  }
};

defineExpose({
  crudNonConfirmAction,
  crudConfirmAction,
});
</script>

<template></template>
