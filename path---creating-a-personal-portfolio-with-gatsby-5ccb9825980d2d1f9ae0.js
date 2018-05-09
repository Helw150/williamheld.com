webpackJsonp([0x818539027f34],{314:function(n,a){n.exports={data:{markdownRemark:{html:'<h2 id="why-are-you-doing-this"><a href="#why-are-you-doing-this" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why are you doing this?</h2>\n<p>As part of initiative at Quorum called "Learning Lab", each week an engineer picks a topic to teach the rest of the team about. As an intern, I struggled to think of something that I could teach the rest of the team!</p>\n<p>Since I couldn\'t teach the rest of the team about Quorum, I decided to teach them something from the React world which I found interesting. Amongst my friends, the amount of time I put into my previous personal website had become a joke, especially since my analytics showed extremely minimal page views, so I decided to double down and turn it into a blog with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>...</p>\n<h2 id="so-why-use-gatsby"><a href="#so-why-use-gatsby" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So, why use Gatsby?</h2>\n<h3 id="the-answer-to-this-question-can-really-be-broken-down-into-two-parts"><a href="#the-answer-to-this-question-can-really-be-broken-down-into-two-parts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The answer to this question can really be broken down into two parts:</h3>\n<h4 id="it-generates-static-content"><a href="#it-generates-static-content" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>It generates static content</h4>\n<p>Gatsby is a static site generator like <a href="jekyllrb.com">Jekyll</a> or <a href="gohugo.io">Hugo</a>. These frameworks let you create content in the language of your choice and turn that into purely static HTML files.</p>\n<p>To me, this is awesome for 3 big reasons:</p>\n<ol>\n<li>It\'s fast</li>\n<li>Static sites have no database calls, so they run at light speed.</li>\n<li>Since the site is static, the site is fully functional without Javascript.</li>\n<li>It\'s easy</li>\n<li>I feel really silly writing and running a server a blog: something which really isn\'t that dynamic.</li>\n<li>Dyanmic content immediately opens you up to all sorts of attacks, I don\'t want to deal with security headaches even if it\'s as simple as updating Wordpress regularly.</li>\n<li>It\'s cheap</li>\n<li>Github pages are awesome. If I can host my site for free, I\'ll jump through some hoops to save a bit of cash.</li>\n</ol>\n<h4 id="it-uses-react"><a href="#it-uses-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>It uses React</h4>\n<p>While I use React on a daily basis, I rarely use vanilla react. This project let me leverage my knowledge of React, while still letting me practice vanilla React skills.</p>\n<p>I suspect for many web developers, this is a huge plus for <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> over something like <a href="gohugo.io">Hugo</a>, because they are more likely to be familiar with the framework. While <a href="jekyllrb.com">Jekyll</a> is great and has a lot of investment from Github, the comfortability of React makes Gatsby worth it from my perspective.</p>\n<h3 id="however-there-are-some-downsides"><a href="#however-there-are-some-downsides" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>However, there are some downsides</h3>\n<h4 id="vs-wordpress"><a href="#vs-wordpress" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vs. Wordpress</h4>\n<p>Gatsby is geared towards developers. In the same way that blogging used to require developer skills, Gatsby does. If you are looking to blog with ease, stick to Wordpress.</p>\n<h4 id="vs-other-generators"><a href="#vs-other-generators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vs. Other Generators</h4>\n<p>Gatsby is an open-source project which is almost solely developed by <a href="https://github.com/KyleAMathews">Kyle Matthews</a>, so there are bugs (<em>My hot reloading went on the fritz frequently</em>). Additionally, many people in the static site generator community think that React is way overkill for most peoples purposes, so consider the complexity of your project before you jump in with Gatsby.</p>\n<h2 id="build-process-with-gatsby"><a href="#build-process-with-gatsby" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build process with Gatsby?</h2>\n<h3 id="use-the-starter"><a href="#use-the-starter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use the starter</h3>\n<p>Getting started with Gatsby is easy thanks to starter kits from the developers and community.</p>\n<p>If you want to use the most basic one use:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone https://github.com/gatsbyjs/gatsby-starter-blog\n<span class="token function">cd</span> gatsby-starter-blog\n<span class="token function">npm</span> <span class="token function">install</span>\n<span class="token function">npm</span> run dev</code></pre>\n      </div>\n<p>With these you\'ll be up and running with an extremely simple Gatsby blog.</p>\n<p>While there are many open source examples of other websites on Gatsby\'s README, I recommend using the basic starter since it\'s the only one guaranteed to be up to dat with the newest version</p>\n<h3 id="its-react-dummy"><a href="#its-react-dummy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>It\'s React dummy!</h3>\n<p>Once you are up and running, it\'s time to style and structure. Before you get too worried with the details of Gatsby remember <strong>It\'s React Dummy</strong>.</p>\n<p>If you are using Gatsby, I assume you probably know a good bit of React already. If not definitely start <a href="https://facebook.github.io/react/tutorial/tutorial.html">here</a>, but if so Gatsby won\'t feel any different than any other React project you have built! You can build out your website as if the articles would be coming from a server, using components and pages.</p>\n<p>The primary difference is that at the end of the day you have local markdown files as your data, as opposed to returned values from a server. Altogether it shouldn\'t be that big of a shift.</p>\n<h2 id="details-of-my-implementation"><a href="#details-of-my-implementation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Details of my implementation</h2>\n<h3 id="how-do-you-handle-search-engine-optimization"><a href="#how-do-you-handle-search-engine-optimization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do you handle Search Engine Optimization?</h3>\n<p>I\'m using <a href="https://github.com/nfl/react-helmet">react-helmet</a>: an awesome tool from the developers at the NFL.</p>\n<p>It\'s cool for all websites because it allows you to control the head of your website from <em>any</em> component you have. For a blog, this is especially important because you want people to actually access your content!</p>\n<p>Additionally the syntax is very simple. To update the title and description from a component, you just write:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Helmet</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Change my title to something <span class="token keyword">new</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Helmet</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h3 id="how-do-you-get-syntax-highlighting-like-on-the-jsx-above"><a href="#how-do-you-get-syntax-highlighting-like-on-the-jsx-above" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do you get syntax highlighting like on the JSX above?</h3>\n<p>I\'m using <a href="http://prismjs.com/">Prism</a>. With half a Kilobyte, I am able to get syntax highlighting for all my tech blogging need.</p>\n<p>To wrap it together with Gatsby, all it takes is importing Prism into the <code class="language-text">markdown-loader/index.js</code> file and adding a simple JSX function to Syntax Highlight.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">var</span> <span class="token function-variable function">highlight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>str<span class="token punctuation">,</span> lang<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> value<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">&amp;&amp;</span> Prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    value <span class="token operator">=</span> Prism<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> Prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    value <span class="token operator">=</span> Prism<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> Prism<span class="token punctuation">.</span>languages<span class="token punctuation">.</span>javascript<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> md <span class="token operator">=</span> <span class="token function">markdownIt</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  html<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  linkify<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  typographer<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  highlight<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cacheable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> meta <span class="token operator">=</span> <span class="token function">frontMatter</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> body <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>meta<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">objectAssign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> meta<span class="token punctuation">.</span>attributes<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    body<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> result<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`module.exports = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This makes adding a syntax highlighted quote a breeze for any language, even the most obscure. For example here is an example in <a href="http://lolcode.org/">LOLCODE</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code class="language-markdown">```lolcode\nHAI 1.2\n  CAN HAS STDIO?\n  VISIBLE "HAI WORLD!!!1!"\nKTHXBYE\n```</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-lolcode"><code class="language-lolcode"><span class="token keyword">HAI</span> <span class="token number">1.2</span>\n  CAN HAS STDIO?\n  <span class="token keyword">VISIBLE</span> <span class="token string">"HAI WORLD!!!1!"</span>\n<span class="token keyword">KTHXBYE</span></code></pre>\n      </div>\n<h3 id="how-do-you-create-small-previews-of-your-blog-posts-using-gatsby"><a href="#how-do-you-create-small-previews-of-your-blog-posts-using-gatsby" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do you create small previews of your blog posts using Gatsby?</h3>\n<p>The great thing about markdown files is that I can put data in the top of the file, which I can use to render JSX previews across the site.</p>\n<p>For my site I used this structure:</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code class="language-markdown"><span class="token hr punctuation">---</span>\ntitle: "Creating a Personal Portfolio with Gatsby"\ndate: 2017-04-19 00:00:00 -0500\ncategories: Tech, Frontend, Gatsby, React, Helmet\ndescription: "Learn a little bit about how and why this site was made!"\n<span class="token title important">photo: "https://camo.githubusercontent.com/5f9c7d37f3a89b6aac6e8b9fc577aa5dcf6fc8e5/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f3434324d32693068317a303532613436305333682f6761747362792d6c6f676f2e706e673f582d436c6f75644170702d56697369746f722d49643d343336343226763d6365646335633663"\n<span class="token punctuation">---</span></span></code></pre>\n      </div>\n<p>These then can all be loaded into another file and accessed through a paths data object. This allows you to make preview components easily by accessing this data object. For example, my previews are rendered like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> blogPostsList <span class="token operator">=</span> config<span class="token punctuation">.</span>blogPosts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>route<span class="token punctuation">.</span>pages<span class="token punctuation">,</span> _p <span class="token operator">=></span> _p<span class="token punctuation">.</span>path <span class="token operator">===</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>page<span class="token punctuation">.</span>data<span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> page<span class="token punctuation">.</span>path<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">return</span><span class="token punctuation">(</span>\n    filteredBlogPostList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>post<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-list-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-list-item-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span></span> <span class="token attr-name">md</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span></span> <span class="token attr-name">sm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span></span> <span class="token attr-name">xs</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-list-item-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">prefixLink</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-item-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">prefixLink</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-list-item-read-more<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                Read More <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FontAwesome</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-meta<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> float<span class="token punctuation">:</span> <span class="token string">\'right\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">lg</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">md</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">sm</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">xs</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">prefixLink</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-list-item-hero<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>photo<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-list-item-photo blog-list-container-img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span></code></pre>\n      </div>\n<p>This makes it so that every time I add a new article to my <code class="language-text">blogPosts</code>, the data is automatically loaded and rendered as a new preview.</p>\n<h3 id="questions"><a href="#questions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Questions?</h3>\n<p>This site is still a work in progress as my sort of playground! Feel free to ask any questions or make any recommendations below for what I should do next.</p>',
timeToRead:7,excerpt:'Why are you doing this? As part of initiative at Quorum called "Learning Lab", each week an engineer picks a topic to teach the rest of the…',frontmatter:{title:"Creating a Personal Portfolio with Gatsby",cover:"/williamheld.com/images/gatsby.png",date:"04/19/2017",category:"tech",tags:["frontend","react","play"],description:"Learn a little bit about how and why this site was made!"},fields:{slug:"/creating-a-personal-portfolio-with-gatsby"}}},pathContext:{slug:"/creating-a-personal-portfolio-with-gatsby"}}}});
//# sourceMappingURL=path---creating-a-personal-portfolio-with-gatsby-5ccb9825980d2d1f9ae0.js.map