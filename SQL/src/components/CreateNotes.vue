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
            <input class="formfield" placeholder="ship" v-model="ship" type="text" />
            <label>Major Tag</label>
            <input class="formfield" placeholder="major_tag" v-model="major_tag" type="text" />
            <label>Minor Tag</label>
            <input class="formfield" placeholder="minor_tag" v-model="sub_tag" type="text" />
            <label>Description</label>
            <textarea
              class="formfield"
              placeholder="description"
              v-model="content_type"
              type="text"
            ></textarea>
          </div>
          <div class="buttonbut2">
            <button class="Create" v-on:click="SendForm()">Create</button>
            <button class="Cancel" v-on:click="CloseForm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js'
export default {
  name: 'CreateNote',
  components: {},
  data() {
    return {
      fandom_name: '',
      ship_name: '',
      major_tag: '',
      sub_tag: '',
      content_text: '',
      title_mb: '',
      isCreating: false
    }
  },
  methods: {
    OpenForm() {
      this.isCreating = true
    },
    CloseForm() {
      this.isCreating = false
    },
    async SendForm() {
      try {
        const { error } = await supabase.from('trial').insert([
          {
            fandom_name: this.fandom_name.value,
            ship_name: this.ship_name.value,
            major_tag: this.major_tag.value,
            sub_tag: this.sub_tag.value,
            content_text: this.content_text.value,
            title_mb: this.title_mb.value
          }
        ])
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped></style>
