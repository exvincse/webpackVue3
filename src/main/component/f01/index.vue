<template>
    <div>
        <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item.name }}</span>
        </div>
        <button class="aaaaa" @click="addcount()">button</button>
    </div>
</template>
<script>
// import repor from "../../../main/repository/index"
export default {
    data() {
        return {
            ary: []
        }
    },
    methods: {
        async addcount() {
            // let res = await repor.f01.jsonUsers();
            let res = await this.$store.dispatch('f01/jsonUsers');
            this.ary = res
        }
    }
}
</script>