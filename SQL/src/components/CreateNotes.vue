<template>
  <div class="create">
    <button class="OpenForm" v-on:click="OpenForm" v-show="!isCreating">WEEWOW</button>
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
export default {
  name: 'CreateNote',
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
    OpenForm() {
      this.isCreating = true
    },
    CloseForm() {
      this.isCreating = false
    },
    SendForm() {
      if (this.title.length > 0 && this.description.length > 0) {
        const title = this.title
        const description = this.description
        const fandom = this.fandom
        const ship = this.ship
        const major_tag = this.major_tag
        const minor_tag = this.minor_tag
        this.$emit('CreateNote', {
          title,
          description,
          fandom,
          ship,
          major_tag,
          minor_tag
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
