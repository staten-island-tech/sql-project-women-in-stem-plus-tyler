<template>
  <div class="cards">
    <sub class="cards">{{ Text }}, {{ Id }}</sub>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  let { data: trial, error } = await supabase.from('trial').select('fandom_name')
})

const props = defineProps({
  Text: String,
  Id: Number
})
</script>

<style scoped>
.cards {
  font-size: 10rem;
  background-color: black;
}
</style>
