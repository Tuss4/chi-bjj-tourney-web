<template>
    <div class="home">
        <section class="hero is-small" v-if="display">
            <div class="hero-body">
                    <h1 class="title">
                        Welcome back, {{ email }}!</p>
                    </h1>
                    <h2 class="subtitle">
                        (<a href="#" v-on:click="logoutUser">logout</a>)
                    </h2>
            </div>

        </section>
        <p>
            <ul>
                <li v-for="event in events">
                    <a v-bind:href="event.permalink">{{ event.start_date }}: {{ event.name }} - {{ event.website }}</a>
                </li>
            </ul>
        </p>
    </div>
</template>

<style src="bulma/css/bulma.css"></style>

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
        var url = 'https://api.tourneyfinder.com/v1/event/'
        axios.get(url).then(
            function (response) {
                that.events = response.data;
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
