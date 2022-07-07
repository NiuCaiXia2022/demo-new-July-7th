import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../home'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }, {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
