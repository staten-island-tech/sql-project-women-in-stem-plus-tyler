<template>
  <div class="cards">
    <ReuseCards />
  </div>
</template>

<script setup>
import ReuseCards from '../components/ReuseCards.vue'
import { useUserStore } from '../store/user';

const user = useUserStore()
</script>

<style scoped></style>
