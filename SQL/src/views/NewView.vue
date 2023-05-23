<template>
  <div class="main">
    <h1>Fanfic Notes PP :></h1>
    <div>
      <list-notes v-bind:notes="notes"></list-notes>
      <create-note v-on:create-note="createNote"></create-note>
    </div>
  </div>
</template>

<script>
import ListNotes from './components/ListNotes'
import CreateNote from './components/CreateNotes'
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
          tags: ['revenge', 'time travel'],
          description:
            "im just messing around w this don't mind https://archiveofourown.org/works/23778148 Daddy pig finally get's his revenge after years of fat shaming."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
