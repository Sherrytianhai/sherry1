// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import Herolist from './components/Herolist'
import Shopcart from './components/Shopcart'
import $ from 'jquery'
import './assets/bootstrap-3.4.1-dist/css/bootstrap.css'
import './assets/bootstrap-3.4.1-dist/js/bootstrap.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Herolist,
  Shopcart,
  components: { App },
  template: '<App/>'
})
