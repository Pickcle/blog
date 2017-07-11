<template>
  <div class="side-bar">
    <navigation-panel />
  </div>
</template>

<script>
  import NavigationPanel from './NavigationPanel'

  export default {
    data () {
    },

    components: {
      NavigationPanel
    }
  }
</script>

<style lang="sass" scoped>
  .side-bar
    width: 300px
    background: #fff
</style>
