<template>
    <div class="register">
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
                <button type="submit" v-on:click="registerUser">Register</button
            </div>
        </form>
    </div>
</template>

<script>
const request = require('request')
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
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
        body: JSON.stringify({email: that.email, password: that.password})
      }, function (error, response, body) {
        if (response.statusCode != 201) {
          alert("Error during registration.")
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
