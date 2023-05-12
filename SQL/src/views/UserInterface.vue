<!-- user interface -->

<template>
  <div class="main">
    <h1>Create Post</h1>
    <form id="form">
      <div class="inputs">
        <p class="text"><label for="content_type">Content Type</label></p>
        <input type="text" id="type" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="fandom_name">Fandom</label></p>
        <input type="text" id="message" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="major_tag">Tag 1</label></p>
        <input type="text" id="message" class="textbox" />
      </div>
      <div class="inputs">
        <p class="text"><label for="sub_tag">Tag 2</label></p>
        <input type="text" id="message" class="textbox" />
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

<script setup></script>

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
