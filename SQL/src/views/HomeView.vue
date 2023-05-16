<script setup>
import { storeToRefs } from 'pinia'
import { ReuseCards } from '../components/ReuseCards.vue'
</script>

<template>
  <main><ReuseCards v-for="names in data" :key="names.id" :NameData="L" class="cards" /></main>
</template>

<style scoped></style>
