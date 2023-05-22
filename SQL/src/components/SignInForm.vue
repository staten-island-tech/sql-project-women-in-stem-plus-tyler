<template>
  <div id="signIn">
    <form>
      <label for="email">Email: </label>
      <input type="email" v-model="email" />
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
const email = ref('')
const password = ref('')
export default {
  components: { supabase },
  name: 'SignInForm',
  props: {},
  data() {
    return {
      email,
      password
    }
  },
  methods: {
    async SignIn() {
      try {
        let { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value
        })
        if (error) throw error
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
