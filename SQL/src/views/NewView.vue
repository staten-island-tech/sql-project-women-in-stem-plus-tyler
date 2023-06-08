<template>
  <div class="main">
    <h1>Fanfic Notes PP :></h1>
    <h2>Click Button to Create</h2>
    <div class="form">
      <CreateNotes />
    </div>
  </div>
</template>

<script>
import CreateNotes from '../components/CreateNotes.vue'
import { useUserStore } from '../store/user'

export default {
  name: 'app',
  components: {
    CreateNotes
  },
  data() {
    return {
      store: useUserStore()
    }
  }
}
</script>

<style>
.main {
  text-align: center;
}
</style>
