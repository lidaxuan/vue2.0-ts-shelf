<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 11:24:13
 * @FilePath: /vue-ts-shelf/src/layout/components/navMenu.vue
-->
<template>
  <div class="flex flex-aic h-60 nav-menu">
    <div class="logo h-60">
      <img height="61" src="~@/assets/images/logo.png" alt="" style="object-fit: cover" />
    </div>

    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#fff" text-color="#fff" background-color="#020327">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavMenu extends Vue {
  //注意点：3.public 是公用的意思，可省略;没有data,return,直接放要绑定的值
  public activeIndex: String = '1';
  private msg!: Number | String;

  // @Prop({ required: true }) private num!: Number

  private created(): void {
    console.log('created');
  }
  private mounted(): void {
    console.log('mounted');
  }
  private beforeUpdate(): void {
    console.log('beforeUpdate');
  } //生命周期 - 更新之前
  private updated(): void {
    console.log('updated');
  } //生命周期 - 更新之后
  private beforeDestroy(): void {
    console.log('beforeDestroy');
  } //生命周期 - 销毁之前
  private destroyed(): void {
    console.log('destroyed');
  } //生命周期 - 销毁完成
  private handleSelect(key: String, keyPath: String) {
    this.activeIndex = key;
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.nav-menu {
  background: #020327;
}
</style>