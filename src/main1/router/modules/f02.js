import { defineAsyncComponent } from 'vue';
let f02 = [
    {
        path: '/about',
        name: 'about',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "about" */ 'f02/about.vue'))
    }
]
export default f02;