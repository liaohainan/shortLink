import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home.vue'
import Redirect from '@/view/Redirect.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:link',
      name: 'Redirect',
      component: Redirect
    }
  ]
})
