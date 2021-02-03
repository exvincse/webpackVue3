
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import f01 from '../../src/main/store/modules/f01';
import index from '../../src/main/component/f01/index.vue';
import flushPromises from 'flush-promises';
const localVue = createLocalVue()
localVue.use(Vuex)
let promise = (params = {}) => Promise.resolve(params);

// jest.mock('axios', () => {
//   return {
//     get: jest.fn(() => promise()),
//     create: jest.fn(() => ({
//       get: jest.fn(() => promise()),
//       interceptors: {
//         request: { use: jest.fn(), eject: jest.fn() },
//         response: { use: jest.fn(), eject: jest.fn() }
//       }
//     }))
//   }
// })

// jest.mock('../../src/main/repository/modules/f01', () => {
//   return {
//     jsonUsers: jest.fn().mockResolvedValue([1,3])
//   }
// })

describe('AsyncButton', () => {
  let store;
  let state;
  let actions;
  beforeEach(() => {
    state = {
      jsonUsersData: []
    }
    actions = {
      jsonUsers: jest.fn(() => promise([1,3]))
    }
    
    store = new Vuex.Store({
      modules: {
        f01: {
          state: state,
          mutations: f01.mutations,
          actions: actions,
          namespaced: true
        }
      }
    })
  })

  it('測試vuex資料', async () => {
    let wrapper = shallowMount(index, { store, localVue })
    await wrapper.find('button').trigger('click');
    await flushPromises();
    store.commit('f01/setJsonUsers', [1,3]);
    wrapper.vm.$nextTick(() => {
      expect(store.state.f01.jsonUsersData.length).toBe(2);
      // console.log(wrapper.get('.test').text())
    })
  })
})