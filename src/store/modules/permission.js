// 导入路由表
// publicRouter 公有路由
import { privateRoutes, publicRouter } from '../../router/index'
// 路由表
export default {
  namespaced: true,
  state: {
    route: publicRouter
  },
  mutations: {
    // 公有路由信息
    setRoutes(state, route) {
      // 是公私路由表
      state.route = [...publicRouter, ...route]
    }
  },
  actions: {
    // 过滤路由
    filterRouter({ commit }, menuList) {
      // console.log(publicRouter, '公有路由')
      // console.log('总数据-过滤路由', menuList)
      const resRoute = []
      //   console.log(privateRoutes)
      // 循环私有路由表 跟接口的路由信息 做筛选
      menuList.forEach(item => {
        // console.log('item-过滤路由', item)
        // 筛选出 name 一样的
        const data = privateRoutes.filter(routes => {
          return item === routes.name
        })
        // console.log('私有路由表-item', data)
        // resRoute.push(data) // 在push给新的数组  拿到的是数组的数组 )[Array(1), Array(1), Array(1), Array(1)]
        resRoute.push(...data) // 在push给新的数组 这是直接数据 ['sys:dict:list', 'sys:menu:list', 'sys:role:list', 'sys:user:list']
        // console.log('私有路由表-all', resRoute)
      })
      // 添加路由重定向
      resRoute.push({
        path: '/:catchAll(.*)', // 匹配正则
        redirect: '/404'
      })
      commit('setRoutes', resRoute)
      return resRoute
    }
  }
}
