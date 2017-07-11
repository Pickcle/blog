<template>
  <div>
    <side-bar class="f-left" />
    <router-view class="f-left" />
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'

  export default {
    components: {
      SideBar
    }
  }
</script>

<style lang="sass" scoped>
</style>
