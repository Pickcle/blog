<template>
  <div class="router-view-blog">
    <h3 id="2017-08-23">2017-08-23</h3>
<p><strong>方案步骤</strong></p>
<ul>
<li>安装相关依赖库：  </li>
<li>babel-plugin-syntax-flow</li>
<li>babel-plugin-transform-class-properties</li>
<li>babel-plugin-transform-flow-strip-types</li>
<li>eslint</li>
<li>babel-eslint</li>
<li>eslint-plugin-html</li>
<li>eslint-plugin-flowtype-errors</li>
<li>eslint-plugin-vue</li>
<li>eslint-config-vue</li>
<li>flow-bin</li>
<li>修改.babelrc<pre><code>{
  ...
  &quot;plugins&quot;: [
    &quot;babel-plugin-transform-class-properties&quot;,
    &quot;babel-plugin-syntax-flow&quot;,
    &quot;babel-plugin-transform-flow-strip-types&quot;
  ]
}
</code></pre></li>
<li><p>修改.eslintrc</p>
<pre><code>{
  &quot;parser&quot;: &quot;babel-eslint&quot;,

  &quot;plugins&quot;: [
    &quot;html&quot;,
    &quot;flowtype-errors&quot;
  ],

  &quot;extends&quot;: [
    &quot;vue&quot;
  ],

  &quot;rules&quot;: {
    &quot;flowtype-errors/show-errors&quot;: 2
  }
}
</code></pre></li>
<li>创建.flowconfig文件，可以为空</li>
<li>现在可以在.vue的script中使用静态类型检测了</li>
</ul>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
