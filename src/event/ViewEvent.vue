<template>
    <div id="viewEvent">
        <h2>{{ name }}</h2>
        <p>
            {{ website }}
        </p>
    </div>
</template>

<script>
const request = require('request')

export default {
    name: 'viewEvent',
    data () {
      return {
        id: '',
        name: '',
        webiste: '',
        eventType: '',
        startDate: '',
        endDate: '',
        earlyRegDate: '',
        regularRegDate: '',
        earlyPrice: '',
        regularPrice: ''
      }
  },
  methods: {
      getEvent: function () {
          var url = 'https://api.tourneyfinder.com/v1/event/' + this.$route.params.id
          var that = this
          request({
              headers: {'Content-Type': 'application/json'},
              uri: url
          }, function (error, response, body) {
              if (response.statusCode != 200) {
                  console.log(body)
              } else {
                  var data = JSON.parse(body)
                  that.id = data.id
                  that.name = data.name
                  that.website = data.website
              }
          })
      }
  },
  mounted: function () {
      this.getEvent()
  }
}
</script>
