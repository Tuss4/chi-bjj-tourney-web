<template>
    <div id="addEvent">
        <h2>Add Event</h2>
        <form action="#">
            <div>
                <label for="eventType">Event Type</label>
                <select name="eventType" id="eventType" v-model="eventType">
                    <option value="T">
                        Tournament
                    </option>
                    <option value="S">
                        Seminar
                    </option>
                </select>
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="eventName" />
            </div>
            <div>
                <label for="website">Website</label>
                <input type="url" name="website" id="website" v-model="website" />
            </div>
            <div>
                <label for="startDate">Start Date</label>
                <input type="date" name="startDate" id="startDate" v-model="startDate" />
            </div>
            <div>
                <label for="endDate">End Date</label>
                <input type="date" name="endDate" id="endDate" v-model="endDate" />
            </div>
            <div>
                <label for="earlyReg">Early Registration Date</label>
                <input type="date" name="earlyReg" id="earlyReg" v-model="earlyRegDate" />
            </div>
            <div>
                <label for="regularReg">Regular Registration Date</label>
                <input type="date" name="regularReg" id="regularReg" v-model="regularRegDate" />
            </div>
            <div>
                <label for="earlyPrice">Early Price</label>
                <input type="text" name="earlyPrice" id="earlyPrice" v-model="earlyPrice" />
            </div>
            <div>
                <label for="regularPrice">Regular Price</label>
                <input type="text" name="regularPrice" id="regularPrice" v-model="regularPrice" />
            </div>
            <div>
                <button type="submit" v-on:click="addNewEvent">Add Event</button>
            </div>
        </form>
    </div>
</template>

<script>
const request = require('request')

export default {
    name: 'addEvent',
    data () {
        return {
            eventName: '',
            website: '',
            eventType: 'T',
            startDate: '',
            endDate: '',
            earlyRegDate: '',
            regularRegDate: '',
            earlyPrice: '',
            regularPrice: ''
        }
    },
    methods: {
        addNewEvent: function (e) {
            e.preventDefault()
            if (!localStorage.token) {
                alert("Please login.")
                location.assign('/#/login')
            }
            var url = 'http://52.15.143.14/v1/event/'
            var body = JSON.stringify({
                name: this.eventName,
                website: this.website,
                event_type: this.eventType,
                start_date: this.startDate,
                end_date: this.endDate,
                early_registration_date: this.earlyRegDate,
                registration_date: this.regularRegDate,
                early_price: this.earlyPrice,
                price: this.regularPrice
            })
            var that = this
            request.post({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.token
                },
                uri: url,
                body: body
            }, function (error, response, body) {
                if (response.statusCode != 201) {
                    console.log(body)
                } else {
                    var data = JSON.parse(body)
                    console.log(data)
                    alert("Event created. You will be notified when it's approved.")
                    location.assign("/#/event/" + data.id)
                }
            })
        }
    }
}
</script>
