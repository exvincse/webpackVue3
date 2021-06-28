<template>
    <div>
        <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item }}</span>
        </div>
        <button class="getData" @click="getData()">getData</button>
        <button class="removeData" @click="removeData()">removeData</button>
        <level1-component :ary="ary" @updateData="updateData"></level1-component>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import level1Component from './level1Component';
export default {
    components: {
        level1Component
    },
    data() {
        return {
            // ary: []
        }
    },
    computed: {
        ...mapState({
            ary: state => JSON.parse(JSON.stringify(state.f01.jsonUsersData))
        })
    },
    methods: {
        async getData() {
            let res = await this.$store.dispatch('f01/jsonUsers');
            // this.ary = res;
        },
        removeData() {
            this.ary.splice(0,1);
        },
        updateData(item) {
            this.ary = item;
        }
    }
}
</script>