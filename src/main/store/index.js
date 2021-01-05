import { createStore } from "vuex";
import f01 from './modules/f01';
import f02 from './modules/f02';

let modules = {
  f01,
  f02
}
export const store = createStore({
  strict: true,
  modules
});
