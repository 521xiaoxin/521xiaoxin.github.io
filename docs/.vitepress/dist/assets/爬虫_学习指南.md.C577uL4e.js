import{aw as a,q as e,p as r,aS as t}from"./chunks/framework.C5MdosmZ.js";const _=JSON.parse('{"title":"【千字总结】爬虫学习指南-2024最新版","description":"","frontmatter":{},"headers":[],"relativePath":"爬虫/学习指南.md","filePath":"爬虫/学习指南.md","lastUpdated":1711678625000}'),o={name:"爬虫/学习指南.md"},n=t('<h1 id="【千字总结】爬虫学习指南-2024最新版" tabindex="-1">【千字总结】爬虫学习指南-2024最新版 <a class="header-anchor" href="#【千字总结】爬虫学习指南-2024最新版" aria-label="Permalink to &quot;【千字总结】爬虫学习指南-2024最新版&quot;">​</a></h1><p><a name="VI0bK"></a></p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><img src="https://img-blog.csdnimg.cn/img_convert/666f1fa7fe449d4aca4d3f22dac60566.png" alt="image.png"><br>如何自学爬虫？今天有一个兄弟这样问我，可以看到打了很多字，诚意肯定是很足的，也是对我的内容给予了肯定，让我非常的开心。既然难得有人问我，那我一定要好好做一个回答。 <br>我下面将要说的内容没有任何话是从网上复制粘贴的，全都是个人见解，所以也意味着可能有的小伙伴不赞同，没关系，我们可以在评论区交流一下。 <br>下面我会从下面四个方面介绍爬虫，涉及到的学科，如何学编程，网上自学优缺点，我的学习方法和建议。 <a name="zPdhn"></a></p><h2 id="涉及学科" tabindex="-1">涉及学科 <a class="header-anchor" href="#涉及学科" aria-label="Permalink to &quot;涉及学科&quot;">​</a></h2><p>爬虫是一个复合型的学科。涉及到前端基础，python。学到后面逆向还可能设计到nodejs。由于我在大一的时候浅浅学了下html，当时还是用的dreamwaver拖拖拽拽学的。最后从室友那里得知了html原来可以用代码写，学习了html，css，js，最后还学了jquery，学习之后如获至宝。其实前端基础的布局样式学了其实就可以自己拼拼凑凑很多网页了。我当时就是所有布局都用flex布局写。可以复现一切网页，当然，时间没必要浪费在这些没意义的事情上。最后延申学了下nodejs，当时还做了一个网站叫做星梦启航，大家感兴趣的可以去看看。不过大家没必要学习那么深入，可能只安装学习下语法就够了。由于我之前跟着学校的授课体系或者是延申自学过这些相关技术，所以我感觉学习爬虫的过程一马平川。 <br>为什么说涉及到的学科呢？其实涉及的学科这么多，意味着我们我们要想都精通会花费很多时间，不过好消息是我们爬虫用到的不是去用前端知识去复现网页，也不是用nodejs去写业务逻辑。我们用到的仅仅是定位网页内容，也就是你知道前端基础有关的知识即可，知道什么是html，什么是css，什么是js，常用的标签，样式，方法即可。同样的，nodejs学习只需要知道如何执行代码即可。 <a name="JgyAd"></a></p><h2 id="如何学习编程" tabindex="-1">如何学习编程 <a class="header-anchor" href="#如何学习编程" aria-label="Permalink to &quot;如何学习编程&quot;">​</a></h2><p>其实我们的问题如何学习爬虫的本质也是如何学习编程。有一句话大家肯定听过，叫算法不分语言，编程不分语言。其实我们学习的很多编程语言都是偏上层应用的，都是别人封装好的语言接口供我们调用。我们学习不同的语言就是学习不同语言的特性和语法。然后就是拼装这些接口达到我们想要的效果。 <br>尤其是学习python的时候，大量的三方库，我们只需要知道每个库是干什么的，一组装，得到我们想要的内容就可以了。比如说requests库进行网络请求获取网页源代码，lxml库进行网页解析获取我们想要的数据。然后一输出不就完了。一个基础的爬虫流程就是这样。简单的网站都可以这样解决。 <br>但是学习编程不学习算法就没有灵魂，但这里的算法不是指机器学习里的算法，是指一些小题目，比如说判断回文数，水仙花数这种。写这些题目在我们开发的时候是99%都用不到的，但是对于我们的思维的锻炼是非常好的，如果大家时间充足完全可以自己刷刷题目，也是很有趣的。 <br>还有就是编程技术更新迭代是非常快的，正如这个小伙伴所说有的视频很老了，自然教的技术栈可能也会老了，不少三方库经过这几年都会有些新的方法。比如selenium库我最近的时候发现好像不用手动安装配置webdriver了，之前最开始学的时候是还要手动查看版本，安装对应版本驱动的。这个问题的话我们就是看官方文档与利用搜索引擎。 <br>自己会用搜索引擎搜索问题是一个非常重要的技能！ <a name="TbM4e"></a></p><h2 id="自学优缺点" tabindex="-1">自学优缺点 <a class="header-anchor" href="#自学优缺点" aria-label="Permalink to &quot;自学优缺点&quot;">​</a></h2><p>对于我来说，学到的知识最开始全是在B站自学的，后续入门之后就是看官方文档，逛github，看博客，一些大佬搭建的个人博客，一些好的公众号，抖音上也有一些关注，当然还有一些别的渠道获取的学习资源。 <br>说实话，在现在这个时代，学习的途径太多了，所以只要感兴趣，到处逛逛看看也会有很多收获。 <br>自学无非就是自己找资源筛选资源，报班就是跟着别人的进度。我是倾向于自学的，因为你真正的会找资源的话这项技能是非常珍贵的，也能少走很多弯路。但是报班可能就别人直接把路给你引导好，你就很难有别的思考或者是自己经验的学习。 <a name="fE90o"></a></p><h2 id="学习方法和建议和总结" tabindex="-1">学习方法和建议和总结 <a class="header-anchor" href="#学习方法和建议和总结" aria-label="Permalink to &quot;学习方法和建议和总结&quot;">​</a></h2><p>首先是学习最主要的就是积累。日复一日，对于我来说就是关注很多B站python相关的up主，公众号，抖音也关注了很多。这样不论打开那个软件都可以学一些新的知识，开阔下见识。 <br>第二点是工欲善其事必先利其器，不是说要弄个好电脑，我的几千块的办公本用了快四年没有弄机器学习相关的几乎没咋遇到过瓶颈。而是说用上好的工具可以少走很多弯路。比如浏览器直接用谷歌浏览器，搜索引擎直接用必应，编辑器直接pycharm或者vscode，还有一堆黑科技比如视频播放器，电脑插件等都需要自己慢慢积累。 <br>学习方向找自己感兴趣的方向，web，人工智能。多尝试，兴趣是最好的老师，选择大于努力，我这个视频没有说劝大家入坑，只是分享自己学习的经验。 <br>第三点是我的建议就是自学，找一个班要到他们的教学课表，怼着上面的内容就开始自己学。或者是先找一个b站基础教学视频跟着学。遇见不会的就可以google搜素或者是问gpt，学习速度绝对嘎嘎快。 <br>第四点是：学习编程是非常注重实操的。可能你看完这个视频之后会觉得好像也没啥收获，没有那种绝对的观念绝对的引导在视频中。其实学习就是这样，你还没有学习这个技术，你永远都是在山内看山，是不会有大局的观念的，只有你新建一个html文件，敲出一个页面在浏览器打开的时候，你才会惊叹，原来如此啊。爬虫也同样如此，你没有学习的时候你肯定会对这个概念模糊不清，但当你用requests去成功请求一个网页之后，在克服一个又一个技术点后，你才会去惊叹：原来是这样啊！当然，最初期的学习你只是惊叹，原理你肯定不理解，但是无需害怕，雷总也说过，知识是网状分布的，等你学到后面的知识的时候可能前面的你突然就懂了。也有可能一些知识和现象会成为你潜移默化意识中的定理。纸上得来终觉浅，一定要实操。好，大家有好的想法也可以评论区交流探讨。</p><p><br>我呢，其实正在做一个刷题网站，帮助正在学习的小伙伴理清思路，检验成果。这个网站还处于写代码阶段，后续再介绍吧。 <br>爬虫刷题网站：<a href="https://www.yuque.com/python666/python/znxmh8x9s95l7eai" target="_blank" rel="noreferrer">爬虫百战成神</a></p>',13),s=[n];function h(l,d,i,c,p,b){return r(),e("div",null,s)}const u=a(o,[["render",h]]);export{_ as __pageData,u as default};
