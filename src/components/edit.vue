<template lang="html">
  <div id="editor">
    <textarea v-model="markDownContent" debounce="10"></textarea>
    <show-markdown :mark-down-content="markDownContent"></show-markdown>
    <button @click="addFile(markDownContent)"> @Save</button>
  </div>
</template>

<script>
import showMarkdown from './showMarkdown'
export default {
  data () {
    return {}
  },
  props: ['markDownContent', 'addFile'],
  components: {
    showMarkdown: showMarkdown
  }
}
</script>

<style lang="css">

html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  /*height: 100%;*/
  height: 600px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
