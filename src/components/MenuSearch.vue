<template>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="menu">
        <a v-link="{ path: '/md' }" >Md > </a>
        <a v-link="{ path: '/job' }" >Job > </a>
        <a v-link="{ path: '/done' }" >Done </a>
        <input type="text" placeholder="Search"class="input-class">
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>


<style scoped>
@import 'https://fonts.googleapis.com/css?family=Roboto+Condensed';

.menu {
    border-bottom: 1px solid;
}

.input-class {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  -ms-grid-row-align: baseline;
  align-items: baseline;
  text-transform: uppercase;
  height: 1.875rem;
  min-height: 30PX;
  border: none;
  outline: none !important;
  text-align: center;
  height: 100%;
  /*width: 92%;*/
  width: 85%;
  align-items: baseline;
}

</style>
