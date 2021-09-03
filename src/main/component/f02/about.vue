<template>
  <button @click="changeComputed()">change Computed</button>
  <index1 />
  <Suspense>
    <template #default>
        <div v-for="item in ary.ITEM" :key="item.userId">
            {{ totalAry }}
            <article>
                <h2>{{ item.name }}</h2>
                <p>{{ item.address }}</p>
                <!-- {{ filters(10000) }} -->
            </article>
        </div>
    </template>
    <template #fallback>
      Articles loading...
    </template>
  </Suspense>
</template>
<script>
import index1 from '../f01/index';
import { reactive, toRefs, watch, watchEffect, computed, defineAsyncComponent, nextTick, ref, toRef } from 'vue';
import { onMounted, onErrorCaptured, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
// const store = useStore();
// const { proxy } = getCurrentInstance();
// const props = defineProps({
//     componentName: {
//         type: String,
//         default: ''
//     },
//     aaa: {
//         type: String,
//         default: 0
//     }
// })

// const emit = defineEmits(['getEmit']);
// const refs = ref(props);
// const state = reactive({
//     ary: {
//         ITEM: []
//     },
//     totalAry: computed({
//         get() {
//             return state.ary.ITEM.length;
//         },
//         set(value) {
//             state.ary.ITEM.push(value);
//             store.dispatch('f01/setJsonUsers', state.ary)
//         }
//     })
// });

// let res = await store.dispatch('f01/jsonUsers');
// state.ary = JSON.parse(JSON.stringify(res));

// let changeComputed = () => {
//     state.totalAry = {
//         address: "111",
//         name: "name 1",
//         phone: "1-662-590-6841",
//         userId: "1",
//         userKey: "802d506e-50ba-49e1-8517-1b288deac7c3"
//     };
//     refs.componentName = 123;
//     emit('getEmit', refs.componentName);
// }

// const { ary, totalAry } = toRefs(state);

export default {
    props: {
      componentName: {
        type: String,
        default: ''
      },
      aaa: {
        type: String,
        default: 0
      }
    },
    emits: {
      getEmit: (item) => {
        if (typeof(item) === 'number') {
          return true;
        }
        return false;
      }
    },
    components: {
        index1
    },
    async setup(props, { emit, attrs }) {
        const { proxy } = getCurrentInstance();
        const store = useStore();
        const state = reactive({
            ary: {},
            totalAry: computed({
                get() {
                    return state.ary.ITEM.length;
                },
                set(value) {
                    state.ary.ITEM.push(value);
                }
            })
        });

        onMounted(() => {
            state.ary.ITEM.push({
                address: "111",
                name: "name 1",
                phone: "1-662-590-6841",
                userId: "1",
                userKey: "802d506e-50ba-49e1-8517-1b288deac7c3"
            });
        })

        onErrorCaptured((error) => {
          console.log("其他的錯誤處理：", error);
        });

        let res = await store.dispatch('f01/jsonUsers');
        state.ary = JSON.parse(JSON.stringify(res));

        watchEffect(() => {
          console.log(props.componentName, attrs.aaa);
          emit('getEmit', 123456789);
        })

        watch([state.ary], (prev, curr) => {
          console.log('watch', prev, curr)
        })

        let changeComputed = () => {
            state.totalAry = {
                address: "111",
                name: "name 1",
                phone: "1-662-590-6841",
                userId: "1",
                userKey: "802d506e-50ba-49e1-8517-1b288deac7c3"
            }
        }

        return {
            ...toRefs(state),
            changeComputed,
            filters: proxy.$filters.currencyUSD
        }
    }
}
</script>