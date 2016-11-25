<template>
    <div class="home">
        <p v-if="display">Welcome back, {{ email }} (<a href="#" v-on:click="logoutUser">logout</a>)!</p>
        <p>
            Events and stuff.
        </p>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      email: '',
      display: false
    }
  },
  methods: {
    logoutUser: function (e) {
      e.preventDefault()
      localStorage.clear()
      location.reload()
    }
  },
  mounted: function () {
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
