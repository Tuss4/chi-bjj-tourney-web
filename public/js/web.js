/*jshint esversion: 6*/
console.log("Mission control.");

var loginUrl = 'https://api.tourneyfinder.com/v1/user/login';

function addToStorage (email, token) {
    localStorage.email = email;
    localStorage.token = token;
}

function clearStorage () {
    localStorage.clear();
}

// Actual app

const Login = { template: loginTemplate };
const Register = { template: registerTemplate};


const routes = [
    { path: '/login', component: Login},
    { path: '/register', component: Register}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');

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
                addToStorage(data.user.email, data.token);
                location.reload();
            };
            xhr.send(JSON.stringify({email:this.email, password:this.password}));
        }
    }
});

// var welcomeUser = new Vue({
//     el: '#welcomeBack',
//     data: {
//         email: localStorage.getItem('email'), // Set this to whatever is in the cookie.
//         seen: false
//     },
//     methods: {
//       clearCookies: function (e) {
//         e.preventDefault();
//         clearStorage();
//         location.reload();
//       }
//   },
//   created: function () {
//       if (localStorage.getItem('email') !== null) {
//           this.seen = true;
//       }
//   }
// });
