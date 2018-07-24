import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    isLoadErr: false,
    pList: []
  },
  mutations: {
    startLoading (state) {
      state.isLoading = true
    },
    endLoading (state) {
      state.isLoading = false
    },
    startLoadErr (state) {
      state.isLoadErr = true
    },
    endLoadErr (state) {
      state.isLoadErr = false
    },
    getList (state, data) {
      state.pList = data
    }
  },
  actions: {
    getRes (state) {
      return axios.get('http://wzapi.znswsse.com/product').then(msg => {
        let data = msg.data.res_infor
        store.commit('getList', data)
        console.log('store')
      })
    }
  }

})
export default store
