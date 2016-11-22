import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Login.vue'


Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(Login)
})
