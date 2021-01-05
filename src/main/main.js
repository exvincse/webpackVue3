import { createApp } from "vue";
import router from "./router";
import { store } from "./store/index";
import "./content/scss/all.scss";
import vuePlugin from "./content/js/vuePlugin";
import App from "./App.vue";
import Api from "../commonJs/apiHandler";


const app = createApp({
    components: {
        // App: async function() {
        //     await new Promise(resolve => setTimeout(resolve, 5000));
        //     return App;
        // }
        App
    },
    template: `
        <Suspense>
            <template #default>
                <App></App>
            </template>
            <template #fallback>
                loading...
            </template>
        </Suspense>
    `
});


Api.setToken('1BNODXICQRB7OPMCG491');
app.use(router).use(store).use(vuePlugin);
app.mount("#app");