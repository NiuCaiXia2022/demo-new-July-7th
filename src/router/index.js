import { createRouter, createWebHashHistory } from 'vue-router'
import Dicte from './modules/Dicte'
import Menu from './modules/Menu'
import Roles from './modules/Roles'
import User from './modules/User'
import home from '../home/index'

// 路由要导出去   不然拿不到数据
export const publicRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'home',
    // redirect: '/index',
    component: home,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: 'el-icon-s-home'
        },
        component: () => import('../home')
      }
    ]
  },
  {
    path: '/401',
    component: () => import('../views/404/401.vue')
  },
  {
    path: '/404',
    component: () => import('../views/404/404.vue')
  }
]

// 路由要导出去   不然拿不到数据
export const privateRoutes = [
  Dicte, Menu, Roles, User
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouter
})

export default router
