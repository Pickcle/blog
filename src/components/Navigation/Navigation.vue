<template>
  <div class="bg-white pad-20">
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
  import EventBus from 'src/bus.js'

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
      EventBus.$on('navigate', (routeName) => {
        this.navList.forEach(itemData => {
          itemData.isSelected = itemData.config.route === routeName
        })
        this.$forceUpdate()
      })

      if (this.$route.path !== '/') {
        EventBus.$emit('navigate', this.$route.path.slice(1))
      }

      console.log('xhjLog: router', this.$route.path)
    }
  }
</script>

<style lang="sass" scoped>
</style>
