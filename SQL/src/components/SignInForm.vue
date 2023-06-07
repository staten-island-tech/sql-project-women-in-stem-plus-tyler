<template>
  <div id="signIn">
    <h3>Sign In</h3>
    <form>
      <label for="email">Email: </label>
      <input type="email" v-model="email" />
      <label for="password">Password: </label>
      <input type="password" v-model="password" />
      <button type="button" @click="getId(), SignIn()">Enter</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { useUserStore } from '../store/user'
const email = ref('')
const password = ref('')
const uid = ref('')
export default {
  components: { supabase },
  name: 'SignInForm',
  props: {},
  data() {
    return {
      email,
      password,
      uid
    }
  },
  methods: {
    async getId() {
      try {
        let { data } = await supabase.from('users').select('id').eq('email', email.value)
        console.log(data)
        router.push({ path: '/NewView' })
        console.log('id')
        await this.SignIn()
      } catch (error) {}
    },
    async SignIn() {
      console.log('sign')
      try {
        let { data: user, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        console.log('signed')
        if (error) {
          console.log(error)
        } else {
          console.log(user)
        }
      } catch (error) {
        console.log('error')
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
