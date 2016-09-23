import Vue from 'vue'
import App from './App'
import index from './index'
import listJob from './components/listJob'
var VueResource = require('vue-resource')
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()
router.map({
  '/job': {
    component: listJob
  },
  '/': {
    component: App
  },
  '/md': {
    component: App
  },
  '*': {
    component: Error
  }
})
router.start(index, '#app')
