
import Vuex from 'vuex'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import f01 from '../../src/main/store/modules/f01';
import store from '../../src/main/store/index';
import index from '../../src/main/component/f01/index.vue';
import flushPromises from 'flush-promises'
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
          actions: actions,
          namespaced: true
        }
      }
    })
  })

  it('fetches async when a button is clicked', async (done) => {
    let wrapper = shallowMount(index, { store, localVue })
    await wrapper.find('button').trigger('click');
    await flushPromises();
    wrapper.vm.$nextTick(async () => {
      await expect(wrapper.vm.ary.length).toBe(2);
      done()
    })
  })
})