import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "./middleware";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        layout: "AppLayoutDefault",
      },
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/404.vue"),
      meta: {
        layout: "AppLayoutDefault",
      },
    },
    // {
    //   path: "/team",
    //   component: () => import("../views/Team.vue"),
    //   meta: {
    //     layout: "AppLayout",
    //   },
    // },
  ],
});

// router.beforeEach(loadLayoutMiddleware);

export default router;
