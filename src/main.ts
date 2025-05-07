import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import "@/styles/custom-bootstrap.scss";

createApp(App).use(store, key).use(router).mount("#app");
