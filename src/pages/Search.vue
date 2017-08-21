<template>
  <div>
    <div class="input-bar-container">
      <div class="input-bar">
        <i class="fa fa-search icon" />
        <input class="search-input" v-model="searchText" placeholder="search" maxlength="10" @keyup.enter="onEnter"/>
      </div>
    </div>
  </div>
</template>

<script>
  import apis from '../apis'

  export default {
    data () {
      return {
        searchText: ''
      }
    },
    methods: {
      onEnter () {
        apis.search(this.searchText)
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
</style>
