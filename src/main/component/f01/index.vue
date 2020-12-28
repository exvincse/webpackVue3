<template>
    <div>App: f01/index</div>
    <!-- <div>{{  }}</div> -->
</template>
<script>
    import { onMounted, onBeforeMount, reactive } from "vue";
    import { useStore } from 'vuex';
    export default {
        components: {
        },
        setup() {
            const obj = reactive({
                a: 123,
                b: 456
            })
            // const store = useStore();
            // const state = reactive({});
            // onBeforeMount(() => {
            //     console.log('index onBeforeMount');
            // })
            // onMounted(() => {
            //     console.log('index onMounted');
            // })
            // let res = await store.dispatch('f01/storeA');
            // console.log(res);
            return {
                obj
            }
        }
    };
</script>
<style lang="scss"></style>
