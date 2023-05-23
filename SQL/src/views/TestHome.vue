<template>
  <div class="cards">
    <ReuseCards class="text" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReuseCards from '../components/ReuseCards.vue'

const Arr = ref([1, 2, 3, 4, , 5, 6, 7, 8])
</script>

<style scoped>
.cards {
  font-size: 1rem;
  background-color: lightgreen;
}

.text {
  font-size: 1rem;
}
</style>
