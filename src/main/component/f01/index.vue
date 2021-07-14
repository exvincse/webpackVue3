<template>
    <div>
        <button @click="test()">test</button>
       <qrcode-stream
        @decode="onDecode"
        @init="onInit"
        :camera="cameraSettings"
        :paused="paused"
        ></qrcode-stream>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            cameraSettings: 'auto',
            paused: false
        }
    },

    methods: {
        async onInit (promise) {
            try {
                const { capabilities } = await promise;
            } catch (error) {
                console.log(error)
            }
        },
        async onDecode (content) {
            try {
                this.content = content;
                this.pauseCamera(); // 暫停鏡頭準備調用
                await this.redeem(content);
                setTimeout(() => {
                    this.unPauseCamera();
                    this.test();
                }, 2000);
            } catch (error) {
                setTimeout(() => {
                    this.unPauseCamera()
                }, 2000);
            }
        },
        pauseCamera () {
            this.paused = true
        },
        unPauseCamera () {
            this.paused = false
        },
        redeem (content) {
            return new Promise((resolve, reject) => {
                // 兌換票券請求
                if (content) { 
                    resolve('Success'); 
                } else { 
                    reject('failed'); 
                }
            })
        },
        test() {
            window.open(this.content)
        }
    }
}
</script>