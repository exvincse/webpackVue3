import { defineAsyncComponent } from 'vue';
let f01 = [
    {
        path: '/',
        name: 'index',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "index" */ 'f01/index.vue'))
    }
]
export default f01;