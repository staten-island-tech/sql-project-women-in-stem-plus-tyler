<template>
  <div class="main">
    <h1>Fanfic Notes PP :></h1>
    <div>
      <list_notes v-bind:notes="notes"></list_notes>
      <create_note v-on:create-note="createNote"></create_note>
    </div>
  </div>
</template>

<script>
import ListNotes from '../components/ListNotes.vue'
import CreateNote from '../components/CreateNotes.vue'
export default {
  name: 'app',
  components: {
    ListNotes,
    CreateNote
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
