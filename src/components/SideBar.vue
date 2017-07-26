<template>
  <div class="w-100">
    <top-title />
    <navigation />
    <personal-info />
    <more-link />
  </div>
</template>

<script>
  import TopTitle from './TopTitle.vue'
  import MoreLink from './MoreLink.vue'
  import PersonalInfo from './PersonalInfo.vue'
  import Navigation from './Navigation'

  export default {
    components: {
      TopTitle,
      MoreLink,
      Navigation,
      PersonalInfo
    }
  }
</script>

<style lang="sass" scoped>

</style>
