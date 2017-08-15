<template>
  <div class="router-view-blog">
    <h3 id="2017-07-24">2017-07-24</h3>
<p><strong>最近VPS重装系统了，记录一下安装nodejs过程</strong></p>
<ul>
<li>更新yum<pre><code>  yum -y update
</code></pre></li>
<li>直接使用yum安装的：<pre><code>  yum install -y git nginx
</code></pre></li>
<li><p>需要下载源码安装的：</p>
<ul>
<li>gcc:
  先安装依赖库<pre><code>  yum install -y zip unzip
</code></pre><pre><code>  wget http://gcc.skazkaforyou.com/releases/gcc-4.8.2/gcc-4.8.2.tar.gz
  tar -zxvf gcc-4.8.2.tar.gz
  cd gcc-4.8.2
  ./contrib/download_prerequisites
  mkdir build
  cd build
  ../configure --enable-checking=release --enable-languages=c,c++ --disable-multilib
  make
  sudo make install
</code></pre>  查看新安装好的gcc版本：i686-pc-linux-gnu-gcc-4.8.2<pre><code>  ls /usr/local/bin
</code></pre>  然后将gcc链接改用新安装好的4.8.2版本<pre><code>  /usr/sbin/update-alternatives --install  /usr/bin/gcc gcc /usr/local/bin/i686-pc-linux-gnu-gcc-4.8.2 52
</code></pre>  验证新版本<pre><code>  gcc -v
</code></pre></li>
<li><p>node/npm:  </p>
<p>先安装make等相应工具</p>
<pre><code>yum install -y gcc make gcc-c++ openssl-devel wget
</code></pre><pre><code>yum -y install
</code></pre><p>下载并解压node源码，这里以8.0.0版本为例</p>
<pre><code>wget http://nodejs.org/dist/v8.0.0/node-v8.0.0.tar.gz
tar -zxvf node-v8.0.0.tar.gz
cd node-v8.0.0
./configure
make &amp;&amp; make install
</code></pre></li>
</ul>
</li>
</ul>
<p><strong>过程中遇到的问题：</strong></p>
<ul>
<li>node make时报错<code>GLIBCXX_3.4.18 not found</code><br>  解决方法：将升级gcc后生成的动态库替换老版本动态库<br>  执行以下命令，查找最新动态库<pre><code>  find / -name &quot;libstdc++.so*&quot;
</code></pre>  输出：<pre><code>  ...
  /usr/local/src/gcc-4.8.2/build/stage1-i686-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6
  /usr/local/src/gcc-4.8.2/build/stage1-i686-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.18
  /usr/local/src/gcc-4.8.2/build/stage1-i686-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so
  ...
</code></pre>  将最新动态库复制到/usr/lib下<pre><code>  cp /usr/local/src/gcc-4.8.2/build/stage1-i686-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.18 /usr/lib
</code></pre>  然后替换原软链接<pre><code>  cd /usr/lib
  rm -rf libstdc++.so.6
  ln -s libstdc++.so.6.0.18 libstdc++.so.6
</code></pre>  验证是否成功：<pre><code>  strings /usr/lib/libstdc++.so.6 | grep GLIBC
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
