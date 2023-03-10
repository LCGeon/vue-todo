import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    // router
    path: "/",
    name: "home",

    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
