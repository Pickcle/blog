<template>
  <div class="article">
    <router-link :to="'/blog/' + blog.blogId" class="article-title p-rel" @click.prevent.native="onBlogClick">{{ blog.title }}</router-link>
    <!-- <a class="article-title p-rel" :href="blog.link" @click.prevent="onBlogClick">{{ blog.title }}</a> -->
    <div class="sub-title">
      <span>
        <i class="d-i-block fa fa-calendar-o"></i>
        <span>发表于{{ blog.date }}</span>
      </span>
      <span>
        <span class="divider">|</span>
        <i class="d-i-block fa fa-comment-o"></i>
      </span>
      <span>
        <span class="divider">|</span>
        <i class="d-i-block fa fa-eye"></i>
        <span>阅读次数{{ blog.watchTimes }}</span>
      </span>
    </div>
  </div>
</template>

<script>
  // import { watch } from '../apis'
  import apis from '../apis'

  export default {
    props: {
      blog: {
        blogId: Number,
        date: String,
        title: String,
        watchTimes: Number
      }
    },

    methods: {
      onBlogClick () {
        apis.watch(this.blog.blogId)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .article
    margin-top: 20px
    &:not(:last-child)
      border-bottom: 1px solid #555

    .article-title
      font-size: 26px

      &:after
        content: ""
        position: absolute
        bottom: 0
        left: 0
        background-color: #000
        width: 100%
        height: 2px
        transform: scaleX(0)
        transition: transform 0.2s

      &:hover
        &:after
          transform: scaleX(1)

    .sub-title
      margin: 10px 0 20px
      font-size: 12px
      color: #999

      .divider
        padding: 0 5px

</style>
