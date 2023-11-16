import{_ as t,o as s,c as e,O as a}from"./chunks/framework.a4466d04.js";const u=JSON.parse('{"title":"wkv-marqueue","description":"","frontmatter":{},"headers":[],"relativePath":"components/wkv-marqueue.md","filePath":"components/wkv-marqueue.md","lastUpdated":1691749721000}'),n={name:"components/wkv-marqueue.md"},l=a(`<h1 id="wkv-marqueue" tabindex="-1">wkv-marqueue <a class="header-anchor" href="#wkv-marqueue" aria-label="Permalink to &quot;wkv-marqueue&quot;">​</a></h1><p>走马灯，可用于展示公告或通知消息</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wkv-marqueue</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">contents</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一个很长的走马灯,这是一个很长的走马灯,这是一个很长的走马灯,这是一个很长的走马灯,这是一个很长的走马灯</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">wkv-marqueue</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">horizontal</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">是否为横向滚动，如果为 <code>false</code> 则需要 <code>contents</code> 为数组，并且为上下轮播</td></tr><tr><td style="text-align:center;">contents</td><td style="text-align:center;"><code>[String, Array]</code></td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">滚动的内容</td></tr><tr><td style="text-align:center;">speed</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>2</code></td><td style="text-align:center;">滚动内容的速率单位为 <code>px</code></td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>3000</code></td><td style="text-align:center;">多久后展示下一条滚动数据，单位 <code>ms</code></td></tr><tr><td style="text-align:center;">showButton</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">是否显示更多按钮</td></tr><tr><td style="text-align:center;">buttonText</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>更多</code></td><td style="text-align:center;">按钮展示的文本</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">事件名</th><th style="text-align:center;">事件说明</th><th style="text-align:center;">返回参数</th></tr></thead><tbody><tr><td style="text-align:center;">moreClick</td><td style="text-align:center;">按钮的点击事件</td><td style="text-align:center;">-</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-k8Nqj" id="tab-g9czex_" checked="checked"><label for="tab-g9czex_">template</label><input type="radio" name="group-k8Nqj" id="tab-SSWEzDl"><label for="tab-SSWEzDl">script</label><input type="radio" name="group-k8Nqj" id="tab-8drM07U"><label for="tab-8drM07U">style</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wkv-marqueue-example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wk-section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">horizontal</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wk-section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wkv-marqueue</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">contents</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">走马灯,我是一个走马灯啊!!!!!!是一个一直在动的走马灯!!!~~~~</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		&gt;&lt;/</span><span style="color:#F07178;">wkv-marqueue</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wk-section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">vertical</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wk-section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wkv-marqueue</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">:horizontal</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#C792EA;">:contents</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;公告1：测试公告1&#39;, &#39;公告2：测试公告2&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		&gt;&lt;/</span><span style="color:#F07178;">wkv-marqueue</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wkv-marqueue-example</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;">&gt;</span></span></code></pre></div></div></div>`,10),o=[l];function p(c,r,d,y,i,D){return s(),e("div",null,o)}const g=t(n,[["render",p]]);export{u as __pageData,g as default};
