<template>
  <div class="container">
    <sub v-for="items in info" :key="items.id">
      <div class="cards">
        <h1>{{ items.title_mb }}</h1>
        <br />
        <div class="info">
          Fandom: {{ items.fandom_name }}
          <br />
          Ship: {{ items.ship_name }}
          <br />
          Tags:
          {{ items.major_tag }}, {{ items.sub_tag }}
        </div>
        <br />
        <div class="content">
          {{ items.content_text }}
        </div>
        <br />
        <button @click="DeleteCard(id)" :id="items.id" class="button">Delete</button>
      </div>
    </sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const info = ref([])
const id = ref(Number)

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

onMounted(() => {
  getData()
})

async function DeleteCard(id) {
  await supabase.from('trial').delete().eq('id', info.id)
  id = info.id
  console.log(id)
}
</script>

<style scoped>
.container {
  font-size: 1rem;
  border-radius: 1rem;
  /*  ----------------------------- */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*  ----------------------------- */
  background-color: lavender;
}

.cards {
  font-size: 1rem;
  text-align: center;
  margin: 1.5rem;
  padding: 1rem;
  height: 20rem;
  width: 25rem;
  /*  ----------------------------- */
  background-color: pink;
}
</style>
