/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 10:13:31
 * @FilePath: /vue-ts-shelf/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/index.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
