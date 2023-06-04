<template>
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
// import ListNotes from '../components/ListNotes.vue'
import { userSessionStore } from '../store/user'

export default {
  name: 'app',
  components: {
    CreateNotes,

    // ListNotes
  },
  data() {
    return {
      userSession: userSessionStore()
    }
  }
}
</script>

<style scoped></style>
