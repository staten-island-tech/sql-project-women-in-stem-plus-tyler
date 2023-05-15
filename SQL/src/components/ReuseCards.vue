<template>
  <div class="cards">
    <sub> {{ id }}, {{ fandom_name }} </sub>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = {
  id: Number,
  fandom_name: String
}
</script>

<style scoped>
.cards {
  background-color: thistle;
}
</style>
