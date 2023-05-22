<template>
  <div class="cards">
    <sub class="cards">{{ NameData }}, {{ Id }}, {{ info }}, {{ FandomNames }}</sub>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const info = ref([])
const FandomNames = ref('')

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

async function getFandomNames() {
  let { NameData } = await supabase.from('trial').select('fandom_name')
  FandomNames.value = NameData
  console.log(NameData)
}

onMounted(() => {
  getData()
  getFandomNames()
})

const props = defineProps({
  Id: Number,
  NameData: String,
  FandomNames: Array,
  info: Array
})
</script>

<style scoped>
.cards {
  font-size: 10rem;
  background-color: black;
}
</style>
