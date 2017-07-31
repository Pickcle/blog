import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'

Vue.use(Router)

const router = new Router()

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  }
]

// uppercase the first letter of a word
// const getComponentName = name => name.replace(/\b\w/g, word => word.toUpperCase()).split('-').join('')
//
// let componentName
//
// navigationConfig.forEach(value => {
//   componentName = getComponentName(value)
//   const route = {
//     path: `/${value}`,
//     component: require(`../pages/${componentName}.vue`)
//   }
//   routes.push(route)
// })
//
router.addRoutes(routes)

export default router
