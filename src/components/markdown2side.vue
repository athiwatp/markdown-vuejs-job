<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <edit :mark-down-content="markDownContent" :add-file="addFile"></edit>
      </div>
    </div>
  </div>
</template>

<script>
import edit from './edit'
export default {
  data () {
    return {
    }
  },
  components: {
    edit: edit
  },
  props: ['markDownContent', 'addFile']
}
</script>

<style lang="css">
</style>
