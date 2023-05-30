import { defineAsyncComponent } from "vue";

const HotelsList = defineAsyncComponent(() => import("./hotelsList/index.vue"));
const HotelCart = defineAsyncComponent(() => import("./hotelCart/index.vue"));
const Sidebar = defineAsyncComponent(() => import("./sidebar/index.vue"));
const SwiperSlider = defineAsyncComponent(() => import("./slider/index.vue"));
const Service = defineAsyncComponent(() => import("./service/index.vue"));
const Popup = defineAsyncComponent(() => import("./popupComponent/index.vue"));

export { HotelsList, HotelCart, Sidebar, SwiperSlider, Service, Popup };
