<template>
    <!-- <button @click="addNumber()">button</button> -->
    <!-- {{ $filters.currencyUSD(state.id) }}
    {{ pos.x }}{{ pos.y }} -->
    <!-- <button @click="addPos()">pos</button> -->
    <!-- <div v-for="(item, i) in state.ary" :key="i">
        <label :for="i">{{ i }}</label>
        <input type="file" :id="i" :ref="el => { divs[i] = el }">
    </div>
    <button @click="fileView()">save</button> -->
    <!-- <div class="bg"></div>
    <img src="./content/img/a.png" alt="" srcset="">
    <button @click="changeShllow()">changeShllow</button> -->
    <!-- <div>
        {{ statea }}
    </div>
    <div>
        {{ statea.gf }}
    </div>
    <div>
        {{ statea.gf.f }}
    </div>
    <div>
        {{ statea.gf.f.s }}
    </div> -->
    <div class="l-link">
        <router-link :to="{ name: 'index' }" class="c-link c-link_block c-link--og">index</router-link>
        <router-link :to="{ name: 'about' }" class="c-link c-link_block c-link--og">about</router-link>
        <!-- <a href="/index1.html" class="c-link c-link_block c-link--og">index1</a> -->
    </div>
    <router-view></router-view>
    <!-- <Suspense>
        <template #default>
            <index />
        </template>
        <template #fallback>
            <span>I'm a loading screen, I'm waiting the view to be ready!</span>
        </template>
    </Suspense> -->
</template>
<script>
    import index from 'f01/index.vue';
    import {
        defineAsyncComponent,
        ref,
        reactive,
        triggerRef,
        shallowReactive,
        shallowRef,
        watchEffect,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onActivated,
        onDeactivated,
        onErrorCaptured,
        watch,
        nextTick,
    } from "vue";
    import { useStore } from "vuex";
    export default {
        components: {
            index
        },
        setup() {
            const store = useStore();
            const state = reactive({
                ary: [1, 2, 3, 4, 5, 6],
                id: 123,
                name: "456",
            });
            const divs = ref([]);
            let statea = shallowRef({
                a: "a",
                gf: {
                    b: "b",
                    f: {
                        c: "c",
                        s: {
                            d: "d",
                        }
                    }
                }
            });
            let methods = {
                fileView() {
                    let reader = new FileReader();
                    divs._rawValue.forEach(item => {
                        reader.readAsDataURL(item.files[0]);
                        reader.onload = function() {
                            console.log(reader.result)
                        }
                    })
                },
                addNumber() {
                    state.id++;
                },
                addPos() {
                    pos.x++;
                    pos.y--;
                },
                changeShllow() {
                    statea.value.gf.f.c = 3
                    triggerRef(statea)
                }
            }
            onMounted(() => {
                console.log('App onMounted')
            })
            onBeforeMount(() => {
                console.log('App onBeforeMount')
            })
            onBeforeUpdate(() => {
                divs.value = [];
            })
            onErrorCaptured((error) => {
                console.log(error)
            })
            return {
                addNumber: methods.addNumber,
                state,
                addPos: methods.addPos,
                divs,
                fileView: methods.fileView,
                statea,
                changeShllow: methods.changeShllow
            };
        },
    };
</script>
<style lang="scss"></style>
