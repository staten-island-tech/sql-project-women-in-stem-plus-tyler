<script setup>
import { ref } from 'vue'

let data = await supabase.from('trial').select('fandom_name')
</script>

<template>
  <main></main>
</template>

<style scoped></style>
