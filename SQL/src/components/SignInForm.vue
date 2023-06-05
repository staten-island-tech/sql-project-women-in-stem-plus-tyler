<template>
  <div id="signIn">
    <h3>Sign In</h3>
    <form>
      <label for="email">Email: </label>
      <input type="email" v-model="email" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" />
      <button type="button" @click="SignIn()">Enter</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { useUserStore } from '../store/user'
const email = ref('')
const password = ref('')
const user = ref('')
export default {
  components: { supabase },
  name: 'SignInForm',
  props: {},
  data() {
    return {
      email,
      password,
      user: useUserStore()
    }
  },
  methods: {
    async SignIn() {
      await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      const getUser = await supabase.auth.users.uuid
      getUser.value = user.currentUser
      console.log(user.currentUser)
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
