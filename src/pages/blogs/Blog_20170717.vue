<template>
  <div class="router-view-blog">
    <h3 id="2017-07-17">2017-07-17</h3>
<p>之前使用LAMP(Linux+Apache+MySql+PHP)搭建了WordPress博客网站，但感觉框架太重，想改css只能用模板，想写博客只能用编辑器，想上传markdown都不允许，不够自由。</p>
<p>这篇文章记录了从零开始搭建一个使用vps+nodejs+nginx的个人网站。</p>
<hr>
<p>准备工作：</p>
<p><strong>遇到的问题</strong></p>
<p><strong>mark一下</strong></p>
<ul>
<li>osx查看端口情况<pre><code>lsof -i tcp
</code></pre></li>
<li>osx查看某个端口情况<pre><code>lsof -i:9090
</code></pre></li>
<li>关闭node进程，同时也关闭端口<pre><code>kill -2 [pid]
</code></pre></li>
<li>linux查看端口状态<pre><code>netstat --apn
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
