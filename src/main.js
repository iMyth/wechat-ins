import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* eslint-disable no-new */

var router = new VueRouter({
  routes
})

App.router = router

new Vue(App).$mount('#app')
