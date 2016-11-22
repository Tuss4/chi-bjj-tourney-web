<template>
    <div class="register">
        <form action="#">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password">
            </div>
            <div>
                <button type="submit">Register</button
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
