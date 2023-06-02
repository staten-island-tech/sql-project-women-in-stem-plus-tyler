<template>
  <div class="create">
    <button class="OpenForm" v-on:click="OpenForm" v-show="!isCreating">WEEWOW</button>
    <div class="card" v-show="isCreating">
      <div class="content">
        <div class="form">
          <div class="field">
            <label>Title</label>
            <input class="formfield" placeholder="title" v-model="title_mb" type="text" />
          </div>
          <div class="field">
            <label>Fandom</label>
            <input class="formfield" placeholder="fandom" v-model="fandom_name" type="text" />
            <label>Ship</label>
            <input class="formfield" placeholder="ship" v-model="ship_name" type="text" />
            <label>Major Tag</label>
            <input class="formfield" placeholder="major_tag" v-model="major_tag" type="text" />
            <label>Minor Tag</label>
            <input class="formfield" placeholder="minor_tag" v-model="sub_tag" type="text" />
            <label>Description</label>
            <textarea
              class="formfield"
              placeholder="description"
              v-model="content_text"
              type="text"
            ></textarea>
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
import { supabase } from '../lib/supabaseClient.js'
import { onMounted, ref } from 'vue'

onMounted(() => {
  getData()
})

const fandom_name = ref('')
const ship_name = ref('')
const major_tag = ref('')
const sub_tag = ref('')
const content_text = ref('')
const title_mb = ref('')
const isCreating = ref(false)
const info = ref([])

function OpenForm() {
  isCreating.value = true
}
function CloseForm() {
  isCreating.value = false
}

async function getData() {
  let { data } = await supabase.from('trial').select('*')
  info.value = data
  console.log(data)
}

// function SendForm() {
//   info.value.push(title_mb.value && fandom_name.value && ship_name.value)
//   console.log(info)
// }

async function SendForm() {
  const { error } = await supabase.from('trial').insert([
    {
      fandom_name: fandom_name.value,
      ship_name: ship_name.value,
      major_tag: major_tag.value,
      sub_tag: sub_tag.value,
      content_text: content_text.value,
      title_mb: title_mb.value
    }
  ])
  info.value.push(fandom_name, ship_name, major_tag, sub_tag, content_text, title_mb)
  console.log(info.value)
}
//   if (error) throw error
// } catch (error) {
//   console.error(error)
// }
</script>

<style scoped></style>
