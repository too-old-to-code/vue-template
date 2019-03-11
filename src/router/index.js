import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import LoginPage from '@/views/LoginPage'
import ExampleContent from '@/views/ExampleContent'
import IntlStructure from '@/layout/IntlStructure'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intl-structure',
      component: IntlStructure,
      meta: {
        requiresAuth: true
      },
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
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})

const userSessionActive = () => store.state.isLoggedIn

router.beforeResolve(async (to, from, next) => {
  // if there can be a problem if the user leaves a page, for example losing data in an unfinished
  // form, we will show a modal so the user can confirm their intention to leave the page.
  // if (store.state.navConfirmation) {
  //   router.app.$root.$emit('bv::show::modal', 'modal')
  //   return next(false)
  // }

  const routeIsPrivate = to.matched.some(record => record.meta.requiresAuth)

  // If there is no user session in the store, check the localstorage
  // !userSessionActive() && await store.dispatch('handleSession')
  //

  if (routeIsPrivate && !userSessionActive()) {
    next('/login')
  } else if (!routeIsPrivate && userSessionActive()) {
    next('/main')
  } else {
    next()
  }
})

export default router
