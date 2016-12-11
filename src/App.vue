<template>
  <div id="app">
    <menu-search></menu-search>
    <markdown2side :add-file="addFile" :mark-down-content="markDownContent"></markdown2side>
    <input type="text" v-model="filename">

    <hr> <br> <h1>Search </h1> <input type="search" v-model="text">
    <div v-for="show in list | filterBy text">
      {{ show.filename }}  <button @click="addlist(show.id)">@edit</button>
      <button @click="remove(show.id)">@remove</button>
      <hr> <br>
    </div>
</div>
</template>

<script>
import MenuSearch from './components/MenuSearch'
import markdown2side from './components/markdown2side'
var firebase = require('firebase')
var config = {
  apiKey: 'AIzaSyBUNZ9z0AF3_6NvJAjmWeaAu1L_WlQjuA0',
  authDomain: 'vue1234-f8cf6.firebaseapp.com',
  databaseURL: 'https://vue1234-f8cf6.firebaseio.com',
  storageBucket: 'vue1234-f8cf6.appspot.com',
  messagingSenderId: '415861277156'
}
firebase.initializeApp(config)
var Users = firebase.database().ref('users')
export default {
  components: {
    MenuSearch: MenuSearch,
    markdown2side: markdown2side
  },
  data () {
    return {
      markDownContent: '',
      file: {
        filename: '',
        data: ''
      },
      filename: '',
      list: []
    }
  },
  methods: {
    addFile (markDownContent) {
      this.file.filename = this.filename
      this.file.data = markDownContent
      // this.list.push(this.file)
      Users.push(this.file)
      // console.log(this.list)
      this.file.filename = ''
      this.file.data = ''
    },
    addlist (id) {
      console.log(id)
      let index = this.list.findIndex(item => item.id === id)
      console.log(index)
      this.markDownContent = this.list[index].data
      this.filename = this.list[index].filename
    },
    remove (id) {
      let index = this.list.findIndex(item => item.id === id)
      let user = this.list[index]
      firebase.database().ref('users/' + user.id).remove()
      this.list.splice(index, 1)
      this.file.filename = ''
      this.file.data = ''
    }
  },
  ready () {
    let vm = this
    Users.on('child_added', function (snapshot) {
      var item = snapshot.val()
      item.id = snapshot.key
      vm.list.push(item)
      console.log('show is ', vm.list)
    })
    Users.on('child_removed', function (snapshot) {
      var id = snapshot.key
      vm.file.$remove(vm.file.find(user => user.id === id))
    })
    Users.on('child_changed', function (snapshot) {
      var id = snapshot.key
      console.log('การเปลี่ยนเเปลง' + id)
    })
  }
}
</script>

<style>

</style>
