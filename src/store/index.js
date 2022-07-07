import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getter'

export default createStore({
  getters,
  modules: {
    user
  }
})
