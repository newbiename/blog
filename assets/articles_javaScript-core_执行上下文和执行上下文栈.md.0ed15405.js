import{_ as s,o as n,c as a,O as l}from"./chunks/framework.90004f06.js";const A=JSON.parse('{"title":"执行上下文和执行上下文栈","description":"","frontmatter":{"title":"执行上下文和执行上下文栈","date":"2023年02月24日","tags":["javaScript"],"categories":["JavaScript核心系列"]},"headers":[],"relativePath":"articles/javaScript-core/执行上下文和执行上下文栈.md","filePath":"articles/javaScript-core/执行上下文和执行上下文栈.md"}'),o={name:"articles/javaScript-core/执行上下文和执行上下文栈.md"},p=l(`<h1 id="执行上下文和执行上下文栈" tabindex="-1">执行上下文和执行上下文栈 <a class="header-anchor" href="#执行上下文和执行上下文栈" aria-label="Permalink to &quot;执行上下文和执行上下文栈&quot;">​</a></h1><p>执行上下文一般有三种，<strong>全局执行上下文、函数执行上下文、eval 执行上下文</strong></p><h2 id="_1-全局执行上下文" tabindex="-1">1. 全局执行上下文 <a class="header-anchor" href="#_1-全局执行上下文" aria-label="Permalink to &quot;1. 全局执行上下文&quot;">​</a></h2><p>全局执行上下文只有一个，在客户端里是浏览器自己创建的，就是我们经常能遇见的 window 对象 全局执行上下文会有大量的方法，属性，也是我们全局变量和函数定义的载体。</p><p>在执行全局代码之前， <strong>全局执行上下文会对代码进行预处理：</strong> * var 定义的变量赋值为 undefined，并且被 window 收录为属性 * 全局声明的 function 函数，被 window 收录为方法</p><p>做完这些以后开始执行全局代码</p><h2 id="_2-函数执行上下文" tabindex="-1">2. 函数执行上下文 <a class="header-anchor" href="#_2-函数执行上下文" aria-label="Permalink to &quot;2. 函数执行上下文&quot;">​</a></h2><p>函数执行上下文会出现比较多，具体什么时候出现呢？ <strong>函数执行上下文在准备调用函数，执行函数体的内容之前被创建</strong></p><p>这时函数执行上下文也会对局部数据处理 * 形参变量被赋值，被函数执行上下文收录为属性 * arguments 赋值实参列表，被函数上下文收录为属性 * var 声明的变量，被赋值 undefined，被函数上下文收录为属性 * function 声明的函数赋值，被收录为方法 * this 赋值为调用函数的对象</p><p>做完以上内容，就开始执行函数内局部代码</p><p>但是这么多的执行上下文，放在哪里呢？一般语言都讲究容器，像栈内存，堆内存都是为了存放数据而生，所以执行上下文都存放在<strong>执行栈</strong>里</p><h2 id="执行上下文栈-调用栈" tabindex="-1">执行上下文栈（调用栈） <a class="header-anchor" href="#执行上下文栈-调用栈" aria-label="Permalink to &quot;执行上下文栈（调用栈）&quot;">​</a></h2><p>它是用来存储代码执行之前创建的各种栈，有先进后出的特性</p><p>在代码首次运行的时候，<strong>浏览器会创建一个全局执行上下文栈，放到调用栈中（即压栈）</strong>，然后当每次遇见调用函数的时候，创建的函数执行上下文栈依次压栈，执行完一个函数就会出栈一个上下文，直到最后还是有个全局上下文栈在最低部</p><p>我们来看看下面代码的打印顺序</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fun2</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fun1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fun3</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fun2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fun3</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fun3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fun1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// fun3 fun2 fun1</span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/14/170d6ec29d8b6c28~tplv-t2oaga2asx-image.image" alt=""> 结果中我们能看到：fun3、fun2、fun1</p><p>这就是我们所说的，遇到函数调用就创建函数上下文压栈，并且栈中内容先进后出，fun1、fun2、fun3 顺次压栈，出栈顺序就会反过来。</p><p><strong>总结</strong></p><ul><li>全局执行上下文只有一个，代码执行前由浏览器创建</li><li>函数执行上下文在函数调用的时候创建</li><li>所有的执行上下文存放在调用栈里，符合先进后出原则</li><li>var 声明的变量被赋值 undefined，并且收录变为所在上下文的属性，<strong>let、const</strong>就没有收录，所以 var 创建的变量会提升</li><li>this 是被调用函数的对象确定的，没有调用函数的对象，它就指向 window</li></ul>`,20),e=[p];function t(c,r,i,F,y,D){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
