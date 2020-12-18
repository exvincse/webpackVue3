import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import f01 from './modules/f01';
import f02 from './modules/f02';

let ary = [f01, f02];

const router = createRouter({
    history: createWebHashHistory(),
    routes: ary.reduce((prev, curr) => prev.concat(curr))
})

export default router;