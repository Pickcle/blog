<template>
  <div>
    <i class="fa fa-lg"/>
    {{ config.name }}
  </div>
</template>

<script>
  export default {
    props: {
      config: Object,
      isSelected: Boolean
    }
  }
</script>

<style lang="sass" scoped>
</style>
