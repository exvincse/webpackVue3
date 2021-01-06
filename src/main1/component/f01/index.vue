<template>
    App1: f01/index
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
