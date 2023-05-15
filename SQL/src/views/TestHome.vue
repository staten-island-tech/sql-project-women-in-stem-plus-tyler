<template>
  <div>
    <ReuseCards :Text="Lichtenstein" :Id="3" class="cards" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReuseCards from '../components/ReuseCards.vue'
const Lichtenstein = ref('Hi?')
</script>

<style scoped>
.cards {
  font-size: 10rem;
  background-color: black;
}
</style>
