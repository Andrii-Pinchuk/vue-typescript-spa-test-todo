import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Pages, PagesName } from "@/router/Pages";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: Pages.TODO,
    name: PagesName[Pages.TODO],
    component: () => import("../presentation/todo/TodoView.vue")
  },
  {
    path: Pages.LOGIN,
    name: PagesName[Pages.LOGIN],
    component: () => import("../presentation/login/LoginView.vue")
  }

];

const router = new VueRouter({
  routes
});

export default router;
