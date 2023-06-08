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
import { useUserStore } from '../store/user'
export default {
  components: { },
  data() {
    return {
      store: useUserStore()
    }
  }
}
</script>

<style scoped></style>
