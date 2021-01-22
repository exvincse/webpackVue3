import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import f01 from './modules/f01';
import f02 from './modules/f02';

let ary = [f01, f02];

const router = new VueRouter({
    history: 'hash',
    routes: ary.reduce((prev, curr) => prev.concat(curr))
})

export default router;