<template>
    <div class="login">
        <div>{{ errors }}</div>
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
                <button type="submit" v-on:click="loginUser">Login</button
            </div>
        </form>
    </div>
</template>

<script>
const request = require('request')

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
      var url = 'https://api.tourneyfinder.com/v1/user/login'
      request.post({
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        uri: url,
        body: JSON.stringify({email: this.email, password: this.password})
      }, function (error, response, body) {
        console.log(response.statusCode)
        if (response.statusCode != 200) {
          console.log(body)
          alert("Invalid username/password.")
        } else {
          var data = JSON.parse(body)
          localStorage.token = data.token
          localStorage.email = data.user.email
          console.log(localStorage)
        }
      })
    }
  }
}
</script>
