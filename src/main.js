import { createApp } from "vue";
import router from "./router/App/App";
import { store } from "./store/App/index";
import "./content/App/scss/all.scss";
import vuePlugin from "./content/App/js/vuePlugin";
import App from "./App.vue";

const app = createApp(App);
app.use(router).use(store).use(vuePlugin);
app.mount("#app");

export default app;