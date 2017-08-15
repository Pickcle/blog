<template>
  <div class="router-view-blog">
    <h3 id="2017-05-28">2017-05-28</h3>
<p><strong>Vue warn: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.</strong></p>
<p><strong>解决方案：</strong></p>
<ul>
<li>node_modules中vue的package.json中可以看到，真正导出的是main指向的vue.runtime.common.js，所以如果直接import vue from &#39;vue&#39;的话，引用的是vue.runtime.common.js，而vue其实是rumtime+compile两部分组成的，所以我们需要在webpack中设置个vue的别名，alias中添加一行&#39;vue&#39;: &#39;vue/dist/vue.js&#39;，然后项目中正常使用就可以了</li>
</ul>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
