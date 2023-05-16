<template>
  <div class="cards">
    <sub class="cards">{{ data }}, {{ Id }}</sub>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import supabase from '../lib/supabaseClient.js'

const info = ref([])
const FandomNames = ref('')

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
}

async function getFandomNames() {
  let { NameData } = await supabase.from('trial').select('fandom_name')
  FandomNames.value = NameData
}

onBeforeMount(() => {
  getData()
  getFandomNames()
})

const props = defineProps({
  NameData: String
})
</script>

<style scoped>
.cards {
  font-size: 10rem;
  background-color: black;
}
</style>
