<template>
  <div class="EditForm">
    <div class="content" v-show="!ShowEditForm">
      <div class="header">
        {{ note.title }}
      </div>
      <div class="Others">
        {{ note.fandom }}
        {{ note.ship }}
        {{ note.major_tag }}
        {{ note.sub_tag }}
        {{ note.description }}
      </div>
      <div class="extra">
        <span class="edit" v-on:click="ShowForm">
          <i class="EditSymb">O</i>
        </span>
        <span class="delete" v-on:click="DeleteNote(note)">
          <i class="DeleteSymb">X</i>
        </span>
      </div>
    </div>
    <div class="content" v-show="ShowEditForm">
      <div class="form">
        <div class="FormField">
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
        <div class="button">
          <button class="CloseForm" v-on:click="HideForm">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteOr',
  components: {},
  props: ['note'],
  data() {
    return {
      ShowEditForm: false
    }
  },
  methods: {
    DeleteNote(note) {
      this.$emit('DeleteNote', note)
    },
    ShowForm() {
      this.ShowEditForm = true
    },
    HideForm() {
      this.ShowEditForm = false
    }
  }
}
</script>

<style scoped></style>
