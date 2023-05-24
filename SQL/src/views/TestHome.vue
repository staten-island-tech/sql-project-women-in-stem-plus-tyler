<template>
  <div class="cards">
    <sub v-for="items in info" :key="items.id" class="text"> {{ items }}</sub>
    <!--    <ReuseCards class="text" /> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import ReuseCards from '../components/ReuseCards.vue'

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

const info = ref()

const props = defineProps({
  FandomNames: Array,
  info: Array
})

onMounted(() => {
  getData()
})
</script>

<style scoped>
.cards {
  font-size: 1rem;
  width: 50rem;
  background-color: lightgreen;
}

.text {
  font-size: 1rem;
  margin-bottom: 10rem;
  background-color: aqua;
}
</style>
