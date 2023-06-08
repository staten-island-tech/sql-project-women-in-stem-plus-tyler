<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/NewView">Create</RouterLink>
      <RouterLink to="/TestHome">Cards</RouterLink>
    </nav>
  </div>
  <div id="contain_button">
    <button @click="signOut()">Sign Out</button>
  </div>
  <div class="main">
    <h1>Fanfic Notes PP :></h1>
    <div class="form">
      <!-- <ListNotes v-bind:notes="notes"></ListNotes> -->
      <CreateNotes />
    </div>
  </div>
</template>

<script>
import CreateNotes from '../components/CreateNotes.vue'
import { useUserStore } from '../store/user'
import { supabase } from '../lib/supabaseClient'
import router from '../router'

export default {
  name: 'app',
  components: {
    CreateNotes

    // ListNotes
  },
  data() {
    return {
      store: useUserStore()
    }
  },
  methods: {
    async signOut() {
      store.logOut()
      await supabase.auth.signOut()
      console.log(store.currentUser)
      router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
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
h1 {
  text-align: center;
}
nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

#contain_button {
  display: flex;
  justify-content: flex-end;
}
button {
  display: flex;
}
</style>
