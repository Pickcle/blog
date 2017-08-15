<template>
  <div class="router-view-blog">
    <h3 id="2017-07-18">2017-07-18</h3>
<h1 id="-markdown-html-doc-pdf-ppt-">如何转换Markdown到html/doc/pdf/ppt格式</h1>
<h2 id="-">内容大纲</h2>
<ul>
<li>Markdown格式简介<ul>
<li>标题</li>
<li>列表</li>
<li>内容</li>
</ul>
</li>
<li>格式转换工具使用<ul>
<li>pandoc</li>
<li>xelatex</li>
<li>unoconv</li>
</ul>
</li>
<li>几个实用转换范例<ul>
<li>md -&gt; html, doc, pdf, ppt</li>
</ul>
</li>
</ul>
<h2 id="markdown-">Markdown 目录结构</h2>
<h3 id="-">标题</h3>
<ul>
<li><p>一级/二级/三级/四级  </p>
<h1 id="-">一级标题</h1>
<h2 id="-">二级标题</h2>
<h3 id="-">三级标题</h3>
<h4 id="-">四级标题</h4>
</li>
<li><p>还有一种写法  </p>
<h1 id="-">  一级标题  </h1>
<h2 id="-">  二级标题  </h2>
</li>
</ul>
<h3 id="-">列表</h3>
<ul>
<li>星号(实心圆点)<ul>
<li>减号(空心圆点)</li>
</ul>
</li>
</ul>
<h2 id="markdown-">Markdown 正文内容</h2>
<h3 id="-">内容</h3>
<ul>
<li>黑体/斜体<br>  这是一段 <strong>黑体</strong> 文字<br>  这是一段 <em>斜体</em> 文字</li>
<li>超链接<br>  欢迎访问我的微博 <a href="http://weibo.com/limingth">http://weibo.com/limingth</a><br>  请关注 <a href="http://weibo.com/limingth">@亚嵌李明老师</a></li>
<li>换行<br>  可以在行尾输入2个空格<br>  就可以实现换行功能</li>
</ul>
<h2 id="markdown-">Markdown 代码引用</h2>
<h3 id="-">代码</h3>
<p>使用1或2个TAB可以引用大段的代码保持原有缩进格式</p>
<pre><code>#include &lt;stdio.h&gt;

int main(void)
{
    printf(&quot;hello, world\n&quot;);
    return 0;
}
</code></pre><h2 id="-">格式转换工具使用</h2>
<h3 id="-">工具安装</h3>
<ul>
<li>sudo apt-get install pandoc</li>
<li>sudo apt-get install texlive</li>
<li>sudo apt-get install xelatex</li>
<li>sudo apt-get install unoconv</li>
</ul>
<h2 id="-">几个实用转换范例</h2>
<ul>
<li><p>md-&gt;html  <a href="https://github.com/limingth/share/tree/master/markdown-demo/demo.html">(demo.html)</a></p>
<pre><code>  pandoc --ascii -f markdown -t html -o demo.html demo.md  
</code></pre></li>
<li><p>md-&gt;doc  <a href="https://github.com/limingth/share/tree/master/markdown-demo/demo.doc">(demo.doc)</a></p>
<pre><code>  pandoc demo.md -o demo.doc
      (目录无数字标题1.1.1)
</code></pre></li>
<li><p>md-&gt;doc-&gt;pdf  <a href="https://github.com/limingth/share/tree/master/markdown-demo/demo.pdf">(demo.pdf)</a></p>
<pre><code>  unoconv -f pdf demo.doc
      (目录无数字标题1.1.1)
</code></pre></li>
<li><p>md-&gt;tex-&gt;doc.pdf  <a href="https://github.com/limingth/share/tree/master/markdown-demo/demo.doc.pdf">(demo.doc.pdf)</a></p>
<pre><code>  pandoc demo.md -o demo2doc.tex
  xelatex demo.doc.tex
      (demo.doc.tex 是自制doc tex模板文件, 自动生成数字标题1.1.1)
</code></pre></li>
<li><p>md-&gt;tex-&gt;ppt.pdf  <a href="https://github.com/limingth/share/tree/master/markdown-demo/demo.ppt.pdf">(demo.ppt.pdf)</a></p>
<pre><code>  pandoc -t beamer --slide-level 2 demo.md -o demo.tex
  xelatex demo.ppt.tex
      (demo.ppt.tex 是自制ppt tex模板文件)
</code></pre></li>
</ul>
<h2 id="-">参考资料</h2>
<ul>
<li>Pandoc语法详解 <a href="http://johnmacfarlane.net/pandoc/demos.html">http://johnmacfarlane.net/pandoc/demos.html</a></li>
<li>pandoc是什么 <a href="http://yanping.me/cn/blog/2012/03/13/pandoc/">http://yanping.me/cn/blog/2012/03/13/pandoc/</a></li>
<li>Markdown写作进阶 <a href="http://www.yangzhiping.com/tech/pandoc.html">http://www.yangzhiping.com/tech/pandoc.html</a></li>
<li>unoconv用法参数 <a href="http://t.cn/zYBW9w2">http://t.cn/zYBW9w2</a></li>
<li>latex学习视频课程 <a href="http://www.happycasts.net/episodes/19?autoplay=true">http://www.happycasts.net/episodes/19?autoplay=true</a></li>
<li>beamer theme快速查看 <a href="http://www.hartwork.org/beamer-theme-matrix/">http://www.hartwork.org/beamer-theme-matrix/</a></li>
</ul>
<h2 id="thanks">Thanks</h2>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
