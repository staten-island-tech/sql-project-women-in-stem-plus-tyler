<template>
  <div>
    <ReuseCards
      v-for="info in $data"
      :key="info.id"
      :NameData="NameData"
      :Id="1984"
      class="cards"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ReuseCards from '../components/ReuseCards.vue'
</script>

<style scoped>
.cards {
  font-size: 10rem;
  background-color: black;
}
</style>
