<template>
    <div>
        <!-- <div>App text start</div>
        <div>{{ counta }}</div>
        <div class="bbb">{{ bbb }}</div> -->
        <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item.name }}</span>
        </div>
        <button class="aaaaa" @click="addcount()">button</button>
    </div>
</template>
<script>
import Axios from "axios";
import repor from "../../../main/repository/index"
export default {
    // props: ['count'],
    data() {
        return {
            ary: []
        }
    },
    methods: {
        async addcount() {
            // let res = await this.$store.dispatch('f01/jsonUsers');
            // this.ary = res;

            let res = await repor.f01.jsonUsers();
            this.ary = res
            console.log(this.ary, res);
        }
    }
}
</script>