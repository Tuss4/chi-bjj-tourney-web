console.log("Mission control.");

var loginUrl = 'https://api.tourneyfinder.com/v1/user/login';

var loginForm = new Vue({
    el: '#loginForm',
    data: {
        email: '',
        password: ''
    },
    methods: {
        loginUser: function (e) {
            e.preventDefault();
            var xhr = new XMLHttpRequest();
            xhr.open('POST', loginUrl);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                data = JSON.parse(xhr.responseText);
                console.log(data);
            };
            xhr.send(JSON.stringify({email:this.email, password:this.password}));
        }
    }
});
