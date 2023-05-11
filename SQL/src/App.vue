<script>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import LoginForm from './components/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  data() {
    return {}
  }
}
</script>

<template>
  <LoginForm />
</template>
