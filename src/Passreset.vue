<template>
    <div class="passreset">
        <form action="#">
            <div>
                <label for="password">New Password</label>
                <input type="password" name="password" id="password" v-model="password" />
            </div>
            <div>
                <button type="submit" v-on:click="resetPass">Reset Password</button>
            </div>
        </form>
    </div>
</template>

<script>
const request = require('request')

export default {
    name: 'passreset',
    data () {
        return {
            password: ''
        }
    },
    methods: {
        resetPass: function (e) {
            e.preventDefault()
            var url = 'https://api.tourneyfinder.com/v1/reset/' + this.$route.params.token
            var body = JSON.stringify({new_password: this.password})
            request.post({
                headers: {'Content-Type': 'application/json'},
                uri: url,
                body: body
            }, function (error, response, body) {
                if (response.statusCode != 200) {
                    alert("Error resetting password.")
                } else {
                    alert("Password updated.")
                    location.assign('/#/login')
                }
            })
        }
    }
}
</script>
