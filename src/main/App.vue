<template>
    <div>App text start</div>
    <div>{{ dataResource.ary[0] }}</div>
    <div>App text end</div><br>
    <router-link :to="{ name: 'index' }">index</router-link><br>
    <router-link :to="{ name: 'about' }">about</router-link>
    <div>Router text start</div>
    <Suspense>
        <template #default>
            <router-view></router-view>
        </template>
        <template #fallback>
            Articles loading...
        </template>
    </Suspense>
    <div>Router text end</div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
export default {
    async setup() {
        const dataResource = reactive({});
        const store = useStore();
        dataResource.ary = await store.dispatch('f01/jsonUsers');
        return {
            dataResource
        }
    }
}
</script>