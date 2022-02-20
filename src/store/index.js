import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reserveDate: new Date(),
    reserveTime: '選擇時間',
    reserveDoctor: '不指定醫師',
  },
  mutations: {
    updateReserveDate(state, data) {
      state.reserveDate = data
    },
    updateReserveTime(state, data) {
      state.reserveTime = data
    },
    updateReserveDoctor(state, data) {
      state.reserveDoctor = data
    },
  },
  actions: {},
  modules: {},
})
