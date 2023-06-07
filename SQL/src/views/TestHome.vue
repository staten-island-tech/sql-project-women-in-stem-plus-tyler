<template>
  <div class="cards">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Auth</RouterLink>
        <RouterLink to="/NewView">Input</RouterLink>
        <RouterLink to="/TestHome">Testing</RouterLink>
        <button type="button" @click="signOut()">Sign Out</button>
      </nav>
    </div>
    <ReuseCards />
  </div>
</template>

<script setup>
import ReuseCards from '../components/ReuseCards.vue'
</script>

<style scoped></style>
