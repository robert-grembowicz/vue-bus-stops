import BusLinesView from "@/views/BusLinesView.vue";
import StopsView from "@/views/StopsView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BusLinesView,
  },
  {
    path: "/stops",
    component: StopsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
