import { mount, shallowMount, RouterLinkStub, VueWrapper, DOMWrapper, config, flushPromises, MountingOptions } from '@vue/test-utils';

import index from '../../src/main/component/f01/index.vue';
import app from '../../src/main/App.vue';

import router from '../../src/main/router/index';

test('mounts a indexcomponent', async () => {
  // router.push('/')
  // await router.isReady()
  const wrapper = shallowMount(index, {
    // global: {
    //   plugins: [router]
    // },
    props: {
      count: 4
    }
  });
  expect(wrapper.html()).toContain(4)
})

// test('mounts a appcomponent', async () => {
//   // router.push('/')
//   // await router.isReady()
//   const wrapper = mount(app, {
//     // global: {
//     //   plugins: [router]
//     // },
//     props: {
//       count: 3
//     }
//   });
//   expect(wrapper.html()).toContain(3)
// })