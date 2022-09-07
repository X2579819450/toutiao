import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenObj: {}
  },
  getters: {},
  mutations: {
    SETTOKEN(state, token) {
      state.tokenObj = token
    }
  }
  // actions: {},
  // modules: {}
})
