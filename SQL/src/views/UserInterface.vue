<!-- user interface -->

<template>
  <div class="main">
    <h1>Create Post</h1>
    <form id="form" v-on:submit="form">
      <div class="inputs">
        <p class="text"><label for="content_type">Content Type</label></p>
        <input type="text" id="content" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="fandom_name">Fandom</label></p>
        <input type="text" id="f_name" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="major_tag">Tag 1</label></p>
        <input type="text" id="tag_one" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="sub_tag">Tag 2</label></p>
        <input type="text" id="tag_two" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="content_text">Message</label></p>
        <input type="text" id="message" class="textbox" />
      </div>
      <div class="thisButton">
        <input type="submit" value="Enter" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    //create post//
    create() {
      let post = {}
      post.content = document.getElementById('content')
      post.f_name = document.getElementById('f_name')
      post.tag_one = document.getElementById('tag_one')
      post.tag_two = document.getElementById('tag_two')
      post.message = document.getElementById('message')
      document.querySelector('.btn').insertAdjacentHTML(
        `afterend`,
        `<div class="post">
      <h2>${post.content}</h2>
      <h3>${post.f_name}</h3>
      <h4>Major Tag: ${post.tag_one}</h4>
      <h4>Sub Tag: ${post.tag_two}</h4>
      <h5>${post.message}</h5>
  </div>`
      )
    },
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
