<template>
  <div class="theone">
    <form @submit.prevent="addNote" class="form">
      <input type="text" class="formfield" placeholder="title" v-model="note.title" />
      <textarea class="formfield" placeholder="fandom" v-model="note.fandom"></textarea>
      <textarea class="formfield" placeholder="ship" v-model="note.ship"></textarea>
      <textarea class="formfield" placeholder="major_tag" v-model="note.major_tag"></textarea>
      <textarea class="formfield" placeholder="minor_tag" v-model="note.minor_tag"></textarea>
      <textarea class="formfield" placeholder="description" v-model="note.description"></textarea>
      <div class="butto">
        <button type="submit" class="submit">Add Note</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useNoteStore } from '../stores/notes'
const store = useNoteStore()
const note = reactive({
  title: '',
  fandom: '',
  ship: '',
  major_tag: '',
  minor_tag: '',
  description: ''
})
const addNote = function () {
  if (
    note.title &&
    note.fandom &&
    note.ship &&
    note.major_tag &&
    note.minor_tag &&
    note.description
  ) {
    const newNote = {
      ...note,
      id: Date.now(),
      time: new Date()
    }

    store.addNote(newNote)
    note.title = ''
    note.fandom = ''
    note.ship = ''
    note.major_tag = ''
    note.minor_tag = ''
    note.description = ''
  } else {
    alert('Please fill in all fields')
  }
}
</script>

<style scoped></style>
