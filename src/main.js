import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import AppLayout from "./layouts/AppLayout.vue";

const pinia = createPinia();

createApp(App)
  .component("AppLayout", AppLayout)
  .use(pinia)
  .use(router)
  .mount("#app");
