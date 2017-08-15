<template>
  <div class="router-view-blog">
    <h3 id="2017-07-27">2017-07-27</h3>
<p><strong>记录在vps上如何配置nginx</strong></p>
<ul>
<li>安装nginx，直接yum安装即可</li>
<li><p>新建nginx配置文件</p>
<pre><code>  cd /etc/nginx/conf.d
  vi site.conf
</code></pre><p>  输入配置信息</p>
<pre><code>  server {
      listen 80;
      server_name www.myarki.com;

      location / {
          proxy_pass: http://localhost:9090;
      }
  }
</code></pre><p>  保存退出</p>
</li>
<li>重启nginx<pre><code>  service nginx restart
</code></pre></li>
<li>还可以将nginx服务设置为默认开启<pre><code>  chkconfig --level 2345 nginx on
</code></pre>  执行以下命令查看：<pre><code>  chkconfig --list
</code></pre>  重启vps<pre><code>  reboot
</code></pre>  查看nginx服务是否开启<pre><code>  netstat --apn
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
