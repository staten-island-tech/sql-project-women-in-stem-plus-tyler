<template>
  <div class="container">
    <sub v-for="items in info" :key="items.id">
      <h1 class="cards" >
        Fandom: {{ items.fandom_name }}
        <br />
        Ship: {{ items.ship_name }}
        <br />
        Major Tag:
        {{ items.major_tag }}
        <br />
        Sub Tag: {{ items.sub_tag }}
        <br />
        Sub Text: {{ items.sub_text }}
        <br />
        Title:
        {{ items.title_mb }}
        <br />
        <button @click="DeleteCard(id)" :id="items.id">Delete</button>
      </h1>
    </sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const info = ref()
const id = ref()

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

onMounted(() => {
  getData()
})

async function DeleteCard(id) {
  id = this.id
  console.log(this.id)
  await supabase.from('trial').delete().eq('id', id)
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
  margin: 1.5rem;
  padding: 1rem;
  height: 24rem;
  width: 10rem;
  /*  ----------------------------- */
  background-color: pink;
}
</style>
