<template>
  <div>
    <navigation-item
      v-for="(config, index) in navList"
      :config="config"
      :is-selected="false"
      :key="index"
    />
  </div>
</template>

<script>
  import NavList from './config.js'
  import NavigationItem from './NavigationItem.vue'

  export default {
    data () {
      return {
        navList: NavList
      }
    },

    components: {
      NavigationItem
    }
  }
</script>

<style lang="sass" scoped>
</style>
