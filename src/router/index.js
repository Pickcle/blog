import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import BlogTemplate from '../pages/BlogTemplate.vue'
import blogConfig from '../../dist/blogConfig.js'

Vue.use(Router)

const router = new Router()

const routes = [
  {
    path: '/',
    component: BlogTemplate
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

// 将src/pages/blogs下自动生成的博客作为路由
let route
blogConfig && blogConfig.forEach(blogName => {
  const blogId = blogName.slice(5, -4)
  console.log(blogId)
  route = {
    path: `/blog/${blogId}`,
    component: require(`../pages/blogs/${blogName}`)
  }
  routes.push(route)
})

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
