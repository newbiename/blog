import{_ as s,o as n,c as a,O as l}from"./chunks/framework.90004f06.js";const F=JSON.parse('{"title":"CI/CD学习","description":"","frontmatter":{"title":"CI/CD学习","date":"2023年02月24日","tags":["windows"],"categories":["开发环境"]},"headers":[],"relativePath":"articles/other/CI-CD/CI-CD.md","filePath":"articles/other/CI-CD/CI-CD.md"}'),p={name:"articles/other/CI-CD/CI-CD.md"},o=l(`<h1 id="简单认识" tabindex="-1">简单认识 <a class="header-anchor" href="#简单认识" aria-label="Permalink to &quot;简单认识&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 新建</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 方法1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; 根目录新建文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; .github---&gt; workflows---&gt; .yml 结尾的文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 方法2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; active - simple workflow - CommitChagnes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 运行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; action runworkflow 点击进入已经跑完的 ci 进入job</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 串行和并行</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;    第一个运行成功才会运行第二个   第一个成功与否和第二个没有关系</span></span></code></pre></div><h2 id="触发条件" tabindex="-1">触发条件 <a class="header-anchor" href="#触发条件" aria-label="Permalink to &quot;触发条件&quot;">​</a></h2><blockquote><blockquote><p>on: workflow_dispatch</p></blockquote></blockquote><blockquote><p>git 类型 手动 定时</p></blockquote><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">push</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">workflow_dispatch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 两个触发条件 无论在哪个分支做了 这些行动都会执行触发</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">-master</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">workflow_dispatch</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 两个触发条件  只有在 master 分支下做push 才会触发</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">tage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.**</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">paths</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 基于某个标签或文件执行</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">schedule</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cron :&#39;*/ 5 * * *&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #  </span><span style="color:#C3E88D;">五分钟执行一次计划 cron 可以搜索</span></span></code></pre></div><h2 id="上传文件" tabindex="-1">上传文件 <a class="header-anchor" href="#上传文件" aria-label="Permalink to &quot;上传文件&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pyinstaller</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">workflow_dispatch</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">build-on-windows</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">windows-2022</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout code</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">uses</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@3</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 使用工具包</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install pyinstaller</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pip install pyinstaller</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buid exe</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pyinstaller sha256.py -F</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 打包文件生成exe 到dist文件夹下</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upload exe file</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">uses :actions/upload-actifact@3</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 使用工具包 上传文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">name:shang256-windows-exe</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">path:dist.sha256/exe</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#  文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">PS</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">name 唯一性 如</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">shar-windows</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">shar-linux</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">shar-macos</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">! </span><span style="color:#C3E88D;">python  打包的应用不保证在非windows的平台 稳定运行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">区别</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">*****</span></span>
<span class="line"><span style="color:#C3E88D;">路径         linux macos 不用加 应用尾缀</span></span>
<span class="line"><span style="color:#C3E88D;">macos的命令  pip3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">linux macos</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">执行需要加 chmod +x  以提升运行权限</span></span></code></pre></div><h2 id="下载文件" tabindex="-1">下载文件 <a class="header-anchor" href="#下载文件" aria-label="Permalink to &quot;下载文件&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">test-buid-windows</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">run-on</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">windows-2022</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">needs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build-on-windows</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 增加依赖条件 如果windows 运行失败 则不允许这个脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dowload exe file</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/download-artififact@v3</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 使用 工具包</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sha256-windows-exe</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 依赖于上方widows生成的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test exe file</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 查看并运行</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#F07178;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">                ls</span></span>
<span class="line"><span style="color:#C3E88D;">                ./sha256/exe sha256.exe</span></span></code></pre></div><h2 id="定义环境" tabindex="-1">定义环境 <a class="header-anchor" href="#定义环境" aria-label="Permalink to &quot;定义环境&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">workflow_env</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">workflow_dispatch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">DAT_OF_WEEK:Moday</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">.....</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test-env</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo &quot;$Greeting $First_Name .Todat is $DAT_OF_WEEK!&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 这段代码中 可以访问到 WEEK 其余的访问不到</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">greeting_job</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubntu-laest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">Greeting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Hello</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> Say Hello</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo &quot;$Greeting $First_Name .Todat is $DAT_OF_WEEK!&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">First_Name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Mona</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 这段代码中 都可以访问</span></span></code></pre></div><h2 id="环境加密" tabindex="-1">环境加密 <a class="header-anchor" href="#环境加密" aria-label="Permalink to &quot;环境加密&quot;">​</a></h2><blockquote><p>seting --&gt; secrets and variables</p></blockquote><blockquote><p>secrets 隐私</p></blockquote><blockquote><p>variables 环境变量</p></blockquote><blockquote><p>actions--&gt; new reposiory secre</p></blockquote><blockquote><p><strong>DB_USERNAME=&#39; 账号&#39;</strong></p></blockquote><blockquote><p><strong>DB_PASSWORD=&#39; test&#39;</strong> 设置密码为 test</p></blockquote><h2 id="加密引用" tabindex="-1">加密引用 <a class="header-anchor" href="#加密引用" aria-label="Permalink to &quot;加密引用&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">DB_U</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ vars.DB_USERNAME}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">DB_P</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrests.DB_PASSWORD}}</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">test-secrests</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-22.04</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">setps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout code</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">check env u</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo &#39;\${{ env.DB_U }}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">check env p</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo &#39;\${{ env.DB_p }}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;"># GITHUB 为了安全 这里是打印不出来的</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test with pyhon</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 此处的test 和密码库的相同了 页面会展示出  加密  适得其反  密码要设置</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python secrets.py</span></span></code></pre></div><h2 id="运行容器环境" tabindex="-1">运行容器环境 <a class="header-anchor" href="#运行容器环境" aria-label="Permalink to &quot;运行容器环境&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testing</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">workflow_dispatch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">test-code</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">run-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-22.04</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout code</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-python@v4</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">set up py</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">python-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.8</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install -r requirements.text</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pip install -r requirements.text</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create mongdb container</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">                docker run -d -p 27017:27017 --name some-mongo \\</span></span>
<span class="line"><span style="color:#C3E88D;">                    - e MONGO_INITDB_ROOT_USERNAME=root \\</span></span>
<span class="line"><span style="color:#C3E88D;">                    - e MONGO_INITDB_ROOT_PASSWORD=example \\</span></span>
<span class="line"><span style="color:#C3E88D;">                    mongo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建了数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run py test</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run-py-test</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 基于dorcker MOGODB 运行了 命令</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  可改进的地方 账号密码可用 github section 的方式</span></span></code></pre></div><p>给个金星老师的手势！！！！！👏👏👏👏</p>`,24),e=[o];function c(t,r,y,D,C,A){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
