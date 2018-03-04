import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Vokedex from '../views/Vokedex'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/vokedex',
      component: Vokedex
    }
  ]
})
