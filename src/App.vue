<template>
  <div class="w-100 clear">
    <img class="bg" src="./images/bg.jpg" />
    <div class="left-part f-left p-rel c-default">
      <side-bar />
    </div>
    <div class="right-part f-left p-rel c-default">
      <router-view />
    </div>
    <page-footer class="p-rel" />
    <div class="message-box w-100">
      <message-box />
    </div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import MessageBox from './components/MessageBox.vue'
  import PageFooter from './components/PageFooter.vue'

  export default {
    components: {
      SideBar,
      MessageBox,
      PageFooter
    }
  }
</script>

<style lang="sass" scoped>
  .bg
    position: fixed
    top: 0
    left: 0
    height: 100%
    width: 100%
    object-fit: cover

  .left-part
    left: 15%
    width: 20%

  .right-part
    left: 15%
    width: 50%
    margin: 0 20px

  .message-box
    position: absolute
    top: 50%
</style>
