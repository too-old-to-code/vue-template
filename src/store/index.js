import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLoggedInStatus (state, status) {
      state.isLoggedIn = status
    }
  },
  actions: {
    login (ctx) {
      ctx.commit('setLoggedInStatus', true)
    },
    logout (ctx) {
      ctx.commit('setLoggedInStatus', false)
    }
  }
})
