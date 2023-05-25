<template>
  <div class="create">
    <button class="openForm" v-on:click="openForm" v-show="!isCreating">WEEWOW</button>
    <div class="card" v-show="isCreating">
      <div class="content">
        <div class="form">
          <div class="field">
            <label>Title</label>
            <input v-model="title" type="text" />
          </div>
          <div class="field">
            <label>Fandom</label>
            <input v-model="fandom" type="text" />
            <label>Ship</label>
            <input v-model="ship" type="text" />
            <label>Major Tag</label>
            <input v-model="major_tag" type="text" />
            <label>Minor Tag</label>
            <input v-model="minor_tag" type="text" />
            <label>Description</label>
            <input v-model="description" type="text" />
          </div>
          <div class="button">
            <button class="Create" v-on:click="sendForm()">Create</button>
            <button class="Cancel" v-on:click="closeForm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateNotes',
  components: {},
  data() {
    return {
      title: '',
      fandom: '',
      ship: '',
      major_tag: '',
      minor_tag: '',
      description: '',
      isCreating: false
    }
  },
  methods: {
    openForm() {
      this.isCreating = true
    },
    closeForm() {
      this.isCreating = false
    },
    sendForm() {
      if (this.title.length > 0 && this.description.length > 0) {
        const title = this.title
        const description = this.description
        this.$emit('create_note', {
          title,
          description
        })
        this.title = ''
        this.fandom = ''
        this.ship = ''
        this.major_tag = ''
        this.minor_tag = ''
        this.description = ''
        this.isCreating = false
      }
    }
  }
}
</script>

<style scoped></style>
