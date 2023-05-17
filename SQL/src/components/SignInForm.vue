<template>
  <div id="signIn">
    <form>
      <label for="username">Username: </label>
      <input type="username" v-model="username" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" />
      <button type="button" @click="SignIn()">Enter</button>
    </form>
    <h5>Don't have an account?</h5>
    <RouterLink to="/">Sign Up</RouterLink>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const username = ref('')
const password = ref('')
export default {
  components: { supabase },
  name: 'SignInForm',
  props: {},
  data() {
    return {
      username,
      password
    }
  },
  methods: {
    async SignIn() {
      try {
        console.log(username.value, password.value)
        let { error } = await supabase.auth.signInWithPassword({
          username: username.value,
          password: password.value
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
#signIn {
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 0rem 20rem;
  align-items: center;
}
button {
  display: flex;
  margin: auto;
}
input {
  display: flex;
}
</style>
