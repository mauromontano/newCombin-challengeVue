import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import MainLayout from "./layouts/MainLayout.vue";
import "./registerServiceWorker";
const app = createApp(App);

app.component("main-layout", MainLayout).use(store).use(router).mount("#app");
