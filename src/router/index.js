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
    {
      path: "/myteam",
      name: "MyTeam",
      component: () => import("../views/MyTeam.vue"),
      meta: {
        layout: "AppLayoutHeadCopy",
      },
    },
    {
      path: "/recipe",
      name: "Recipe",
      component: () => import("../views/Recipe.vue"),
      meta: {
        layout: "AppLayoutArtem",
      },
    },
    {
      path: "/neoncursor",
      name: "NeonCursor",
      component: () => import("../views/NeonCursor.vue"),
      meta: {
        layout: "AppLayoutArtem",
      },
    },
    {
      path: "/slider-page",
      name: "Slider",
      component: () => import("../views/slider-page.vue"),
      meta: {
        layout: "AppLayoutDefault",
      },
    },
    {
      path: "/github",
      component: () => import("../views/GithubJobs.vue"),
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

router.beforeEach(loadLayoutMiddleware);

export default router;
