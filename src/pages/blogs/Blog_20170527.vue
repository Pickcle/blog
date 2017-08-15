<template>
  <div class="router-view-blog">
    <h3 id="2017-05-27">2017-05-27</h3>
<p><strong>webpack打包时报错TypeError: $export is not a function</strong></p>
<p><strong>解决方案：</strong></p>
<ul>
<li>webpack.config.js中,loaders中的babel-loader需要加一行exclude: /node_modules/</li>
</ul>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
