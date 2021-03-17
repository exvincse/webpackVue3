<!-- props -->
<template>
    <div>
        <button class="addData" @click="addData()">getData</button>
        <button class="removeData" @click="removeData()">removeData</button>
        <!-- <level2-component v-bind="$attrs" v-on="$lis。level2value="level2value"></level2-component> -->
    </div>
</template>

<script>
// import level2Component from './level2Component';
export default {
    props: {
        ary: {
            type: Array
        }
    },
    components: {
        // level2Component
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    beforeCreate() { },
    created() {
    },
    beforeMount() { },
    mounted() { },
    beforeUpdate() { },
    updated() { },
    beforeDestroy() { },
    destroyed() { },
    methods: {
        addData() {
            
        },
        removeData() {
            let ary = [...this.ary];
            ary.splice(0,1);
            this.$emit('updateData', ary)
        }
    }
};
</script>
