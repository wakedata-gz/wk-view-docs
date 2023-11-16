import{_ as s,o as a,c as n,O as l}from"./chunks/framework.a4466d04.js";const A=JSON.parse('{"title":"API 工具","description":"","frontmatter":{},"headers":[],"relativePath":"using/api-tool.md","filePath":"using/api-tool.md","lastUpdated":1691746957000}'),t={name:"using/api-tool.md"},o=l(`<h1 id="api-工具" tabindex="-1">API 工具 <a class="header-anchor" href="#api-工具" aria-label="Permalink to &quot;API 工具&quot;">​</a></h1><h2 id="uni-wkv-addunit" tabindex="-1">uni.$wkv.addUnit <a class="header-anchor" href="#uni-wkv-addunit" aria-label="Permalink to &quot;uni.$wkv.addUnit&quot;">​</a></h2><p>为指定值添加 css 单位。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * 为指定值添加 css 单位，如果传入的 value 是数字则加上指定单位，否则直接返回 value 值。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number|string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#676E95;font-style:italic;"> 待添加单位的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">unit</span><span style="color:#676E95;font-style:italic;"> 要添加的单位，默认 uni.$wkv.config.unit 的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AddUnitFunction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">unit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span></code></pre></div><h2 id="uni-wkv-getpx" tabindex="-1">uni.$wkv.getPx <a class="header-anchor" href="#uni-wkv-getpx" aria-label="Permalink to &quot;uni.$wkv.getPx&quot;">​</a></h2><p>转换指定值为 px 单位的值。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * 转换指定值为 px 单位的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number|string</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#676E95;font-style:italic;"> 指定值，支持数字和 px rpx upx 单位的字符串。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">boolean</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">unit</span><span style="color:#676E95;font-style:italic;"> 返回结果是否带 px 单位</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetPxFunction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">unit</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span></code></pre></div>`,7),p=[o];function e(c,i,r,y,C,D){return a(),n("div",null,p)}const f=s(t,[["render",e]]);export{A as __pageData,f as default};
