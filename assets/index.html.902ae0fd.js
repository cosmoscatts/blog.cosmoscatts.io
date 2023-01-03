import{_ as p,r as o,o as e,c,a as n,b as s,d as t,e as l}from"./app.f604be81.js";var u="/img/in-post/2022-11-28/snakegame.png",k="/img/in-post/2022-11-28/kof.png";const i={},r=l(`<p>\u603B\u7ED3\u6E38\u620F\u7684\u57FA\u672C\u7F16\u5199\u65B9\u6CD5\u3002</p><hr><p>\u539F\u6765\u4E00\u76F4\u89C9\u5F97\u5199\u6E38\u620F\u5F88\u590D\u6742\uFF0C\u6240\u4EE5\u4E00\u76F4\u6CA1\u6709\u5C1D\u8BD5\u5199\u4E00\u4E9B\u5C0F\u6E38\u620F\u3002\u76F4\u5230\u770B\u4E86 yxc \u7684\u6559\u5B66\uFF0C\u53D1\u73B0\u5199\u5C0F\u6E38\u620F\u4E5F\u5E76\u4E0D\u662F\u90A3\u4E48\u590D\u6742\u3002\u5199\u6E38\u620F\u4E5F\u662F\u6709\u56FA\u5B9A\u5957\u8DEF\u7684\uFF0C\u6240\u4EE5\u5728\u6B64\u8BB0\u5F55\u4E00\u4E0B\uFF0Corz...</p><hr><h2 id="\u57FA\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7C7B" aria-hidden="true">#</a> \u57FA\u7C7B</h2><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u5199\u8FD9\u4E9B\u5C0F\u6E38\u620F\u90FD\u4F1A\u5199\u4E00\u4E2A\u57FA\u7C7B\uFF0C\u8FD9\u4E2A\u57FA\u7C7B\u5B9A\u4E49\u57FA\u672C\u7684 start \u548C update \u65B9\u6CD5\uFF1B\u521D\u59CB\u65F6\uFF0C\u6267\u884C\u4E00\u6B21 start \u65B9\u6CD5\uFF0C\u4E4B\u540E\u6D4F\u89C8\u5668\u5237\u65B0\u7684\u6BCF\u4E00\u5E27\u90FD\u4F1A\u53EA\u6267\u884C update \u65B9\u6CD5\u3002\u8FD9\u6837\uFF0C\u6E38\u620F\u4E3B\u4F53\u53EA\u9700\u8981\u7EE7\u627F\u8FD9\u4E2A\u57FA\u7C7B\uFF0C\u5C31\u53EF\u4EE5\u62E5\u6709 start\u3001update \u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A render \u51FD\u6570\u63A7\u5236\u6E38\u620F\u6BCF\u4E2A\u65F6\u523B\u8BE5\u6E32\u67D3\u4EC0\u4E48\u6837\uFF0C\u628A\u8FD9\u4E2A render \u51FD\u6570\u653E\u5728 update \u51FD\u6570\u4E2D\u6267\u884C\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6E38\u620F\u7684\u6E32\u67D3\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">GAME_OBJECTS</span><span class="token operator">:</span> GameObject<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">/*
  \u6E38\u620F\u5BF9\u8C61\u57FA\u7C7B\uFF1A
    \u5B9A\u4E49\u4E00\u4E9B\u57FA\u672C\u53C2\u6570\u548C\u901A\u7528\u65B9\u6CD5
*/</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GameObject</span> <span class="token punctuation">{</span>
  timeDelta<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u95F4\u9694</span>
  hasCalledStart<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// \u662F\u5426\u6267\u884C\u4E86 start \u65B9\u6CD5</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeDelta <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hasCalledStart <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token constant">GAME_OBJECTS</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token function">beforeDestory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token function">destory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">beforeDestory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">GAME_OBJECTS</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">GAME_OBJECTS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">GAME_OBJECTS</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> lastTimestamp <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">const</span> <span class="token function-variable function">step</span> <span class="token operator">=</span> <span class="token punctuation">(</span>timestamp<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> obj <span class="token keyword">of</span> <span class="token constant">GAME_OBJECTS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">.</span>hasCalledStart<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7B2C\u4E00\u6B21\u6267\u884C start \u65B9\u6CD5</span>
      obj<span class="token punctuation">.</span>hasCalledStart <span class="token operator">=</span> <span class="token boolean">true</span>
      obj<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">.</span>timeDelta <span class="token operator">=</span> timestamp <span class="token operator">-</span> lastTimestamp
      obj<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  lastTimestamp <span class="token operator">=</span> timestamp
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a> \u5B9E\u8DF5</h2><h3 id="\u8D2A\u5403\u86C7" tabindex="-1"><a class="header-anchor" href="#\u8D2A\u5403\u86C7" aria-hidden="true">#</a> \u8D2A\u5403\u86C7</h3><p><img src="`+u+'" alt=""></p><p>\u4F7F\u7528\u4E86 vue \u548C typescript \u7B80\u5355\u5B9E\u73B0\u4E86\u8D2A\u5403\u86C7\u5403\u82F9\u679C\u7684\u5C0F\u6E38\u620F\u3002</p>',11),d={href:"https://vue-snakegame.netlify.app/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/cosmoscatts/vue-snakegame",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"\u62F3\u7687",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u62F3\u7687","aria-hidden":"true"},"#"),s(" \u62F3\u7687")],-1),_=n("p",null,[n("img",{src:k,alt:""}),s(" \u4F7F\u7528\u539F\u751F\u4E09\u4EF6\u5957\u5B9E\u73B0\u4E86\u7B80\u6613\u7248\u62F3\u7687\uFF0C\u53EA\u6709 "),n("strong",null,"\u8349\u7A1A\u4EAC"),s(" \u8FD9\u4E2A\u89D2\u8272\uFF0C\u540E\u9762\u6211\u4F1A\u4F7F\u7528 vue \u5199\u4E00\u4E2A\u65B0\u7248\u7684\u62F3\u7687\uFF0C\u5E94\u8BE5\u6216\u8BB8\u4F1A\u652F\u6301\u591A\u4E2A\u89D2\u8272\u{1F605}\u3002")],-1),f={href:"https://github.com/cosmoscatts/kof-js",target:"_blank",rel:"noopener noreferrer"},b=n("hr",null,null,-1),y=n("p",null,"P.S. \u957F\u65F6\u95F4\u4E0D\u78B0\u5C31\u4F1A\u5FD8\uFF0C\u6709\u4E9B\u4E1C\u897F\u8FD8\u662F\u5F97\u8BB0\u5F55\u4E0B\u6765\uFF0C\u4EE5\u5907\u4E0D\u65F6\u4E4B\u9700 (\u256F\u2035\u25A1\u2032)\u256F\uFE35\u2558\u2550\u255B\u3002",-1);function g(w,v){const a=o("v-icon");return e(),c("div",null,[r,n("p",null,[s("\u4F60\u53EF\u4EE5\u5728\u6B64\u5904\u9884\u89C8\uFF1A"),n("a",d,[t(a,{name:"pi-gengar-shiny",scale:"0.9"}),s(" preview")])]),n("p",null,[s("\u4F60\u53EF\u4EE5\u5728\u6B64\u5904\u627E\u5230\u5B9E\u73B0\u4EE3\u7801\uFF1A"),n("a",m,[t(a,{name:"ri-link-m",scale:"0.9"}),s(" cosmoscatts/vue-snakegame")])]),h,_,n("p",null,[s("\u4F60\u53EF\u4EE5\u5728\u6B64\u5904\u627E\u5230\u5B9E\u73B0\u4EE3\u7801\uFF1A"),n("a",f,[t(a,{name:"ri-link-m",scale:"0.9"}),s(" cosmoscatts/kof-js")])]),b,y])}var E=p(i,[["render",g],["__file","index.html.vue"]]);export{E as default};
