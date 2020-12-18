import { createStore } from "vuex";
import a from './modules/a';
let modules = {
  a
}
export const store = createStore({
  strict: true,
  modules
});
