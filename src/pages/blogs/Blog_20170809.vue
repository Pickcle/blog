<template>
  <div class="router-view-blog">
    <h3 id="2017-08-09">2017-08-09</h3>
<p><strong>使用box-shadow创建空心阴影</strong><br>原理就是创建两个box-shadow，前一个阴影颜色与背景色一样，后一个阴影比前一个阴影的spread大1px，颜色设为需要显示的颜色，就可以了。</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;example&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><pre><code class="lang-css">body {
  background: #000
}
.example {
  width: 200px;
  height: 200px;
  background-color: green;
  box-shadow: 5px 5px 0 0 #000, 5px 5px 0 1px yellow;
}
</code></pre>
<p>结果：<br><img src="https://raw.githubusercontent.com/Pickcle/pickcle.github.io/master/images/box-shadow.png" alt="img"></p>
<p><strong>使用:after创建空心阴影</strong><br>原理就是利用:after生成一个同宽同高的div，设置border并做偏移</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;example&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><pre><code class="lang-css">.example {
  position: relative;
  background-color: green;
  width: 200px;
  height: 200px;
}
.example:after {
  content: &quot; &quot;;
  display: block;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
  z-index: -1;
}
</code></pre>
<p>结果：<br><img src="https://raw.githubusercontent.com/Pickcle/pickcle.github.io/master/images/after-border.png" alt="img"><br>这种方式的好处是不用关心背景色是什么颜色，坏处是设置了z-index，有些情况阴影会被覆盖。</p>

  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
</style>
