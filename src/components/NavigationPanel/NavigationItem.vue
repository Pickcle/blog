<template>
  <div class="navigation-item w-100">
    {{ name }}
  </div>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>

<style lang="sass" scoped>
  .navigation-item
    height: 40px
    line-height: 40px
    padding: 10px
</style>
