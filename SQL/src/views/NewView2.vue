<template>
  <div class="main">
    <!-- unimportant -->
    <header class="title">FIC WEEWOWO</header>
    <div class="body">
      <AddNotes />
    </div>
  </div>
</template>

<script>
import AddNotes from '../components/AddNotes.vue'
import { useUserStore } from '../store/user'
export default {
  components: { AddNotes },
  data() {
    return {
      user: useUserStore()
    }
  }
}
</script>

<style scoped></style>
