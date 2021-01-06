<template>
  <Suspense>
    <template #default>
      <div v-for="item in dataResource.ary" :key="item.id">
        <article>
          <h2>{{ item.title }}</h2>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </template>
    <template #fallback>
      Articles loading...
    </template>
  </Suspense>
</template>
<script>
import { onMounted, reactive } from 'vue';
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
}
</script>