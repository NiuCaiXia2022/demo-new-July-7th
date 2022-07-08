import storage from '../../utils/storage'

export default {
  namespaced: true,
  state: {
    tags: storage.getItem('tags') || []
  },
  mutations: {
    // 添加
    addTag(state, tag) {
      const data = state.tags.find(item => item.path === tag.path)
      if (!data) {
        state.tags.push(tag)
        storage.setItem('tags', state.tags)
      }
    },
    // 删除
    delTag(state, tag) {
      state.tags.splice(tag, 1)
    }
  },
  actions: {
    // 添加
    addTag({ commit }, tag) {
      commit('addTag', tag)
    },
    // 删除
    delTag({ commit }, tag) {
      commit('delTag', tag)
    }
  }
}
