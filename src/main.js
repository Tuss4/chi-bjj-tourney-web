/* jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'


Vue.use(VueRouter)

const Home = { template: '<div>Events and stuff</div>'}


const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
