import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: defineAsyncComponent(() => import(/* webpackChunkName: "index" */ '../../component/App1/f01/index.vue'))
        },
        {
            path: '/about',
            name: 'about',
            component: defineAsyncComponent(() => import(/* webpackChunkName: "about" */ '../../component/App1/f02/about.vue'))
        }
    ],
})

export default router;