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
      console.log(this.email, this.password)
      var body = JSON.stringify({email: this.email, password: this.password})
      var url = 'https://api.tourneyfinder.com/v1/user/register'
      request.post({
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        uri: url,
        body: JSON.stringify({email: this.email, password: this.password})
      }, function (error, response, body) {
        console.log(response.statusCode)
        if (response.statusCode != 201) {
          console.log(body)
          alert("Error during registration.")
        } else {
          var data = JSON.parse(body)
          console.log(data)
        }
      })
    }
  }
}
</script>
