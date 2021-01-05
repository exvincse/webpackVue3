<template>
    <div>App: f01/index</div>
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
            dataResource.ary = await store.dispatch('f02/jsonPosts');
            return {
                dataResource
            }
        }
    };
</script>
<style lang="scss"></style>
