import Vue from 'vue'
import Vuex from 'vuex'
// 登录持久化存储。vuex的插件包叫做`vuex-persistedstate@3.2.1`版本(配合vue2使用, 默认最新版是配合vue3使用)
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1. 用来存储登录成功之后，得到的 token
    token: ''
  },
  mutations: {
    // 2. 更新 token 的 mutation 函数
    updateToken (state, newToken) {
      state.token = newToken
    }
  },
  // 配置vuex的插件
  plugins: [createPersistedState()]
})