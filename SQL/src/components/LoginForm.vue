<template>
  <form>
    <input type="text" name="username" id="username" class="input" />
    <input type="password" name="password" id="password" class="input" />
    <button type="submit" class="input" @click="signUp()">Enter</button>
  </form>
</template>

<script>
export default {
  components: {},
  name: 'LoginForm',
  props: {},
  data() {
    return {}
  }
}

async function signUp() {
  let { data, error } = await supabase.auth.signUp({
    username: 'someone@email.com',
    password: 'kvYjTurWGVsRXwRrYSNx'
  })
}
</script>

<style scoped>
.input {
  display: block;
  margin: 5px auto;
}
</style>
