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
var rawEmail = '';
var userEmail = '';
var rawToken = '';
var userToken = '';
if (cookieArray.length > 1) {
  rawEmail = cookieArray[0];
  userEmail = rawEmail.substring(6, rawEmail.length);
  rawToken = cookieArray[1];
  userToken = 'Token ' + rawToken.substring(6, rawToken.length);
}

var welcomeUser = new Vue({
    el: '#welcomeBack',
    data: {
        email: userEmail, // Set this to whatever is in the cookie.
        seen: false
    },
    methods: {
      clearCookies: function (e) {
        e.preventDefault();
        deleteCookie();
        location.reload();
      }
  },
  created: function () {
      if (rawEmail !== '') {
          this.seen = true;
      }
  }
});

var loginForm = new Vue({
    el: '#loginForm',
    data: {
        email: '',
        password: '',
        seen: true
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
                location.reload();
            };
            xhr.send(JSON.stringify({email:this.email, password:this.password}));
        }
    },
    created: function () {
        if (rawEmail !== '') {
            this.seen = false;
        }
    }
});
console.log(document.cookie);
