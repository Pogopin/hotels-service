import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import phoneMask from '@/utils/phoneMask.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('phone', phoneMask)

app.mount("#app");
