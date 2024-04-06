import{_ as s,c as i,o as a,aR as n}from"./chunks/framework.DoYNU3c7.js";const o=JSON.parse('{"title":"探索广度优先搜索（BFS）：从概念到实践","description":"","frontmatter":{},"headers":[],"relativePath":"算法/bfs.md","filePath":"算法/bfs.md","lastUpdated":null}'),h={name:"算法/bfs.md"},l=n(`<h1 id="探索广度优先搜索-bfs-从概念到实践" tabindex="-1">探索广度优先搜索（BFS）：从概念到实践 <a class="header-anchor" href="#探索广度优先搜索-bfs-从概念到实践" aria-label="Permalink to &quot;探索广度优先搜索（BFS）：从概念到实践&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言： <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言：&quot;">​</a></h2><p>在计算机科学领域，广度优先搜索（BFS）是一种经典的图搜索算法，用于解决许多重要的问题，例如图的遍历、最短路径等。本文将介绍BFS的基本概念、工作原理以及如何在实际问题中应用它。</p><h2 id="内容" tabindex="-1">内容： <a class="header-anchor" href="#内容" aria-label="Permalink to &quot;内容：&quot;">​</a></h2><h3 id="_1-什么是广度优先搜索" tabindex="-1">1. 什么是广度优先搜索？ <a class="header-anchor" href="#_1-什么是广度优先搜索" aria-label="Permalink to &quot;1. 什么是广度优先搜索？&quot;">​</a></h3><p>广度优先搜索是一种用于图的遍历的算法，它从图的起始顶点开始，逐层地向外扩展，直到找到目标顶点为止。它的特点是先遍历离起始顶点最近的顶点，然后逐渐向外扩展到离起始顶点更远的顶点。</p><h3 id="_2-广度优先搜索的工作原理" tabindex="-1">2. 广度优先搜索的工作原理 <a class="header-anchor" href="#_2-广度优先搜索的工作原理" aria-label="Permalink to &quot;2. 广度优先搜索的工作原理&quot;">​</a></h3><ul><li><strong>数据结构：</strong> BFS通常使用队列（Queue）作为辅助数据结构来存储待访问的顶点。</li><li><strong>步骤：</strong><ol><li>将起始顶点入队列。</li><li>从队列中取出一个顶点，并标记为已访问。</li><li>遍历该顶点的所有邻居，如果邻居未被访问过，则将其入队列。</li><li>重复步骤2和步骤3，直到队列为空。</li></ol></li></ul><h3 id="_3-广度优先搜索的应用" tabindex="-1">3. 广度优先搜索的应用 <a class="header-anchor" href="#_3-广度优先搜索的应用" aria-label="Permalink to &quot;3. 广度优先搜索的应用&quot;">​</a></h3><ul><li><strong>图的遍历：</strong> 用于遍历整个图，以检查图中的连通性或搜索特定的顶点。</li><li><strong>最短路径：</strong> 在无权图中，BFS可以用于查找从起始顶点到目标顶点的最短路径。</li><li><strong>迷宫求解：</strong> 将迷宫抽象成图，使用BFS来寻找从起点到终点的最短路径。</li><li><strong>社交网络分析：</strong> 在社交网络中，BFS可以用于查找两个人之间的最短路径。</li></ul><h3 id="_4-示例代码-bfs的实现" tabindex="-1">4. 示例代码：BFS的实现 <a class="header-anchor" href="#_4-示例代码-bfs的实现" aria-label="Permalink to &quot;4. 示例代码：BFS的实现&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collections </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deque</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(graph, start):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    visited </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    queue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deque([start])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    visited.add(start)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> queue:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        vertex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> queue.popleft()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vertex)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> neighbor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graph[vertex]:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> neighbor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> visited:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                queue.append(neighbor)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                visited.add(neighbor)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例图</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;F&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;D&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;F&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;F&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bfs(graph, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结： <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结：&quot;">​</a></h3><p>广度优先搜索是一种简单而强大的图搜索算法，它的应用广泛，可以用于解决多种问题。通过本文的介绍，我们了解了BFS的基本概念、工作原理和应用场景，并通过示例代码演示了它的实现过程。希望本文能够帮助读者更深入地理解和应用广度优先搜索算法。</p>`,14),t=[l];function p(k,e,E,r,d,g){return a(),i("div",null,t)}const y=s(h,[["render",p]]);export{o as __pageData,y as default};
