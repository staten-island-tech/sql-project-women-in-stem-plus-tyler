<template>
  <div class="container">
    <sub v-for="items in info.slice().reverse()" :key="items">
      <div class="cards" :id="items.id">
        <div class="delete_button">
          <button @click="DeleteCard()" :key="items.id" class="button">X</button>
        </div>
        <h1 v-if="items.title_mb != null">{{ items.title_mb }}</h1>
        <br />
        <div class="info">
          <div v-if="items.fandom_name != null">Fandom: {{ items.fandom_name }}</div>
          <div v-if="items.ship_name != null">Ship: {{ items.ship_name }}</div>
          <div v-if="items.notes != null">Notes: {{ items.notes }}</div>
        </div>
        <br />
        <div class="content" v-if="items.content_text != null">
          {{ items.content_text }}
        </div>
        <div v-if="items.fic_link != null">
          <a href="{{ items.fic_link }}">Link</a>
        </div>
      </div>
    </sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { useUserStore } from '../store/user'

const info = ref([])
const id = ref(Number)
const store = useUserStore()

onMounted(() => {
  getData()
  getID()
  // DeleteCard()
})

async function getData() {
  console.log
  let { data: trial } = await supabase
    .from('trial')
    .select('*')
    .eq('user_id', store.currentUser.user.id)
  info.value = trial
  console.log(trial)
  console.log(store.currentUser)
}

async function getID() {
  let { data } = await supabase.from('trial').select('id')
  id.value = data
  console.log(data)
  return id.value
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

async function eraseCard() {
  const remove = document.querySelectorAll('.button')
  remove.forEach((eachRemove) => {
    eachRemove.addEventListener('click', (event) => {
      event.target.parentElement.remove()
      const card_id = event.target.parentElement.id
    })
  })
}

async function DeleteCard() {
  const { data } = await supabase.from('trial').delete().eq('id', id.value)
  alert('ha no. work in progress come back soon')
}

function TestDelete2() {}
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
  margin: auto;
}

.cards {
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  font-size: 1rem;
  text-align: center;
  margin: 1.5rem;
  padding: 1rem;
  height: 20rem;
  width: 25rem;
  /*  ----------------------------- */
  background-color: whitesmoke;
  border-radius: 10px;
  border-color: #9fd7f9;
  border-style: solid;
  border-width: 5px;
  overflow: auto;
}
.cards:hover {
  border-color: #3eaef4;
}
.button {
  border-radius: 50px;
  display: flex;
  justify-content: flex-end;
  border: transparent;
  background-color: whitesmoke;
  font-size: 1rem;
}
.button:hover {
  color: #3eaef4;
}
a:hover {
  color: #0077b6;
}
a:link {
  color: #04b3d6;
}
a:visited {
  color: purple;
}
</style>
