import router from "./router";
import store from "./store/index";
import "./content/scss/all.scss";
import App from './App1.vue';

import Vue from 'vue';

let app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')