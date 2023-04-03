import { defineAsyncComponent } from 'vue'

const HotelsList = defineAsyncComponent(() => import('./hotelsList/index.vue'));
const HotelCart = defineAsyncComponent(() => import('./hotelCart/index.vue'));
const Sidebar = defineAsyncComponent(() => import('./sidebar/index.vue'));


export {
  HotelsList, HotelCart, Sidebar
}