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
const axios = require('axios')

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
        var url = 'http://52.15.143.14/v1/event/'
        axios.get(url).then(
            function (response) {
                that.events = response.data.results;
            }
        ).catch(function (error) {
            console.log("We got some: ", error);
        });
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
