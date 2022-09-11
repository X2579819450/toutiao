// import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'HEIMATOUTIAO',
      // storeage: window.sessionStorage
      reducer({ tokenObj }) {
        return { tokenObj }
      }
    })
  ],
  state: {
    tokenObj: {}
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SETTOKEN(state, token) {
      // 将token存在vuex
      state.tokenObj = token
    }
  }
  // actions: {},
  // modules: {}
})
