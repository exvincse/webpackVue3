<template>
    <div>App: f01/index</div>
    <a href="/index1.html">index1.html</a>
    <div>{{ dataResource.ary[0] }}</div>
</template>
<script>
    import { onMounted, onBeforeMount, reactive } from "vue";
    import { useStore } from 'vuex';
    export default {
        components: {},
        async setup() {
            const store = useStore();
            const dataResource = reactive({});
            let params = {
                body: {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }
            }
            dataResource.ary = await store.dispatch('f02/jsonPosts', params);
            return {
                dataResource
            }
        }
    };
</script>
<style lang="scss"></style>
