<template>
  <div class="create">
    <button class="OpenForm" v-on:click="OpenForm" v-show="!isCreating">WEEWOW</button>
    <div class="card" v-show="isCreating">
      <div class="content">
        <div class="form">
          <div class="field">
            <label>Title</label>
            <input v-model="title" type="text" />
          </div>
          <div class="field">
            <label>Fandom</label>
            <input v-model="fandom" type="text" />
            <label>Ship</label>
            <input v-model="ship" type="text" />
            <label>Major Tag</label>
            <input v-model="major_tag" type="text" />
            <label>Minor Tag</label>
            <input v-model="minor_tag" type="text" />
            <label>Description</label>
            <input v-model="description" type="text" />
          </div>
          <div class="buttonbut2">
            <button class="Create" v-on:click="SendForm()">Create</button>
            <button class="Cancel" v-on:click="CloseForm()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  getData()
})

import { supabase } from '../lib/supabaseClient'
import { onMounted, ref } from 'vue'

const title = ref('')
const fandom = ref('')
const ship = ref('')
const major_tag = ref('')
const minor_tag = ref('')
const description = ref('')
const isCreating = ref(false)
const info = ref([])

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}
function OpenForm() {
  isCreating.value = true
}
function CloseForm() {
  isCreating.value = false
}
function SendForm() {
  info.value.push(title.value && fandom.value && ship.value)
  console.log(info)
}
</script>

<style scoped></style>
