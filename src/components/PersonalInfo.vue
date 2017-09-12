<template>
  <div class="personal-info t-center bg-white pad-20">
    <img class="head" src="../images/head.png">
    <p class="name">Pickcle</p>
    <p class="desc">华东师范大学软院毕业，前端码农</p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
  .personal-info
    margin-top: 10px

    .head
      width: 120px
      object-fit: cover

    .name
      padding: 5px
      font-size: 14px

    .desc
      font-size: 12px
      color: #999
      line-height: 24px
</style>
