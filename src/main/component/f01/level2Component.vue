<!-- props -->
<template>
    <div></div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        level2value: {
            type: String,
            dedault: false
        }
    },
    components: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    beforeCreate() { },
    created() {
        console.log(this.$attrs);
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
