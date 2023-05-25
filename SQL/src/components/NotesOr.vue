<template>
  <div class="EditForm">
    <div class="content" v-show="!ShowEditForm">
      <div class="Header">
        {{ note.title }}
      </div>
      <div class="Others">
        {{ note.fandom }}
        {{ note.ship }}
        {{ note.major_tag }}
        {{ note.sub_tag }}
        {{ note.description }}
      </div>
      <div class="Extra">
        <span class="Edit" v-on:click="ShowForm">
          <i class="edit_icon">O</i>
        </span>
        <span class="Delete" v-on:click="deleteNote(note)">
          <i class="delete_icon">X</i>
        </span>
      </div>
    </div>
    <div class="content" v-show="showEditForm">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="note.title" />
        </div>
        <div class="field">
          <label>Fandom</label>
          <input type="text" v-model="note.fandom" />
          <label>Ship</label>
          <input type="text" v-model="note.ship" />
          <label>Major Tag</label>
          <input type="text" v-model="note.major_tag" />
          <label>Minor Tag</label>
          <input type="text" v-model="note.minor_tag" />
          <label>Description</label>
          <input type="text" v-model="note.description" />
        </div>
        <div class="Button">
          <button class="Close" v-on:click="hideForm">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  components: {},
  props: ['note'],
  data() {
    return {
      showEditForm: false
    }
  },
  methods: {
    deleteNote(note) {
      this.$emit('delete_note', note)
    },
    showForm() {
      this.showEditForm = true
    },
    hideForm() {
      this.showEditForm = false
    }
  }
}
</script>

<style scoped></style>
