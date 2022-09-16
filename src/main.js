import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import AppLayout from "./layouts/AppLayout.vue";

// createApp(App).component("AppLayout", AppLayout).use(router).mount("#app");
createApp(App).use(router).mount("#app");
