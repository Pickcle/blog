<template>
  <div class="router-view-blog">
    <h3 id="2017-04-14">2017-04-14</h3>
<p><strong>使用sudo gem install jekyll bundler安装jekyll时发生错误:</strong></p>
<pre><code>ERROR: While executing gem ... (Errno::EPERM)
Operation not permitted - /usr/bin/jekyll
</code></pre><p><strong>解决方法:</strong></p>
<ul>
<li>sudo gem install -n /usr/local/bin/ jekyll<br>默认安装目录是/usr/bin，将安装目录改成/usr/local/bin，可以绕过SIP检测</li>
</ul>
<p><strong>参考链接：</strong> <a href="http://stackoverflow.com/questions/31567029/how-can-i-install-jekyll-on-osx-10-11">http://stackoverflow.com/questions/31567029/how-can-i-install-jekyll-on-osx-10-11</a></p>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
