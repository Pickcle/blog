<template>
  <div class="navigation-item" :class="{ 'color-blue': isSelected }" @click="navigate">
    <i :class="computedClass" />
    {{ config.name }}
  </div>
</template>

<script>
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
        window.app.$emit('navigate', this.config.route)
        this.$router.push(this.config.route)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .navigation-item
    margin: 10px 0
</style>
