<template>
    <div>
        <div v-for="(item, index) in ary" :key="index">
            <span class="test">{{ item }}</span>
        </div>
        <!-- <button class="getData" @click="getData()">getData</button> -->
        <button class="removeData" @click="removeData()">removeData</button>
        <level1-component :ary="ary" @updateData="updateData"></level1-component>
    </div>
</template>
<script>
import level1Component from './level1Component';
export default {
    components: {
        level1Component
    },
    data() {
        return {
            ary: [{
                "id": 1,
                "name": "Fintone",
                "email": "bfulton0@fda.gov",
                "key": "12wehRiuD9oQZD1x7QmEX55CoLyhd5teiS"
            }, {
                "id": 2,
                "name": "Zaam-Dox",
                "email": "fbassam1@mapy.cz",
                "key": "19q2qt4kdetu8c54mbYj1YNcbnrvbxFJ6L"
            }, {
                "id": 3,
                "name": "Stim",
                "email": "elay2@alibaba.com",
                "key": "1KwfSyYbprsqzwZqjd2AV22V9AxRp8JVoc"
            }, {
                "id": 4,
                "name": "Lotlux",
                "email": "wisselee3@yandex.ru",
                "key": "1JotVs65ENDCiVZUh15HncVNkurpY4Cw5D"
            }, {
                "id": 5,
                "name": "Voyatouch",
                "email": "ggercken4@scientificamerican.com",
                "key": "1415EqAL7QJHBCynrgSTeWX5GrTqUv12p6"
            }, {
                "id": 6,
                "name": "Bitchip",
                "email": "dmerring5@artisteer.com",
                "key": "1Kihs4Pj7pEVFPoHZ6BgRCwxFLgimFdw5F"
            }, {
                "id": 7,
                "name": "Keylex",
                "email": "pemtage6@microsoft.com",
                "key": "1LVnZxyTUtampsb2ytxm1m56YmAa9wo4xq"
            }, {
                "id": 8,
                "name": "Tres-Zap",
                "email": "cboggers7@about.me",
                "key": "1Asp46Fi4MJ7iQMNN7ggRzxNi5odhj2oJB"
            }, {
                "id": 9,
                "name": "Kanlam",
                "email": "yfranceschielli8@weibo.com",
                "key": "17FVnx3Xo6yjQjR8Hycz3ZN2iZBiKhSmc2"
            }, {
                "id": 10,
                "name": "Flexidy",
                "email": "bscallon9@nymag.com",
                "key": "13BWVVqRRCsj7dPT8n8XDaWN8tCusWuF3y"
            }]
        }
    },
    methods: {
        // async getData() {
        //     let res = await this.$store.dispatch('f01/jsonUsers');
        //     this.ary = res;
        // },
        removeData() {
            this.ary.splice(0,1);
        },
        updateData(item) {
            this.ary = item;
        }
    }
}
</script>