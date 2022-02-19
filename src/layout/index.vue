<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 10:35:57
 * @FilePath: /vue-ts-shelf/src/layout/index.vue
-->
<template>
  <div class="app-wrapper">
    <NavMenu></NavMenu>
    <Demo></Demo>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import NavMenu from './components/navMenu.vue';
import Demo from './demo.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    NavMenu,
    Demo
  },
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
</style>
