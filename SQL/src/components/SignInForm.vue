<template>
  <div id="signIn">
    <form>
      <label for="username">Username: </label>
      <input type="username" v-model="username" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" />
      <button type="button" @click="SignIn()">Enter</button>
      <h5>Don't have an account?</h5>
      <RouterLink to="/">Sign Up<RouterLink/>
    </form>
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
        const { data, error } = await supabase
          .from('Login Info')
          .insert([{ username: username.value, password: password.value }])
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
