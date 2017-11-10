<template>
    <div class="register">
        <p v-if="errors">
            Try Again.
        </p>
        <form action="#">
            <div>
                <label for="email">Email</label>
                <input class="input" type="email" name="email" id="email" v-model="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input class="input" type="password" name="password" id="password" v-model="password">
            </div>
            <div>
                <button class="button" type="submit" v-on:click="registerUser">Register</button>
            </div>
        </form>
    </div>
</template>

<style src="bulma/css/bulma.css"></style>

<script>
const request = require('request')
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      errors: false
    }
  },
  methods: {
    registerUser: function (e) {
      e.preventDefault()
      var body = JSON.stringify({email: this.email, password: this.password})
      var url = 'https://api.tourneyfinder.com/v1/user/register'
      var that = this
      request.post({
        headers: {'Content-Type': 'application/json'},
        uri: url,
        body: body
      }, function (error, response, body) {
        if (response.statusCode != 201) {
          that.errors = true
        } else {
          var data = JSON.parse(body)
          var msg = "An email has been sent to: " + that.email
          alert(msg)
        }
      })
    }
  }
}
</script>
