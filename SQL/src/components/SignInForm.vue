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
    async SignIn() {
      this.$router.push({ path: '/NewView' })
      console.log('sign')
      try {
        const { data: user, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        console.log(user)
        if (error) {
          console.log(error)
        } else {
          const store = useUserStore()
          store.
          store.getUser(user)
          const json = store.currentUser

          console.log(JSON.parse(JSON.stringify(json)))
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
