<template>
  <div class="container">
    <sub v-for="items in info" :key="items.id"
      ><h1 class="cards">
        Content Type: {{ items.content_type }} Fandom: {{ items.fandom_name }} Ship:
        {{ items.ship_name }} Major Tag: {{ items.major_tag }} Sub Tag: {{ items.sub_tag }} Sub
        Text: {{ items.sub_text }} Title: {{ items.title_mb }}
      </h1></sub
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const info = ref()

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

onMounted(() => {
  getData()
})

const props = defineProps({
  info: Array
})
</script>

<style scoped>
.container {
  font-size: 1rem;
  border-radius: 1rem;
  /*  ----------------------------- */
  display: flex;
  flex-direction: row;
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
