<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './store/user'
import { supabase } from './lib/supabaseClient'

const user = useUserStore()

if(user.currentUser != null) {
  supabase.auth.onAuthStateChange((event, user) => {
  console.log(event)
  user = user.currentUser
})
}


async function signOut() {
  console.log(user.currentUser)
  await supabase.auth.signOut().then(router.push('/'))
  user.logOut()
  console.log(user.currentUser)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Auth</RouterLink>
        <RouterLink to="/NewView">Input</RouterLink>
        <RouterLink to="/TestHome">Testing</RouterLink>
        <button type="button" @click="signOut()">Sign Out</button>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
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

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
