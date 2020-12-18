import { createApp } from "vue";
import router from "./router";
import { store } from "./store/index";
import "./content/scss/all.scss";
import vuePlugin from "./content/js/vuePlugin";
import App from "./App.vue";

const app = createApp(App);
app.use(router).use(store).use(vuePlugin);
app.mount("#app");

export default app;