import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import Hotels from "../views/hotel/index.vue";
import HotelInfo from "../views/hotelInfo/index.vue";
import HotelBooking from "../views/HotelBooking/index.vue";

import { AppLayouts, loadLayoutMiddleware } from "./loadLayoutMiddleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
      meta: {
        layout: AppLayouts.default,
      },
    },
    {
      path: "/hotels",
      name: "hotels",
      component: Hotels,
      meta: {
        layout: AppLayouts.default,
      },
    },
    {
      path: "/hotels/:id",
      name: "info",
      props: true,
      component: HotelInfo,
      meta: {
        layout: AppLayouts.default,
      },
    },
    {
      path: "/hotels/:id/booking/:num",
      name: "booking",
      component: HotelBooking,
      props: true,
      meta: {
        layout: AppLayouts.default,
      },
    },
  ],
});
router.beforeEach(loadLayoutMiddleware);
export default router;
