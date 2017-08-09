<template>
  <div class="page-footer t-center w-100">
    ©2013-{{ nowYear }} | Pickcle
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
    height: 50px
    line-height: 50px
    color: #333
    background-color: #f5f7f9
</style>
