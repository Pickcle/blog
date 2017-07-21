<template>
  <div class="w-100 bg-white">
    <top-title>
    </top-title>
    <navigation>
    </navigation>
    <personal-info>
    </personal-info>
    <more-link>
    </more-link>
  </div>
</template>

<script>
  import TopTitle from './TopTitle.vue'
  import MoreLink from './MoreLink.vue'
  import Navigation from './Navigation.vue'
  import PersonalInfo from './PersonalInfo.vue'

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
