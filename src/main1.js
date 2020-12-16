import { createApp } from "vue";
import router from "./router/App1/App1";
import { store } from "./store/App1/index";
import "./content/App1/scss/all.scss";
import vuePlugin from "./content/App1/js/vuePlugin";
import App from "./App1.vue";

const app = createApp(App);
app.use(router).use(store).use(vuePlugin);
app.mount("#app1");

export default app;