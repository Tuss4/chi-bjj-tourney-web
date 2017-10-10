<template>
    <div class="forgot">
        <p v-if="errors">
            Failed to send.
        </p>
        <form action="#">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" />
            </div>
            <div>
                <button type="submit" v-on:click="passwordReq">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
const request = require('request')

export default {
    name: 'forgot',
    data () {
        return {
            email: '',
            errors: false
        }
    },
    methods: {
        passwordReq: function (e) {
            e.preventDefault()
            var that = this
            var body = JSON.stringify({email: that.email})
            var url = 'http://52.15.143.14/v1/forgot/'
            request.post({
                headers: {'Content-Type': 'application/json'},
                uri: url,
                body: body
            }, function (error, response, body) {
                if (response.statusCode != 200) {
                    that.errors = true
                } else {
                    alert("Email sent to: " + that.email)
                    location.assign('/#/')
                }
            })
        }
    }
}
</script>
