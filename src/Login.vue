<template>
    <div class="login">
        <p class="loginError" v-if="errors">Incorrect email/password.</p>
        <form action="#">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password">
            </div>
            <div>
                <button type="submit" v-on:click="loginUser">Login</button>
                <router-link to="/forgot">Forgot password?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
const request = require('request')

function showErrors (errors, prop) {
  if (errors) {
    prop = true
  } else {
    prop = false
  }
}

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      errors: false
    }
  },
  methods: {
    loginUser: function (e) {
      e.preventDefault()
      var body = JSON.stringify({email: this.email, password: this.password})
      var url = 'http://52.15.143.14/v1/user/login'
      var that = this
      request.post({
        headers: {'Content-Type': 'application/json'},
        uri: url,
        body: JSON.stringify({email: that.email, password: that.password})
      }, function (error, response, body) {
        if (response.statusCode != 200) {
          that.errors = true
        } else {
          var data = JSON.parse(body)
          localStorage.token = data.token
          localStorage.email = data.user.email
          localStorage.moderator = data.moderator
          location.assign('/#/')
        }
      })
    }
  }
}
</script>

<style>
.loginError {
    color: red
}
</style>
