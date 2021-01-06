import { createApp, defineAsyncComponent } from "vue";
import router from "./router";
import { store } from "./store/index";
import "./content/scss/all.scss";
import vuePlugin from "./content/js/vuePlugin";
import Api from "../commonJs/apiHandler";

const app = createApp({
    components: {
        App: defineAsyncComponent(
            async () => {
                await new Promise((resolve, reject) => {
                    return setTimeout(() => {
                        resolve();
                        Api.setToken('1BNODXICQRB7OPMCG491');
                    }, 1000)
                });
                return import(/* webpackChunkName: 'App' */ './App.vue');
            }
        )
    },
    template: `
        <Suspense>
            <template #default>
                <App />
            </template>
            <template #fallback>
                loading...
            </template>
        </Suspense>
    `
});

app.use(router).use(store).use(vuePlugin);
app.mount("#app");