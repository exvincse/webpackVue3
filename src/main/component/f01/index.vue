<template>
    <div>
        <!-- <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item }}</span>
        </div>
        <button class="getData" @click="getData()">getData</button>
        <button class="removeData" @click="removeData()">removeData</button>
        <level1-component :ary="ary" @updateData="updateData"></level1-component> -->
        <qrcode-stream :camera="camera" :torch="torch" @init="onInit"></qrcode-stream>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import level1Component from './level1Component';
export default {
    components: {
        level1Component,
    },
    data () {
        return {
            camera: 'auto',
            torch: true
        }
    },

    methods: {
        async onInit (promise) {
            try {
                const { capabilities } = await promise;
            } catch (error) {
            
            }
        }
    }
}
</script>