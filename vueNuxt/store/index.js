import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    time: 0
  },
  mutations: {
    tick (state) {
      state.time++
    }
  },
  actions: {
    startTicks ({ commit }) {
      setInterval(() => commit('tick'), 1000)
    }
  }
})

export default store
