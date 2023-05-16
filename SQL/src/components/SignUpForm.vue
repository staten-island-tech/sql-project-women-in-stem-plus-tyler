<template>
  <form>
    <label for="username">Username: </label>
    <input type="text" name="username" id="username" class="input" />
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" class="input" />
    <button type="button" class="input" @click="SignUp()">Enter</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
export default {
  components: { supabase },
  name: 'SignUpForm',
  props: {},
  data() {
    return {}
  },
  methods: {
    async SignUp() {
      try {
        const username = ref('')
        const password = ref('')
        console.log(username.value, password.value)
        await supabase
          .from('Login Info')
          .insert([{ username: username.value, password: password.value }])
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 0rem 20rem;
}
</style>
