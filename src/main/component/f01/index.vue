<template>
    <div>
        <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item }}</span>
        </div>
        <button @click="addCount()">addCount</button>
        <button class="aaaaa" @click="getData()">button</button>
        <level1-component :ary="ary" :count="count"></level1-component>
    </div>
</template>
<script>
import level1Component from './level1Component';
export default {
    components: {
        level1Component
    },
    data() {
        return {
            ary: [],
            count: 0
        }
    },
    methods: {
        async getData() {
            let res = await this.$store.dispatch('f01/jsonUsers');
            this.ary = res
        },
        addCount() {
            this.count++
        }
    }
}
</script>