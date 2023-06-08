<template>
  <div class="parent">
    <div class="wrapper">
      <nav>
        <RouterLink to="/NewView">Create</RouterLink>
        <RouterLink to="/TestHome">Cards</RouterLink>
      </nav>
    </div>
    <div id="contain_button">
      <button @click="signOut()">Sign Out</button>
    </div>
    <div class="cards">
      <h1>Notes</h1>
      <ReuseCards />
    </div>
  </div>
</template>

<script setup>
import ReuseCards from '../components/ReuseCards.vue'
import { useUserStore } from '../store/user'
import { supabase } from '../lib/supabaseClient'
import router from '../router'

const store = useUserStore()

async function signOut() {
  store.logOut()
  console.log(store.currentUser)
  await supabase.auth.signOut()
  console.log(store.currentUser)
  router.push({ path: '/' })
}
</script>

<style scoped>
h1 {
  text-align: center;
}
nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
#contain_button {
  display: flex;
  justify-content: flex-end;
}
button {
  display: flex;
}
</style>
