import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'

import navigationConfig from 'src/config/navigation.config.js'

Vue.use(Router)

const router = new Router()

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: Home
  }
]

// uppercase the first letter of a word
const getComponentName = name => name.replace(/\b\w/g, word => word.toUpperCase()).split('-').join('')

let componentName

navigationConfig.forEach(value => {
  componentName = getComponentName(value)
  const route = {
    path: `/${value}`,
    component: require(`../pages/${componentName}.vue`)
  }
  routes.push(route)
})

router.addRoutes(routes)

export default router