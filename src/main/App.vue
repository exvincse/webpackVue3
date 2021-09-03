<template>
  <router-view :componentName="'about'" aaa="123" @getEmit="getEmit" ></router-view>
</template>

<script>
import { ref, reactive, toRefs, provide } from "vue"
export default {
  name: 'test',
  setup() {
    let getEmit = (item) => {
      console.log(item);
    };

    return {
      getEmit
    }
  }
}
</script>