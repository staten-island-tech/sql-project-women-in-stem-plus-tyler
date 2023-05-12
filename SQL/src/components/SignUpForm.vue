<template>
  <form>
    <input type="text" name="username" id="username" class="input" />
    <input type="password" name="password" id="password" class="input" />
    <button type="button" class="input" @click="signIn()">Enter</button>
  </form>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js'
export default {
  components: { supabase },
  name: 'SignUpForm',
  props: {},
  data() {
    return {}
  }
}

}
</script>

<style scoped>
.input {
  display: block;
  margin: 5px auto;
}
</style>
