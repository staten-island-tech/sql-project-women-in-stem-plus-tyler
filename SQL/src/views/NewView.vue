<template>
  <div class="main">
    <h1>Fanfic Notes PP :></h1>
    <div class="form">
      <!-- <ListNotes v-bind:notes="notes"></ListNotes> -->
      <CreateNotes />
    </div>
    <br />
    <div class="cards">
      <ReuseCards />
    </div>
  </div>
</template>

<script>
import CreateNotes from '../components/CreateNotes.vue'
import ReuseCards from '../components/ReuseCards.vue'
// import ListNotes from '../components/ListNotes.vue'
export default {
  name: 'app',
  components: {
    CreateNotes,
    ReuseCards
    // ListNotes
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
        },
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
  }
}
</script>

<style scoped></style>
