<template>
    <router-link :to="{ name: 'index' }" class="c-link c-link_block c-link--og">index</router-link>
    <router-link :to="{ name: 'about' }" class="c-link c-link_block c-link--og">about</router-link>
    <a href="/index.html" class="c-link c-link_block c-link--og">index1</a>
    <router-view/>
</template>
<script>
    import {
        defineAsyncComponent,
        ref,
        reactive,
        triggerRef,
        shallowReactive,
        shallowRef,
        watchEffect,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onActivated,
        onDeactivated,
        onErrorCaptured,
        watch,
        nextTick
    } from "vue";
    import { useStore } from "vuex";
    export default {
        components: {},
        setup() {

        },
    };
</script>
<style lang="scss"></style>
