<template>
  <div class="create">
    <button class="OpenForm" v-on:click="OpenForm" v-show="!isCreating">WEEWOW</button>
    <div class="card" v-show="isCreating">
      <div class="content">
        <form class="form">
          <div class="field">
            <label for="title">Title</label>
            <br />
            <input
              class="formfield"
              placeholder="Post Title"
              v-model="title_mb"
              type="text"
              id="title"
            />
          </div>
          <div class="field">
            <label for="fandom">Fandom</label>
            <br />
            <input
              class="formfield"
              placeholder="Fandom Name"
              v-model="fandom_name"
              type="text"
              id="fandom"
            />
            <br />
            <label for="ship">Ship</label>
            <br />
            <input
              class="formfield"
              placeholder="Ship Name"
              v-model="ship_name"
              type="text"
              id="ship"
            />
            <br />
            <label for="fic_notes">Notes</label>
            <br />
            <input
              class="formfield"
              placeholder="Notes"
              v-model="fic_notes"
              type="text"
              id="fic_notes"
            />
            <br />
            <label for="desc">Description</label>
            <br />
            <textarea
              class="formfield"
              placeholder="Description"
              v-model="content_text"
              type="text"
              id="desc"
            ></textarea>
            <br />
            <label for="fic_link">Link To Fanfic</label>
            <br />
            <input
              class="formfield"
              placeholder="Link"
              v-model="fic_link"
              type="text"
              id="fic_link"
            />
          </div>
          <div class="buttonbut2">
            <button type="button" class="createbutton" v-on:click="SendForm()">Create</button>
            <button type="button" class="cancelbutton" v-on:click="CloseForm()">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { ref } from 'vue'
import { useUserStore } from '../store/user'

// onMounted(() => {
//   getData()
// })

const fandom_name = ref('')
const ship_name = ref('')
const fic_notes = ref('')
const content_text = ref('')
const title_mb = ref('')
const fic_link = ref('')
const isCreating = ref(false)
const info = ref([])

function OpenForm() {
  isCreating.value = true
}
function CloseForm() {
  isCreating.value = false
}

// async function getData() {
//   let { data } = await supabase.from('trial').select('*')
//   info.value = data
//   console.log(data)
// }

// function SendForm() {
//   info.value.push(title_mb.value && fandom_name.value && ship_name.value)
//   console.log(info)
// }

async function SendForm() {
  const store = useUserStore()
  const { error } = await supabase.from('trial').insert([
    {
      fandom_name: fandom_name.value,
      ship_name: ship_name.value,
      fic_notes: fic_notes.value,
      content_text: content_text.value,
      title_mb: title_mb.value,
      fic_link: fic_link.value,
      user_id: store.currentUser.user.id
    }
  ])
  console.log(error)
  if (error != null) {
    this.$router.push('error')
  } else {
    console.log(fandom_name.value)
    info.value.push(fandom_name, ship_name, fic_notes, content_text, title_mb, fic_link)
    console.log(info.value)
    alert('CREATED!!!')
    fandom_name.value = ''
    ship_name.value = ''
    fic_notes.value = ''
    content_text.value = ''
    title_mb.value = ''
    fic_link.value = ''
    // clear inputs
  }
}
// notes show up in testing
</script>

<style>
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
