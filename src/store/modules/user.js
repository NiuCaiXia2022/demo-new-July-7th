import Login from '../../api/user'
import storage from '../../utils/storage'

export default {
  namespaced: true,
  state: {
    token: storage.setItem('token') || '',
    userinfo: '',
    menu: ''
  },
  mutations: {
    // 登录  这个是在响应拦截器 调用
    Login(state, token) {
      // console.log('登录', token)
      state.token = token
      storage.setItem('token', token)
    },
    // 用户
    userInfo(state, userinfo) {
      state.userinfo = userinfo
    },
    // 菜单
    menuList(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    // 登录 在请求头调用
    async getLogin({ commit }, playout) {
      // console.log('vuex登录', playout)
      // const res = await Login.getLogin(playout)
      // console.log('vuex登录', res)
      await Login.getLogin(playout)
    },
    // 用户信息  在权鉴里调用
    async getUserInfo({ commit }) {
      const res = await Login.getUserInfo()// 用户信息
      // const menu = await Login.getMenu()// 菜单
      commit('userInfo', res)
      // commit('menuList', menu)
      // console.log('用户信息vuex', res)
      return res
    },
    //   在权鉴里调用
    async getMenu({ commit }) {
      const response = await Login.getMenu()
      // console.log('vuex菜单', response.data.data)
      commit('menuList', response.data.data)
      return response.data.data
    }
  }
}
