<template>
  <div class="router-view-blog">
    <h3 id="2017-06-01">2017-06-01</h3>
<p><strong>Vue warn: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.</strong></p>
<p><strong>解决方案：</strong></p>
<ul>
<li>node_modules中vue的package.json中可以看到，真正导出的是main指向的vue.runtime.common.js，所以如果直接import vue from &#39;vue&#39;的话，引用的是vue.runtime.common.js，而vue其实是rumtime+compile两部分组成的，所以我们需要在webpack中设置个vue的别名，alias中添加一行&#39;vue&#39;: &#39;vue/dist/vue.js&#39;，然后项目中正常使用就可以了</li>
</ul>
<p><strong>Vue warn: Error compiling template:Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <code>&lt;script&gt;</code>, as they will not be parsed.</strong>  </p>
<p><strong>解决方案：</strong></p>
<ul>
<li>使用html-webpack-plugin时，指定template对应的模板html中，不能有<code>&lt;div /&gt;</code>这样的写法，必须是<code>&lt;div&gt;&lt;/div&gt;</code>这样的标准写法，否则会报错</li>
</ul>
<p><strong>webpack HMR(hot module replacement) 如何对html-webpack-plugin生效？</strong></p>
<p><strong>解决方案：</strong></p>
<ul>
<li><p>server文件中添加</p>
<pre><code class="lang-js">var compiler = wepback(wepbackConfig)
var webpackHotMiddleware = require(&#39;webpack-hot-middleware&#39;)

var hotMiddleware = webpackHotMiddleware(compiler, {
  log: function () {}
})

compiler.plugin(&#39;compilation&#39;, function (compilation) {
  compilation.plugin(&#39;html-webpack-plugin-after-emit&#39;, function (data, cb) {
    hotMiddleware.publish({ action: &#39;reload&#39; })
    cb()
  })
})
</code></pre>
<p>当webpack重新打包html时，会派送个自定义的reload事件</p>
</li>
<li><p>新建文件hotMiddlewareClient.js</p>
<pre><code class="lang-js">var hotMiddlewareClient = require(&#39;webpack-hot-middleware/client?noInfo=true&amp;reload=true&#39;)

hotMiddlewareClient.subscribe(function (e) {
  if (e.action === &#39;reload&#39;) {
    window.location.reload()
  }
})
</code></pre>
<p>接收reload事件，强制浏览器reload</p>
</li>
<li><p>在webpack.config.js中配置</p>
<pre><code>entry: {
  app: [
    &#39;./hotMiddlewareClient&#39;,
    path.join(SRC_PATH, &#39;index.js&#39;)
  ]
},
</code></pre></li>
</ul>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
