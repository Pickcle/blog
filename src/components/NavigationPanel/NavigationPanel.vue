<template>
  <div class="navigation-panel">
    <navigation-item v-for="(item, idx) in config" :name="item" :key="idx" />
  </div>
</template>

<script>
  import navigationConfig from 'src/config/navigation.config.js'

  import NavigationItem from './NavigationItem.vue'

  export default {
    data () {
      return {
        config: navigationConfig
      }
    },

    components: {
      NavigationItem
    }
  }
</script>

<style lang="sass" scoped>
  .navigation-panel

</style>
