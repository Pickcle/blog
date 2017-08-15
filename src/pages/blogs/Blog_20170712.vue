<template>
  <div class="router-view-blog">
    <h3 id="2017-07-12">2017-07-12</h3>
<p><strong>使用ssh连接远程服务器时，当一段时间不操作后，会出现Broken pipe错误，表示ssh因为超时而自动断开。下面介绍下如何避免ssh超时自动断开</strong></p>
<p><strong>本机系统： OS X</strong></p>
<p><strong>远程机系统： centos 6</strong></p>
<p><strong>以下两种方法各有优劣，请酌情选择使用</strong></p>
<ol>
<li>修改本机ssh配置，对所有ssh都生效<pre><code>vi ~/.ssh/config
Host *
ServerAliveInterval 120
ServerAliveCountMax 720
</code></pre>ServerAliveInterval参数表示每120秒会发送一个KeepAlive请求，防止自动断开<br>然后修改文件权限<pre><code>chmod 600 ~/.ssh/config
</code></pre></li>
<li>修改远程机ssh配置，对所有连接该远程机的ssh生效<br>连接上远程机后，在远程机上修改：<pre><code>vi /etc/ssh/sshd_config
// 添加两行
ClientAliveInterval 120
ClientAliveCountMax 720
</code></pre>修改完成后，重启ssh<pre><code>service sshd restart
</code></pre></li>
</ol>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
