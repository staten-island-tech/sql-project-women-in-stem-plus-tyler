<template>
  <div class="EditForm">
    <div class="content" v-show="!showEditForm">
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
        <span class="theShow" v-on:click="showForm">
          <i class="edit icon"></i>
        </span>
        <span class="right floated trash icon" v-on:click="deleteNote(note)">
          <i class="trash icon"></i>
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
          <label>Description</label>
          <input type="text" v-model="note.description" />
        </div>
        <div class="ui two buttons">
          <button class="ui basic button" v-on:click="hideForm">Close X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
