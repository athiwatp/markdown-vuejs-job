<template>
  <div id="app">
    <menu-search></menu-search>
    <markdown2side :mark-down-content="markDownContent"></markdown2side>
</div>
</template>

<script>
import MenuSearch from './components/MenuSearch'
import markdown2side from './components/markdown2side'

export default {
  components: {
    MenuSearch: MenuSearch,
    markdown2side: markdown2side
  },
  data () {
    return {
      markDownContent: ''
    }
  }
}
</script>

<style>

</style>
