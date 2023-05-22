<template>
  <div>
    <ReuseCards :NameData="NameData" :Id="1984" :FandomName="[]" class="cards" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReuseCards from '../components/ReuseCards.vue'
const NameData = ref('Test')
const Id = ref('09342')
const FandomName = ref('asdasdasda')
</script>

<style scoped>
.cards {
  font-size: 10rem;
  background-color: black;
}
</style>
