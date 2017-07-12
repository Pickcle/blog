<template>
  <div class="register">
    <div>
      <span class="d-i-block m-20">user name:</span>
      <input type="text" v-model="userName" />
    </div>
    <div>
      <span class="d-i-block m-20">enter password:</span>
      <input type="password" v-model="pwd" />
    </div>
    <button @click="onSignupClick">
      Sign up
    </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userName: '',
        pwd: ''
      }
    },

    methods: {
      onSignupClick () {
        console.log(this.userName, this.pwd)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .register
    font-size: 20px

    span
      width: 150px
      margin: 10px 20px

    input
      width: 200px
      height: 25px
      margin: 10px 20px
      border: 1px solid #000

    button
      width: 100px
      height: 40px
      background-color: #fff
      border-radius: 8px
      border: 1px solid #000
      margin: 10px 280px

</style>
