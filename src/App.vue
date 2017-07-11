<template>
  <div>
    <img src="./assets/bg.jpg" />
    <side-bar class="f-left p-rel c-default" />
    <router-view class="f-left p-rel c-default" />
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
  img
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    object-fit: cover
</style>
