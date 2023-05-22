<script>
import AuthScreen from './views/AuthenticationScreen.vue'
import { RouterView } from 'vue-router'
import { store } from './store'
import { supabase } from '../src/lib/supabaseClient'
export default {
  components: {
    AuthScreen
  },
  setup() {
    store.state.user = supabase.auth.user()
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_OUT') {
        store.state.user = null
      } else {
        store.state.user = session.user
      }
    })
  },
  return() {
    store
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
