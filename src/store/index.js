import { createStore } from 'vuex'
import user from './modules/user' // 登录数据
import getters from './getter' // getter 数据
import permission from './modules/permission' // 路由表数据

export default createStore({
  getters,
  modules: {
    user,
    permission
  }
})
