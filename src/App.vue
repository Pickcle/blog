<template>
  <div class="app w-100">
    <img src="./assets/bg.jpg" />
    <div class="left-part f-left p-rel c-default">
      <side-bar />
    </div>
    <div class="right-part f-left p-rel c-default">
      <router-view />
    </div>
    <div class="message-box w-100">
      <message-box />
    </div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import MessageBox from './components/MessageBox.vue'

  export default {
    components: {
      SideBar,
      MessageBox
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

  .message-box
    position: absolute
    top: 50%
</style>
