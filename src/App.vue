<template>
  <menu-search></menu-search>
  <container2side :mark-down-content="markDownContent"></container2side>
</template>

<script>
import MenuSearch from './components/MenuSearch'
import container2side from './components/container2side'

export default {
  components: {
    MenuSearch: MenuSearch,
    container2side: container2side
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
