import Vue from 'vue';
import Vuex from "vuex";
import f01 from './modules/f01';
import f02 from './modules/f02';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    f01,
    f02
  }
})
