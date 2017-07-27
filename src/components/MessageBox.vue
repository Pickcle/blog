<template>
  <div class="main p-rel f-left animation" :class="{ 'fade-in': isShow, 'fade-out': !isShow }">
    <div class="text p-rel f-right c-default">
      {{ message }}
    </div>
  </div>
</template>

<script>
  import EventBus from 'src/bus.js'

  const DURATION = 2
  let timer = null

  export default {
    data () {
      return {
        message: 'Message',
        isShow: false
      }
    },

    mounted () {
      EventBus.$on('showMsg', (msg) => {
        this.message = msg
        if (this.isShow) {
          clearTimeout(timer)
        }
        this.isShow = true
        timer = setTimeout(() => {
          this.isShow = false
        }, DURATION * 1000)
      })
    }
  }
</script>

<style lang="sass" scoped>
  .main
    left: 50%
    opacity: 0

    .text
      right: 50%
      height: 30px
      margin-top: -15px
      line-height: 30px
      border: 1px solid #000
      border-radius: 8px
      background: #fff
      padding: 5px 20px

  .animation
    transition: opacity 0.5s

  .fade-in
    opacity: 1

  .fade-out
    opacity: 0
</style>
