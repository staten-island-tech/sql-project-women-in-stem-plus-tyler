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
import { useUserStore } from '../store/user';

const info = ref([])
const ID = ref(Number)
const store = useUserStore()

onMounted(() => {
  getData()
  getID()
  // DeleteCard()
})

async function getData() {
  console.log
  let { data: trial } = await supabase.from('trial').select('*').eq('user_id', store.currentUser.user.id)
  info.value = trial
  console.log(trial)
  console.log(store.currentUser)
}

async function getID() {
  let { data } = await supabase.from('trial').select('id')
  ID.value = data
  console.log(data)
  return ID.value
}

// async function DeleteCard() {
//   try {
//     const { data, error } = await supabase.from('trial').delete().eq('id', biubow.value)
//     if (error) throw error
//   } catch (error) {
//     console.error(error)
//   }
// }

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
