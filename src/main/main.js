import router from "./router";
import store from "./store/index";
import "./content/scss/all.scss";
import App from './App.vue';
import Vue from 'vue';
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

let app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');