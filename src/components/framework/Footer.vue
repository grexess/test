<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const links = computed(() => {
  const links = [];

  if (route.path === "/login") {
    links.push({ text: "Popup-Creator", href: "/timer/#/popup" });
  }
  if (route.path === "/popup") {
    links.push({ text: "Timer-login", href: "/timer/" });
  }

  return links;
});
</script>
<template>
  <v-footer class="text-wrDarkGreen text-center d-flex flex-column">
    <div>
      <v-btn v-for="(link, i) in links" :key="i" class="mx-4" variant="plain" :text="link.text" :href="link.href"></v-btn>
    </div>
    <div><v-btn variant="text" append-icon="mdi-open-in-new" :text="`${new Date().getFullYear()} — WeRace.de`" href="/"></v-btn></div>
  </v-footer>
</template>
