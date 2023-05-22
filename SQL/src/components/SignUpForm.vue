<template>
  <div id="signUp">
    <form>
      <label for="email">Email: </label>
      <input type="email" v-model="email" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" />
      <button type="button" @click="SignUp()">Enter</button>
    </form>
    <h5>Already have an account?</h5>
    <RouterLink to="/signin">Sign In</RouterLink>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const email = ref('')
const password = ref('')
export default {
  components: { supabase },
  name: 'SignUpForm',
  props: {},
  data() {
    return {
      email,
      password
    }
  },
  methods: {
    async SignUp() {
      try {
        console.log(email.value, password.value)
        const { error } = await supabase.auth.signUp({
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
#signUp {
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
