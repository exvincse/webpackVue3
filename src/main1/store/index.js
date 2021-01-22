import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

import f01 from './modules/f01';
import f02 from './modules/f02';

let modules = {
  f01,
  f02
}
export default new Vuex.Store({
  strict: true,
  modules
})
