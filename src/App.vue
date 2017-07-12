<template>
  <div class="app">
    <img src="./assets/bg.jpg" />
    <div class="left-part f-left p-rel c-default">
      <side-bar />
    </div>
    <div class="right-part f-left p-rel c-default">
      <router-view />
    </div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'

  export default {
    components: {
      SideBar
    },

    mounted () {
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

  .left-part
    width: 20%

  .right-part
    width: 80%
</style>
