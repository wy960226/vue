import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login'], resolve)
    }
  ]
})
