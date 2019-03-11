import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './views/LoginPage'
import ExampleContent from './views/ExampleContent'
import IntlStructure from '@/layout/IntlStructure'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intl-structure',
      component: IntlStructure,
      children: [
        {
          path: 'main',
          name: 'main-section',
          component: ExampleContent
        }
      ]
    },
    {
      path: '/login',
      exact: true,
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
