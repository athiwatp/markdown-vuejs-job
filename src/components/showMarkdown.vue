<template lang="html">
  <div v-html="markDownContent | marked"></div>
</template>

<script>
var marked = require('marked')
export default {
  data () {
    return {
    }
  },
  filters: {
    marked: marked
  },
  props: ['markDownContent']
}
</script>

<style lang="css">
</style>
