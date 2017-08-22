<template>
  <div>
    <div class="input-bar-container">
      <div class="input-bar">
        <i class="fa fa-search icon" />
        <input class="search-input" v-model="searchText" placeholder="search" maxlength="10" @keyup.enter="onEnter"/>
      </div>
    </div>
    <div class="article-container">
      <article-item
        v-for="(blog, index) in searchList"
        :blog="blog"
        :key="'blog' + index"
      />
    </div>
  </div>
</template>

<script>
  import apis from '../apis'
  import ArticleItem from '../components/ArticleItem.vue'

  export default {
    data () {
      return {
        searchText: '',
        searchList: []
      }
    },

    components: {
      ArticleItem
    },

    methods: {
      onEnter () {
        apis.search(this.searchText).then(result => {
          this.searchList = result.list
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .input-bar-container
    padding: 30px
    background-color: #fff

    .input-bar
      width: 400px
      height: 30px
      border: 1px solid #999
      // color: #999

      .icon
        position: relative
        top: 3px
        padding-left: 8px
        color: #999

      .search-input
        position: relative
        top: 3px
        outline: none
        border: none
        width: 350px
        font-size: 16px
        // color: #999

  .article-container
    width: 100%
    box-sizing: border-box
    padding: 5px 30px 30px 30px

</style>
