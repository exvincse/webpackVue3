
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import f01 from '../../src/main/store/modules/f01';
import index from '../../src/main/component/f01/index.vue';
import level1 from '../../src/main/component/f01/level1Component.vue';
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
  let ary = [{
    "id": 1,
    "name": "Fintone",
    "email": "bfulton0@fda.gov",
    "key": "12wehRiuD9oQZD1x7QmEX55CoLyhd5teiS"
  }, {
    "id": 2,
    "name": "Zaam-Dox",
    "email": "fbassam1@mapy.cz",
    "key": "19q2qt4kdetu8c54mbYj1YNcbnrvbxFJ6L"
  }, {
    "id": 3,
    "name": "Stim",
    "email": "elay2@alibaba.com",
    "key": "1KwfSyYbprsqzwZqjd2AV22V9AxRp8JVoc"
  }, {
    "id": 4,
    "name": "Lotlux",
    "email": "wisselee3@yandex.ru",
    "key": "1JotVs65ENDCiVZUh15HncVNkurpY4Cw5D"
  }, {
    "id": 5,
    "name": "Voyatouch",
    "email": "ggercken4@scientificamerican.com",
    "key": "1415EqAL7QJHBCynrgSTeWX5GrTqUv12p6"
  }, {
    "id": 6,
    "name": "Bitchip",
    "email": "dmerring5@artisteer.com",
    "key": "1Kihs4Pj7pEVFPoHZ6BgRCwxFLgimFdw5F"
  }, {
    "id": 7,
    "name": "Keylex",
    "email": "pemtage6@microsoft.com",
    "key": "1LVnZxyTUtampsb2ytxm1m56YmAa9wo4xq"
  }, {
    "id": 8,
    "name": "Tres-Zap",
    "email": "cboggers7@about.me",
    "key": "1Asp46Fi4MJ7iQMNN7ggRzxNi5odhj2oJB"
  }, {
    "id": 9,
    "name": "Kanlam",
    "email": "yfranceschielli8@weibo.com",
    "key": "17FVnx3Xo6yjQjR8Hycz3ZN2iZBiKhSmc2"
  }, {
    "id": 10,
    "name": "Flexidy",
    "email": "bscallon9@nymag.com",
    "key": "13BWVVqRRCsj7dPT8n8XDaWN8tCusWuF3y"
  }]
  // beforeEach(() => {
  //   state = {
  //     jsonUsersData: [],
  
  //   }
  //   actions = {
  //     jsonUsers: jest.fn(() => promise())
  //   }
    
  //   store = new Vuex.Store({
  //     modules: {
  //       f01: {
  //         state: state,
  //         mutations: f01.mutations,
  //         actions: actions,
  //         namespaced: true
  //       }
  //     }
  //   })
  // })

  // it('測試vuex資料', async () => {
  //   let wrapper = shallowMount(index, { store, localVue })
  //   await wrapper.find('.addCount').trigger('click');
  //   await flushPromises();
  //   store.commit('f01/setJsonUsers', ary);
  //   await wrapper.find('.button').trigger('click');
  //   state.jsonUsersData.splice(1,1);
  //   wrapper.vm.$nextTick(() => {
  //     expect(store.state.f01.jsonUsersData.length).toBe(2);
  //   })
  // })

  it('測試', async () => {
    let index1 = shallowMount(index, {
      localVue,
      propsData: {
        startData: '2021/03/17'
      }
    });
    let level11 = shallowMount(level1, {
      localVue
    });
    await level11.setProps({ary: ary});
    await level11.find('.removeData').trigger('click');
    expect(level11.props('ary').length).toBe(10);
    ary.splice(0,1);
    await index1.vm.$emit('updateData', ary);
    expect(index1.emitted().updateData.length).toBe(1);
  })
})