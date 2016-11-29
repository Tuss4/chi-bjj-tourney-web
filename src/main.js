/* jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import Confirm from './Confirm.vue'
import Home from './Home.vue'
import Forgot from './Forgot.vue'
import Passreset from './Passreset.vue'
import  AddEvent from './event/AddEvent.vue'
import ViewEvent from './event/ViewEvent.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/confirm/:token', component: Confirm },
  { path: '/forgot', component: Forgot },
  { path: '/password-reset/:token', component: Passreset },
  { path: '/event/add', component: AddEvent },
  { path: '/event/:id', component: ViewEvent }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  computed: {
      canDisplay: function () {
          var authenticated = localStorage.getItem('email') && localStorage.getItem('token')
          if (authenticated) {
              return false
          } else {
              return true
          }
      }
  }
}).$mount('#app')
