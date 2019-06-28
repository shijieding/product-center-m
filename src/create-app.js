// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import LyTab from 'ly-tab'
import App from './App.vue'
import router from './router/index'
import Meta from 'vue-meta'
import VueLazyLoad from 'vue-lazyload'
import Axios from 'axios'
import store from './store/store'
import './assets/css/common.css'
Axios.defaults.baseURL = process.env.VUE_ENV === 'server' ? 'http://127.0.0.1/' : 'http://wzapi.znswsse.com'
Axios.defaults.timeout = 20000
console.log(process.env.VUE_ENV)
Axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  store.commit('startLoading')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code === 401) {
  }
  store.commit('endLoading')
  return response
}, function (error) {
  // 对响应错误做点什么
  store.commit('endLoading')
  store.commit('startLoadErr')
  return Promise.reject(error)
})

Vue.prototype.axios = Axios
// Vue.prototype.axios = Axios
// Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(Meta)
Vue.use(LyTab)
Vue.use(VueLazyLoad, {
  error: './src/assets/img/err.png',
  loading: './src/assets/img/loading.gif',
  preLoad: 1.3
})
export default () => {
  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}
