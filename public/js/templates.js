/*jshint esversion: 6*/
var loginTemplate = `
<div id='loginForm'>
    <form action='#'>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="password">
        </div>
        <div>
            <button type="submit" v-on:click='loginUser'>Login</button>
        </div>
    </form>
</div>
`;


var registerTemplate = `
<div id='registerForm'>
    <form action='#'>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
</div>
`;
