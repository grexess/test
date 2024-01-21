import { createRouter, createWebHashHistory } from "vue-router";
import { useTimerStore } from "@/scripts/stores/index.js";

const routes = [
  {
    path: "/",
    component: () => import("@/views/StartPage.vue"),
    meta: {
      title: "Start",
      inNav: false,
      auth: true,
      showHeader: true,
    },
  },
  // {
  //   path: "/test",
  //   component: () => import("@/views/TestPage.vue"),
  //   meta: {
  //     title: "Test",
  //     inNav: true,
  //     auth: true,
  //     showHeader: false,
  //     transition: "slide",
  //   },
  // },
  // {
  //   path: "/settings",
  //   component: () => import("@/views/SettingsPage.vue"),
  //   meta: {
  //     title: "Einstellungen",
  //     inNav: true,
  //     auth: true,
  //     showHeader: false,
  //     transition: "slide",
  //   },
  // },
  {
    path: "/popup",
    component: () => import("@/views/PopupCreationPage.vue"),
    meta: {
      title: "Popup erstellen",
      inNav: false,
      auth: false,
      showHeader: false,
      transition: "slide",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      title: "Login",
      inNav: false,
      auth: false,
      showHeader: false,
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory("/timer24"),
  linkActiveClass: "active",
  routes,
});

router.beforeEach(async (to, from) => {
  // store must be initialized here before any action is called
  const timerStore = useTimerStore();
  // authentication required but no user available
  if (to.meta.auth === true && !timerStore.user) {
    timerStore.returnUrl = to.fullPath;
    return "/login";
  }
});
