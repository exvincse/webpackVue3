<template>
  <Suspense>
    <template #default>
      <div v-for="item in articleList.ary" :key="item.id">
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
import axios from 'axios'
export default {
    async setup() {
        onMounted(() => {
            console.log(123)
        })
        const articleList = reactive({});
        articleList.ary = await axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                return response.data
        })
        return {
            articleList
        }
    }
}
</script>