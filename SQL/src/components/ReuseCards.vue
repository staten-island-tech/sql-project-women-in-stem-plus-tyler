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
        <button @click="eraseCard()" :key="items.id" class="button">Delete</button>
      </div>
    </sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const info = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const ID = ref(Number)
const UUID = ref('')

onMounted(() => {
  getData()
  getID()
  DeleteCard()
  getUUID()
})

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

async function getID() {
  let { data } = await supabase.from('trial').select('id')
  ID.value = data
  console.log(data)
  return ID.value
}

async function getUUID() {
  let { data } = await supabase.from('users').select('id')
  UUID.value = data
  console.log(data)
}

async function DeleteCard() {
  try {
    const { data, error } = await supabase.from('trial').delete().eq('id', biubow.value)

    if (error) throw error
  } catch (error) {
    console.error(error)
  }
}

function TestDelete() {}

onMounted(() => {
  getData()
  getID()
  getUUID()
})
let biubow = async function idmb() {
  const { stuff } = await supabase.from('trial').select('id')
}

function eraseCard() {
  const remove = document.querySelectorAll('.button')
  remove.forEach((eachRemove) => {
    eachRemove.addEventListener('click', (event) => {
      event.target.parentElement.remove()
    })
  })
}

function TestDelete() {
  info.forEach((item) => {
    async function DeleteCard() {
      const { data } = await supabase.from('trial').delete().eq('id', item.id)
    }
  })
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
  justify-content: center;
  /*  ----------------------------- */
  background-color: lavender;
  margin: auto;
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
