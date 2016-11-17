console.log("Mission control.");

var loginUrl = 'https://api.tourneyfinder.com/v1/user/login';

// Set cookie.
function setCookie (email, token) {
    console.log(token);
    document.cookie = "email=" + email;
    document.cookie = "token=" + token;
}

function deleteCookie () {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

var cookieArray = document.cookie.split(';');
var rawEmail = cookieArray[0];
var userEmail = rawEmail.substring(6, rawEmail.length);
var rawToken = cookieArray[1];
var userToken = 'Token ' + rawToken.substring(6, rawToken.length);

var welcomeUser = new Vue({
    el: '#welcomeBack',
    data: {
        email: userEmail // Set this to whatever is in the cookie.
    }
});

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
                setCookie(data.user.email, data.token);
            };
            xhr.send(JSON.stringify({email:this.email, password:this.password}));
        }
    }
});
console.log(document.cookie);
