<!-- user interface -->

<template>
  <!-- <div class="main">
    <h1>Create Post</h1>
    <form id="form" v-on:submit="form">
      <div class="inputs">
        <p class="text"><label for="content_type">Content Type</label></p>
        <input type="uhh" placeholder="type..." ref="inputField" />
      </div>
      <div class="inputs">
        <p class="text"><label for="fandom_name">Fandom</label></p>
        <input v-model="fandom" placeholder="type..." ref="inputField" />
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
  </div> -->
  <div class="main">
    <h1>Create Post</h1>
    <form @submit.prevent="createPost">
      <input v-model="newPost" />
      <button>Create</button>
    </form>
    <div class="posts">
      <div class="cards" v-for="post in posts" :key="post.id">
        {{ post.text }}
        <button @click="addFave()">☆</button>
        <button @click="removePost(post)">X</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let id = '0'
const newPost = ref('')
let posts = ref([
  {
    id: id++,
    text: 'Sample Post'
  }
])
function createPost() {
  posts.value.push({ id: id++, text: newPost.value })
  newPost.value = ''
}
function removePost(post) {
  posts.value = posts.value.filter((p) => p !== post)
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
