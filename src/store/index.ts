/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 10:13:31
 * @FilePath: /vue2.0-ts-shelf/src/store/index.ts
 */
import Vue from "vue";
import Vuex from "vuex";
import { EnumItem } from './modules/menus';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });


export interface IRootState {
  enums: EnumItem
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
