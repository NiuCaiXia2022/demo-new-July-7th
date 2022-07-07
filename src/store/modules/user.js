import Login from '../../api/user'
import storage from '../../utils/storage'

export default {
  namespaced: true,
  state: {
    token: storage.setItem('token') || ''
  },
  mutations: {
    // 登录  这个是在响应拦截器 调用
    Login(state, token) {
      // console.log('登录', token)
      state.token = token
      storage.setItem('token', token)
    },
    // 用户
    getUserInfo(state, userinfo) {
      Login.getUserInfo(userinfo)
    }
  },
  actions: {
    // 登录
    async getLogin({ commit }, playout) {
      // console.log('vuex登录', playout)
      // const res = await Login.getLogin(playout)
      // console.log('vuex登录', res)
      await Login.getLogin(playout)
    }
  }
}
