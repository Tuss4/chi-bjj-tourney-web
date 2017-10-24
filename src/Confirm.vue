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
      var url = 'http://api.tourneyfiner.com/v1/confirm/' + this.$route.params.token
      var that = this
      console.log(url)
      request({
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        uri: url
      }, function (error, response, body) {
        if (response.statusCode != 200) {
          that.status = "Error during confirmation."
        } else {
          var data = JSON.parse(body)
          if (!data.confirmed) {
            that.status = "Error during confirmation."
          } else {
            that.status = "Account confirmed."
          }
        }
      })
    }
  }
</script>
