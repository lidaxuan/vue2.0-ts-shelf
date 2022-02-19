/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 10:13:31
 * @FilePath: /vue-ts-shelf/src/router/index.ts
 */
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Layout from '@/layout/index.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/user/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach((to: any, from: any) => {
  console.log(to);

})
export default router