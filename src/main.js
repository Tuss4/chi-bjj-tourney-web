import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import Confirm from './Confirm.vue'


Vue.use(VueRouter)

const Home = { template: '<div>Events and stuff</div>'}


const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/confirm/:token', component: Confirm }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
