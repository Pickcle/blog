<template>
  <div>
    <div class="article-container bg-white">
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
  import utils from '../utils.js'

  export default {
    data () {
      return {
        blogs: utils.getBlogsInfo()
      }
    },

    components: {
      ArticleItem
    }
  }
</script>

<style lang="sass" scoped>
  .article-container
    width: 100%
    padding: 5px 30px 30px 30px
</style>
