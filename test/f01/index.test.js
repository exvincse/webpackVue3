import Vuex from 'Vuex';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import store from '../../src/main/store/index';
import index from '../../src/main/component/f01/index.vue';
const localVue = createLocalVue()
localVue.use(Vuex)
let promise = (params = {}) => Promise.resolve(params);

jest.mock('axios', () => {
  return {
    get: jest.fn(() => promise({ data: [1,3,2,1,2,1] })),
    create: jest.fn(() => ({
      get: jest.fn(() => promise({ data: [1,3,2,1,2,1] })),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() }
      }
    }))
  }
})



describe('index', () => {
	// let store
	// let setDataMock
	// beforeEach(() => {
	//   setDataMock = jest.fn()
	//   store = new Vuex.Store({
	// 	state: { data: {} },
	// 	mutations: mutations,
	// 	actions: {
	// 	  getAsync: actions.getAsync
	// 	}
	//   })
	// })

  it('fetches async when a button is clicked', async (done) => {
    let wrapper = shallowMount(index, { store, localVue })
    await wrapper.find('button').trigger('click');
    wrapper.vm.$nextTick(async () => {
      await expect(wrapper.vm.ary.length).toBe(6);
      console.log(wrapper.vm.ary)
      done()
    })
  })
})