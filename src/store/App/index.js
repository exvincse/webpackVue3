import { createStore } from "vuex";
import f01 from './modules/f01';
let modules = {
  f01
}
export const store = createStore({
  strict: true,
  modules
});
