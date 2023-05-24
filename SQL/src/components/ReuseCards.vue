<template>
  <div class="cards">
    <sub class="text">{{ info }}</sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const info = ref()
/* const FandomNames = ref('') */

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

/* async function getFandomNames() {
  let { NameData } = await supabase.from('trial').select('fandom_name')
  FandomNames.value = NameData
  console.log(NameData)
} */

onMounted(() => {
  getData()
  /* getFandomNames() */
})

const props = defineProps({
  /*  FandomNames: Array, */
  info: Array
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
}
</style>
