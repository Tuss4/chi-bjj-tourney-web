<template>
    <div id="viewEvent">
        <h2>{{ name }} - ({{ getEventType }})</h2>
        <p>
            {{ website }}
        </p>
        <h3>Event Dates</h3>
        <p>
            {{ startDate }} - {{ endDate}}
        </p>
        <h3>Registration Dates</h3>
        <p>
            Early: {{ earlyRegDate }}
        </p>
        <p>
            Regular: {{ regularRegDate }}
        </p>
        <h3>Pricing</h3>
        <p>
            Early: ${{ earlyPrice }}
        </p>
        <p>
            Regular: ${{ regularPrice }}
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
                  that.eventType = data.event_type
                  that.startDate = data.start_date
                  that.endDate = data.end_date
                  that.earlyRegDate = data.early_registration_date
                  that.regularRegDate = data.registration_date
                  that.earlyPrice = data.early_price
                  that.regularPrice = data.price
              }
          })
      }
  },
  computed: {
    getEventType: function () {
        if (this.eventType == 'T') {
            return "Tournament"
        } else {
            return "Seminar"
        }
    }
  },
  mounted: function () {
      this.getEvent()
  }
}
</script>
