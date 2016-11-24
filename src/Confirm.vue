<template>
  <div class="confirm">
    <p>{{ status }}</p>
  </div>
</template>

<script>
  const request = require('request')

  export default {
    name: 'confirm',
    data () {
      return {
        status: ''
      }
    },
    mounted: function () {
      var url = 'https://api.tourneyfinder.com/v1/confirm/' + this.$route.params.token
      console.log(url)
      request({
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        uri: url
      }, function (error, response, body) {
        console.log(response.statusCode)
        var data = JSON.parse(body)
        console.log(data)
        console.log(this.status)
      })
    }
  }
</script>
