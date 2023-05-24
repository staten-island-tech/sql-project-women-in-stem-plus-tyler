<template>
  <form>
    <h1>Forgot Password</h1>
    <label for="email">Email:</label>
    <input type="email" v-model="email" />
    <button>Send Reset Email</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
const email = ref('')
export default {
  name: 'forgotPassword',
  data() {
    return {
      email
    }
  },
  methods: {
    async resetPassword() {
      await supabase.auth.resetPasswordForEmail(email.value, {
        redirectTo: 'http://example.com/account/update-password'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
