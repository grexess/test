import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/scripts/router.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "@/style.css";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const weRaceTheme = {
  dark: false,
  colors: {
    wrDarkYellow: "#ffed00",
    wrLightYellow: "#FFF59D",
    wrDarkGreen: "#005058",
    wrDarkBlue: "#2196F3",
    wrLightBlue: "#00ccff",
    wrDark: "#192024",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "weRaceTheme",
    themes: {
      weRaceTheme,
    },
  },
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
