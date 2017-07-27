<template>
  <div class="navigation-item" :class="{ 'color-blue': isSelected }" @click="navigate">
    <i :class="computedClass" />
    {{ config.name }}
  </div>
</template>

<script>
  import EventBus from 'src/bus.js'

  export default {
    props: {
      isSelected: Boolean,
      config: {
        name: String,
        route: String,
        icon: String
      }
    },

    computed: {
      computedClass () {
        return 'fa fa-fw fa-' + this.config.icon
      }
    },

    methods: {
      navigate () {
        EventBus.$emit('navigate', this.config.route)
        this.$router.push(this.config.route)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .navigation-item
    font-size: 13px
    color: #555
    line-height: 2
</style>
