<template>
  <div class="page-footer t-center w-100">
    <p>©2013-{{ nowYear }} | Pickcle</p>
    <a class="link" href="https://github.com/Pickcle/blog" target="_blank">source code</a>
  </div>
</template>

<script>
  export default {
    computed: {
      nowYear () {
        return (new Date()).getFullYear()
      }
    }
  }
</script>

<style lang="sass" scoped>
  .page-footer
    font-size: 16px
    margin-top: 20px
    height: 100px
    line-height: 30px
    color: #333
    // background-color: #f5f7f9

    .link
      color: #23ade6
</style>
