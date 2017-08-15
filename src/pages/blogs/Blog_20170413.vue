<template>
  <div class="router-view-blog">
    <h3 id="2017-04-13">2017-04-13</h3>
<p><strong>Oh My Zsh翻墙步骤：</strong></p>
<ul>
<li>终端输入vim ~/.zshrc，查看Oh My Zsh的配置文件</li>
<li>添加以下内容:<pre><code># socks5代理
alias setproxy=&quot;export all_proxy=socks5://127.0.0.1:1080&quot;
alias unsetproxy=&quot;unset all_proxy&quot;
</code></pre></li>
<li>保存退出vim，重启终端</li>
<li>输入setproxy命令，启用socks5代理进行翻墙</li>
</ul>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
