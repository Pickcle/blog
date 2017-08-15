<template>
  <div class="router-view-blog">
    <h3 id="2017-04-15">2017-04-15</h3>
<p><strong>Mac OS X El Capitan系统下安装jekyll：</strong></p>
<ul>
<li>sudo gem update --system(需要翻墙)<br>更新gem<br>oh my zsh翻墙：<a href="https://pickcle.github.io/ohmyzsh/%E7%BF%BB%E5%A2%99/2017/04/13/Oh-My-Zsh%E7%BF%BB%E5%A2%99%E6%96%B9%E6%A1%88.html">Oh My Zsh翻墙方法</a></li>
<li>sudo gem install jekyll bundler<br>安装jekyll bundler<br><a href="https://pickcle.github.io/jekyll/osx/2017/04/14/Operation-not-permitted%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html">Operation not permitted解决方法</a></li>
<li>jekyll new blog<br>在blog文件夹下创建一个新的jekyll项目<br>如果是导入了就项目，也必须走一遍这个过程，因为在新建项目时，会安装一堆gem库，如果不走这步，会有各种cannot find sass之类的报错</li>
<li>cd blog</li>
<li>bundle exec jekyll serve<br>启动jekyll服务</li>
<li>在浏览器打开<a href="http://localhost:4000">http://localhost:4000</a></li>
</ul>
<p><strong>参考链接：</strong><a href="https://jekyllrb.com/docs/quickstart/">https://jekyllrb.com/docs/quickstart/</a></p>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
