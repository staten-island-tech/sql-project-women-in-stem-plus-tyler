<template>
  <div class="create">
    <button class="OpenForm" v-on:click="OpenForm" v-show="!isCreating">WEEWOW</button>
    <div class="card" v-show="isCreating">
      <div class="content">
        <form class="form">
          <div class="field">
            <label>Title</label>
            <br />
            <input class="formfield" placeholder="title" v-model="title_mb" type="text" />
          </div>
          <div class="field">
            <label>Fandom</label>
            <br />
            <input class="formfield" placeholder="fandom" v-model="fandom_name" type="text" />
            <br />
            <label>Ship</label>
            <br />
            <input class="formfield" placeholder="ship" v-model="ship_name" type="text" />
            <br />
            <label>Major Tag</label>
            <br />
            <input class="formfield" placeholder="major_tag" v-model="major_tag" type="text" />
            <br />
            <label>Minor Tag</label>
            <br />
            <input class="formfield" placeholder="minor_tag" v-model="sub_tag" type="text" />
            <br />
            <label>Description</label>
            <br />
            <textarea
              class="formfield"
              placeholder="description"
              v-model="content_text"
              type="text"
            ></textarea>
          </div>
          <div class="buttonbut2">
            <button type="button" class="create" v-on:click="SendForm()">Create</button>
            <button type="button" class="cancel" v-on:click="CloseForm()">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { onMounted, ref } from 'vue'
import { useUserStore } from '../store/user'

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
  await supabase.from('trial').insert([
    {
      fandom_name: fandom_name.value,
      ship_name: ship_name.value,
      major_tag: major_tag.value,
      sub_tag: sub_tag.value,
      content_text: content_text.value,
      title_mb: title_mb.value,
      user_id: useUserStore.currentUser
    }
  ])
  info.value.push(fandom_name, ship_name, major_tag, sub_tag, content_text, title_mb)
  console.log(info.value)
  alert('notes created')
  fandom_name.value = ''
  ship_name.value = ''
  major_tag.value = ''
  sub_tag.value = ''
  content_text.value = ''
  title_mb.value = ''
  // clear inputs
}
// notes show up in testing
</script>

<style scoped>
.create {
  align-items: center;
}
input {
  margin: 5px;
}
button {
  margin: 5px;
}
.form {
  text-align: center;
}
</style>
