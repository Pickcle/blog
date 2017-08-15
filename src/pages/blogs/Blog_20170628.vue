<template>
  <div class="router-view-blog">
    <h3 id="2017-06-28">2017-06-28</h3>
<p><strong>最近在学习怎么在npm上发布包，过程也不算容易，因此写这篇文章分享一下</strong></p>
<ul>
<li>既然要在npm上发布，首先当然需要一个npm账号。<a href="https://www.npmjs.com/">【npm】</a></li>
<li>在自己的github上新建个仓库，本例中仓库名是arios，如果没有github账号，先注册一个。<a href="https://github.com/">【github】</a></li>
<li>将Step2中新建的仓库clone到本地。</li>
<li>在项目目录下npm init，自己填入信息生成package.json文件。</li>
<li>根据package.json中main对应的文件名，新建相应文件。比如main是index.js，则新建index.js，内容先随便写写<pre><code>module.exports = exports = {
  name: &#39;arios&#39;
}
</code></pre></li>
<li>准备提交代码到github，并打上tag，tag的版本号需要跟package.json中的version保持一致<pre><code>git add .
git commit -m &#39;first commit&#39;
git tag v1.0.0
git push
git push origin --tags
</code></pre></li>
<li>将仓库发布到npm，只需要一个简单的命令就行了<pre><code>npm publish
</code></pre>如果是第一次publish，需要输入npm账号密码邮箱，以后就不需要了。<br>发布完成后，npm会以刚才tag的版本作为最新版本。<br>这样一个发布过程就完成了，要使用的时候，使用npm install arios，就会安装最新版本的包。</li>
</ul>
<p><strong>如果之后需要发布新版本，也很简单。</strong></p>
<ul>
<li>修改源文件后，将package.json中的version递增，版本号遵循<a href="https://gist.github.com/smallnest/666c88d3dc06774f5498">semver规范</a>。</li>
<li>为本次提交打上版本tag，假设新版本号为1.0.1<pre><code>git add .
git commit -m &#39;sceond commit&#39;
git tag v1.0.1
git push
git push origin --tags
</code></pre></li>
<li>发布到npm<pre><code>npm publish
</code></pre></li>
</ul>
<p><strong>还可以为npm包做travis-CI来保持可靠性</strong></p>
<ul>
<li>在github上fork<a href="https://github.com/plaindocs/travis-broken-example">【travis-broken-example】</a>这个库</li>
<li>用github关联登录<a href="https://travis-ci.org/auth">travis CI</a>，允许授权</li>
<li><p>在arios文件目录下新建.travis.yml文件，</p>
<pre><code>language: node_js

node_js:
  - &quot;4&quot;
</code></pre><p>上述文件表示使用node环境，用4.x版本进行build</p>
</li>
<li>在<a href="https://travis-ci.org/">travis-ci</a>官网上管理要build的仓库，在左边的My Repositories中进行管理。比如本例中将arios仓库的开关打开。</li>
<li>在arios项目的package.json中，修改script中test命令，本例中直接删除<code>&amp;&amp; exit 1</code>，并push到github中</li>
<li>travis重新build，成功，点击build passing图标，会出现一个弹窗，复制最下面的链接<code>https://travis-ci.org/Pickcle/arios.svg</code></li>
<li>在readme中添加<code>[![build status](https://travis-ci.org/Pickcle/arios.svg)](https://travis-ci.org/Pickcle/arios)</code>，push到github，现在再看readme，就能看到build passing的图标了</li>
</ul>
<p><strong>过程中遇到的问题：</strong></p>
<ul>
<li>npm publish --tag v1.0.0 时报错：Tag name must not be a valid SemVer range: 1.0.0<br>这个报错是因为publish会自动将github仓库中的tag作为version，如果tag也使用v1.0.0，会导致冲突</li>
<li>npm publish时报错you do not have permission to publish &quot;arios&quot;. Are you logged in as the correct user?<br>这个报错很可能是因为arios这个包已经存在了，所以得换一个包名字再npm publish</li>
</ul>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
