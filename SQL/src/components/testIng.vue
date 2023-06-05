<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const usernames = ref('')
async function getUsername() {
  try {
    const { data, error } = await supabase.from('Login Info').select('username')
    usernames.value = data
  } catch (error) {}
}

onMounted(() => {
  getUsername()
})
</script>

<style lang="scss" scoped></style>
