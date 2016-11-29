<template>
    <div class="home">
        <p v-if="display">Welcome back, {{ email }} (<a href="#" v-on:click="logoutUser">logout</a>)!</p>
        <p>
            <ul>
                <li v-for="event in events">
                    <a v-bind:href="event.permalink">{{ event.start_date }}: {{ event.name }} - {{ event.website }}</a>
                </li>
            </ul>
        </p>
    </div>
</template>

<script>
const request = require('request')

export default {
  name: 'home',
  data () {
    return {
      email: '',
      display: false,
      events: []
    }
  },
  methods: {
    logoutUser: function (e) {
      e.preventDefault()
      localStorage.clear()
      location.reload()
    },
    fetchEvents: function () {
        var that = this
        var url = 'https://api.tourneyfinder.com/v1/event'
        request({
            headers: {'Content-Type': 'application/json'},
            uri: url
        }, function (error, response, body) {
            if (response.statusCode != 200) {
                console.log(body)
            } else {
                var data = JSON.parse(body)
                that.events = data.results
            }
        })
    }
  },
  mounted: function () {
      this.fetchEvents()
      if (localStorage.getItem('email') && localStorage.getItem('token')) {
        this.email = localStorage.email
        this.display = true
        return true
      } else {
        return false
      }
    }
}
</script>
