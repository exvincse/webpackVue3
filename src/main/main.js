import { createApp, defineAsyncComponent } from "vue";
import router from "./router";
import { store } from "./store/index";
import "./content/scss/all.scss";
import vuePlugin from "./content/js/vuePlugin";

const app = createApp({
    components: {
        App: defineAsyncComponent(() => import(/* webpackChunkName: 'App' */ './App.vue'))
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