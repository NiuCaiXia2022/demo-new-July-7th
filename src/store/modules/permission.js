// 导入路由表
// publicRouter 公有路由
import { privateRoutes, publicRouter } from '../../router'
// console.log(privateRoutes, 'reoute')
console.log(publicRouter, '公有路由')
// 路由表
export default {
  namespaced: true,
  state: {
    route: publicRouter
  },
  mutations: {},
  actions: {
    // 过滤路由
    filterRouter(menuList) {
      // const resRoute=[]
      console.log(privateRoutes)
      // privateRoutes.forEach(item => {
      //   console.log('过滤路由', item)
      // })
    }
  }
}
