<template>
    <div id="moderateEvent">
        <form action="#">
            <p>
                <a v-bind:href="permalink" target="blank">{{ name }}</a>
            </p>
            <label for="status">Status:</label>
            <div class="select">
                <select name="status" v-model="status">
                    <option value="true">
                        Approve
                    </option>
                    <option value="false">
                        Deny
                    </option>
                </select>
            </div>
            <button class="button" type="submit" v-on:click="updateStatus">Update</button>
        </form>
    </div>
</template>

<style src="bulma/css/bulma.css"></style>

<script>
const request = require('request')

export default {
    name: 'moderateEvent',
    data () {
        return {
            permalink: '',
            name: '',
            status: 'true'
        }
    },
    methods: {
        fetchEvent: function () {
            var that=this
            var url = 'https://api.tourneyfinder.com/v1/event/' + this.$route.params.id
            request({
                headers: {'Content-Type': 'application/json'},
                uri: url
            }, function (error, response, body) {
                if (response.statusCode != 200) {
                    alert("error grabbing event.")
                } else {
                    var data = JSON.parse(body)
                    that.permalink = data.permalink
                    that.name = data.name
                }
            })
        },
        updateStatus: function (e) {
            e.preventDefault()
            console.log(this.status)
            var that = this
            var url = 'https://api.tourneyfinder.com/v1/moderate-event/' + this.$route.params.id
            var status = null
            if (this.status == 'false') {
                status = false
            } else {
                status = true
            }
            var body = JSON.stringify({ approved: status})
            request.patch({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.token},
                uri: url,
                body: body
            }, function (error, response, body) {
                if (response.statusCode != 200) {
                    console.log(body)
                } else {
                    var data = JSON.parse(body)
                    location.assign('/#/event/' + data.id)
                }
            })
        }
    },
    mounted: function () {
        this.fetchEvent()
    }
}
</script>
