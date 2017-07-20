<template>
  <div class="side-bar w-100">
    <navigation-panel />
  </div>
</template>

<script>
  import NavigationPanel from './NavigationPanel'

  export default {
    data () {
      return {}
    },

    components: {
      NavigationPanel
    }
  }
</script>

<style lang="sass" scoped>
  .side-bar
    background: #fff
</style>
