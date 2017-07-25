<template>
  <div class="navigation">
    <navigation-item
      v-for="(itemData, index) in navList"
      :config="itemData.config"
      :is-selected="itemData.isSelected"
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
        navList: []
      }
    },

    components: {
      NavigationItem
    },

    created () {
      NavList.forEach((value, index) => {
        this.navList[index] = {
          config: value,
          isSelected: false
        }
      })
    },

    mounted () {
      window.app.$on('navigate', (e) => {
        const route = e.route
        this.navList.forEach(itemData => {
          itemData.isSelected = itemData.config.route === route
        })
        this.$forceUpdate()
      })
    }
  }
</script>

<style lang="sass" scoped>
  .navigation
    padding: 15px
</style>
