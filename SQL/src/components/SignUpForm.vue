<template>
  <div id="signUp">
    <h3>Sign Up</h3>
    <form>
      <label for="email">Email: </label>
      <input type="email" v-model="email" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" />
      <button type="button" @click="register()">Enter</button>
    </form>
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
    async register() {
      await this.userStore.signIn(this.email, this.password)
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
