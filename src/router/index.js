import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'
// import Layout from '@/views/Layout'
Vue.use(VueRouter)
// 首屏加载速度很慢
// 路由懒加载
// 使用到了路由页面，再去请求他

// 懒加载的chunk 默认的名字是模块的路径
// /*webpackChunkName: "新名字" */
const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/video',
        component: () => import('@/views/Video')
      },
      {
        path: '/qa',
        component: () => import('@/views/Qa')
      },
      {
        path: '/my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
    // component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
