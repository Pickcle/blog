<template>
  <div class="register">
    <div>
      <span class="d-i-block m-20">user name:</span>
      <input type="text" v-model="user_name" />
    </div>
    <div>
      <span class="d-i-block m-20">enter password:</span>
      <input type="password" v-model="password" />
    </div>
    <button @click="onSignupClick">
      Sign up
    </button>
  </div>
</template>

<script>
  import apis from 'src/apis'

  export default {
    data () {
      return {
        user_name: '',
        password: ''
      }
    },

    methods: {
      onSignupClick () {
        if (!this.user_name || !this.password) {
          window.p('用户名或密码不能为空')
          return
        }
        apis.signup(this.user_name, this.password).then(result => {
          if (result.result === 0) {
            window.p('注册失败')
          } else if (result.result === 1) {
            window.p('重复注册')
          } else if (result.result === 2) {
            window.p('注册成功')
          }
        }, error => {
          window.p('注册失败：' + error)
        })
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
