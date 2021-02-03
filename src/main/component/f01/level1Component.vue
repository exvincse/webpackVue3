<!-- props -->
<template>
    <div>
        <level2-component v-bind="$attrs" v-on="$listeners" :level2value="level2value"></level2-component>
    </div>
</template>

<script>
import level2Component from './level2Component';
export default {
    components: {
        level2Component
    },
    data() {
        return {
            level2value: 'level2value'
        };
    },
    computed: {},
    watch: {},
    beforeCreate() { },
    created() {
        console.log(this.count)
    },
    beforeMount() { },
    mounted() { },
    beforeUpdate() { },
    updated() { },
    beforeDestroy() { },
    destroyed() { },
    methods: {}
};
</script>
