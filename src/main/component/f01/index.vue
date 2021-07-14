<template>
    <div>
        <!-- <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item }}</span>
        </div>
        <button class="getData" @click="getData()">getData</button>
        <button class="removeData" @click="removeData()">removeData</button>
        <level1-component :ary="ary" @updateData="updateData"></level1-component> -->
        <p class="decode-result">Last result: <b>{{ result }}</b></p>
       <qrcode-stream @decode="onDecode" @init="onInit" :paused="paused"></qrcode-stream>
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
            torch: true,
            paused: false
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
            // this.result = url;
            // this.paused = true;
            window.open("https://www.google.com/")
        },
        onCameraChange (promise) {
            promise.catch(error => {
                const cameraMissingError = error.name === 'OverconstrainedError'
                const triedFrontCamera = this.camera === 'front'
                if (triedFrontCamera && cameraMissingError) {
                    // no front camera on this device
                }
            })
        }
    }
}
</script>