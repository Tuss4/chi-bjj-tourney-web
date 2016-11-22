<template>
    <div class="login">
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
      password: ''
    }
  },
  methods: {
    loginUser: function (e) {
      e.preventDefault()
      console.log("Whut's good, bruh?")
      var body = JSON.stringify({email: this.email, password: this.password})
      var url = 'https://api.tourneyfinder.com/v1/user/login'
    }
  }
}
</script>
