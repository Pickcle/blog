<template>
  <div class="router-view-blog">
    <h3 id="2017-07-10">2017-07-10</h3>
<p><strong>使用ssh连接远程服务器时，总是要输入密码，感觉很麻烦，往上搜到的文章，总是有点遗漏或者不清晰，于是写下这篇文章来记录一下步骤</strong></p>
<p><strong>本机系统： OS X</strong></p>
<p><strong>远程机系统： centos 6</strong></p>
<ul>
<li>本机生成RSA公私密钥对<pre><code>ssh-keygen
</code></pre>选项全部默认为是，最后会在~/.ssh文件夹生成id_rsa和id_rsa.pub两个文件</li>
<li>改变.ssh目录权限<pre><code>chmod 755 ~/.ssh
</code></pre></li>
<li>在~/.ssh文件夹下创建config文件
内容如下：<pre><code>Host [自定义别名]
HostName [服务器ip地址]
User [用户名]
Port [服务器端口]
</code></pre></li>
<li>将公钥复制到远程机上<pre><code>ssh-copy-id -i ~/.ssh/id_rsa.pub -p [端口] [用户名]@[ip地址]
</code></pre>这次还是需要输入密码的</li>
<li>连接上远程机<pre><code>ssh -p [端口] [用户名]@[ip地址]
</code></pre>输入密码</li>
<li>打开sshd_config<pre><code>vi /etc/ssh/sshd_config
</code></pre>将以下几行前面的&#39;#&#39;去掉  <pre><code>RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
</code></pre>如果想要ssh保持长连接，添加<pre><code>TCPKeepAlive yes
ClientAliveInterval 120
</code></pre></li>
<li>更改~/.ssh权限<pre><code>cd ~/.ssh
chmod 600 authorized_keys
</code></pre></li>
<li>重启ssh<pre><code>service sshd restart
</code></pre></li>
</ul>
<p><strong>回到本机，直接ssh -p [端口] [用户名]@[ip地址]或者ssh [自定义别名]，不用输入密码了，方便多了</strong></p>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
