<template>
  <div>
    <div class="input-bar">
      <i class="fa fa-search icon" />
      <input class="search-input" v-model="searchText" placeholder="enter" maxlength="10" @keyup.enter="onEnter"/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchText: ''
      }
    },
    methods: {
      onEnter () {
        console.log(this.searchText)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .input-bar
    width: 400px
    height: 30px
    margin: 30px
    background-color: #fff
    border: 1px solid #999
    color: #999

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
      color: #999
</style>
