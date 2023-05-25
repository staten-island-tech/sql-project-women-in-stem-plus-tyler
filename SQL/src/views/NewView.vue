<template>
  <div class="main">
    <h1>Fanfic Notes PP :></h1>
    <div>
      <ListNotes v-bind:notes="notes"></ListNotes>
      <CreateNotes v-on:create-note="createNote"></CreateNotes>
    </div>
  </div>
</template>

<script>
import ListNotes from '../components/ListNotes.vue'
import CreateNotes from '../components/CreateNotes.vue'
import NotesOr from '../components/NotesOr.vue'
export default {
  name: 'app',
  components: {
    ListNotes,
    CreateNotes
  },
  data() {
    return {
      notes: [
        {
          title: 'PP Fic Rec',
          fandom: 'Peppa Pig',
          ship: 'Daddy Pig/Mr.Wolf',
          major_tag: 'revenge',
          sub_tag: 'time travel',
          description:
            "im just messing around w this don't mind https://archiveofourown.org/works/23778148 Daddy pig finally get's his revenge after years of fat shaming."
        }
      ]
    }
  },
  methods: {
    createNote(note) {
      this.notes.push(note)
      alert('eurgh')
    }
  }
}
</script>

<style scoped></style>
