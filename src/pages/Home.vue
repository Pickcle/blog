<template>
  <div>
    <div class="article-container">
      <article-item
        class="article"
        v-for="(blog, index) in blogs"
        :blog="blog"
        :key="'blog' + index"
      />
    </div>
  </div>
</template>

<script>
  import ArticleItem from 'src/components/ArticleItem.vue'
  import apis from '../apis'
  // import utils from '../utils.js'

  export default {
    data () {
      return {
        blogs: []
      }
    },

    components: {
      ArticleItem
    },

    methods: {
      getBlogInfo () {
        apis.getBlogInfo().then(result => {
          this.blogs = result.result
        })
      }
    },

    mounted () {
      this.getBlogInfo()
    }
  }
</script>

<style lang="sass" scoped>
  .article-container
    width: 100%
    box-sizing: border-box
    padding: 5px 30px 30px 30px
</style>
