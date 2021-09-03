<template>
    <template v-if="flag">
        {{ 123 }}
    </template>
</template>

<script>

import { reactive, toRefs } from 'vue';

export default {
    props: {
        componentName:{
            type: String
        },
        aaa: {
            type: String
        }
    },
    emits: ['getEmit'],
    async setup(props, { emit }) {
        const state = reactive({
            flag: false
        });
        await new Promise((resolve) => setTimeout(() => {
            state.flag = true;
            resolve();
        }, 2000))
        return {
            ...toRefs(state)
        };
    },
};
</script>

<style>
</style>