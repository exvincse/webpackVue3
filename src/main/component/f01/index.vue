<template>
    <div>
        <!-- <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item }}</span>
        </div>
        <button class="getData" @click="getData()">getData</button>
        <button class="removeData" @click="removeData()">removeData</button>
        <level1-component :ary="ary" @updateData="updateData"></level1-component> -->
        <p class="decode-result">Last result: <b>{{ result }}</b></p>
       <qrcode-stream @decode="onDecode" @init="onInit" :track="true"></qrcode-stream>
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
            result: '',
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
        },
        onDecode(url) {
            this.result = url;
            window.open(url, '_blank');
        },
        async onDetect (promise) {
            try {
            const {
                content,      // decoded String
                location      // QR code coordinates
            } = await promise

            // ...
            } catch (error) {
            // ...
            }
        }
    }
}
</script>