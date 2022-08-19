import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      layout: "mainLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/other",
    name: "other",
    component: () => import("../views/Other.vue"),
    meta: {
      layout: "mainLayout",
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
