<template>
  <div class="navigation-item t-center w-100" @click="navigate">
    {{ name }}
  </div>
</template>

<script>
  // import axios from 'axios'

  export default {
    props: {
      name: String
    },

    methods: {
      navigate () {
        this.$router.push(this.name)
        // axios.get('http://localhost:9091/').then(result => {
        //   console.log('axios:', result)
        // })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .navigation-item
    height: 40px
    line-height: 40px

    &:not(:last-child)
      border-bottom: 1px solid #000
</style>
