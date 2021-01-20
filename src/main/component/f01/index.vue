<template>
    <!-- <div>App: f01/index</div> -->
    <div class="count">{{ props.count }}</div>
</template>
<script>
    import { onMounted, onBeforeMount, reactive } from "vue";
    import { useStore } from 'vuex';
    export default {
        components: {},
        setup(props) {
            // const store = useStore();
            const dataResource = reactive({
                count: 0
            });
            let params = {
                body: {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }
            }
            // dataResource.ary = await store.dispatch('f02/jsonPosts', params);
            return {
                // dataResource
                props
            }
        }
    };
</script>
<style lang="scss"></style>
