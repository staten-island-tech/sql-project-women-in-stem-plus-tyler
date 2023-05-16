<!-- user interface -->

<template>
  <div class="main">
    <h1>Create Post</h1>
    <form id="form" v-on:submit="form" ref="inputField">
      <div class="inputs">
        <p class="text"><label for="content_type">Content Type</label></p>
        <input type="uhh" placeholder="type..." />
      </div>
      <div class="inputs">
        <p class="text"><label for="fandom_name">Fandom</label></p>
        <input v-model="fandom" placeholder="type..." />
      </div>
      <div class="inputs">
        <p class="text"><label for="major_tag">Tag 1</label></p>
        <input v-model="mTag" placeholder="type..." />
      </div>
      <div class="inputs">
        <p class="text"><label for="sub_tag">Tag 2</label></p>
        <input v-model="sTag" placeholder="type..." />
      </div>
      <div class="inputs">
        <p class="text"><label for="content_text">Message</label></p>
        <input v-model="text" placeholder="type..." />
      </div>
      <button @click="showMe">Create</button>
      <br />
    </form>
    <p>{{ help }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  data() {
    return {
      help: ''
    }
  },
  methods: {
    showMe() {
      const message = this.$refs.inputField.value
      this.help = `${message}`
    },
    //create post//
    create() {},
    //clear inputs//
    clear() {},
    //remove post//
    remove() {},
    form(e) {
      e.preventDefault()
      this.create()
    }
  }
}
</script>

<style scoped>
.main {
  background-color: lightblue;
}
.cards {
  height: 20vw;
  width: 18vw;
  background-color: purple;
}
</style>
