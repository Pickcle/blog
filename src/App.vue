<template>
  <div class="w-100">
    <img class="bg" src="./images/bg.jpg" />
    <main class="main clear">
      <div class="left-part f-left p-rel c-default">
        <side-bar />
      </div>
      <div class="right-part f-left p-rel c-default">
        <router-view class="bg-white router-view" :style="computedHeight"/>
      </div>
    </main>
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
    },

    computed: {
      computedHeight () {
        return 'min-height: ' + window.innerHeight + 'px'
      }
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

  .main
    position: relative
    border-top: 3px solid #000

  .left-part
    left: 15%
    width: 15%

  .right-part
    left: 15%
    width: 55%
    margin: 0 20px
    
  .message-box
    position: absolute
    top: 50%
</style>
