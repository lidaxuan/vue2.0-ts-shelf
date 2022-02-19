<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 10:13:31
 * @FilePath: /vue-ts-shelf/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
