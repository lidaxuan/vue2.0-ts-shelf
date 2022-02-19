<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 15:59:48
 * @FilePath: /vue-ts-shelf/src/layout/demo.vue
-->

<template>
  <div class="flex flex-aic h-60 nav-menu">
    {{ user }}
    计算属性:{{ numChange }}
    <button @click="numAdd(num)">num+1</button>
    <div @click="getMixinTitle">sadad</div>
  </div>
</template>

<script lang="ts">
//例如：import 《组件名称》 from '《组件路径》';
import { Component, Mixins, Prop, Vue, Watch } from 'vue-property-decorator';
import MyMixin from './mixins';
interface Family {
  father?: String;
  mother?: String;
  sister?: String;
}
interface User {
  name?: String;
  sex?: String;
  family?: Family;
}

@Component({
  // mixins: [MyMixin]
})
export default class NavMenu extends Mixins(MyMixin) {
  public activeIndex: String = '1';
  private num: number = 1;
  public user: User = {};

  // @Prop({ required: true }) private num!: Number
  private created(): void {
    // this.handleSubmit('李大玄').then((res: any) =>{
    //   console.log(res);
    // })
    setTimeout(() => {
      this.user = { family: { sister: '迪丽热巴' }, sex: '男' };
    }, 1000);
    // const sister = this.user.family.sister;
    // console.log(sister);
  }

  get numChange(): number {
    console.log('get');

    return this.num;
  }
  set numChange(val) {
    this.num = val;
    console.log('set');
  }
  numAdd() {
    return this.numChange++;
  }

  @Watch('user', { deep: true, immediate: true })
  private userChange(value: String) {
    // console.log(JSON.stringify(value, null, 2));
  }
  private handleSelect(key: String, keyPath: String) {
    this.activeIndex = key;
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>