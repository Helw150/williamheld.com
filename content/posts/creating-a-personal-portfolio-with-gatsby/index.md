---
title: "Creating a Personal Portfolio with Gatsby"
date: 04/19/2017
category: tech
tags:
    - frontend
    - react
    - play
description: "Learn a little bit about how and why this site was made!"
cover: "https://camo.githubusercontent.com/5f9c7d37f3a89b6aac6e8b9fc577aa5dcf6fc8e5/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f3434324d32693068317a303532613436305333682f6761747362792d6c6f676f2e706e673f582d436c6f75644170702d56697369746f722d49643d343336343226763d6365646335633663"
---

# Why are you doing this?

As part of initiative at Quorum called "Learning Lab", each week an engineer picks a topic to teach the rest of the team about. As an intern, I struggled to think of something that I could teach the rest of the team!

Since I couldn't teach the rest of the team about Quorum, I decided to teach them something from the React world which I found interesting. Amongst my friends, the amount of time I put into my previous personal website had become a joke, especially since my analytics showed extremely minimal page views, so I decided to double down and turn it into a blog with [Gatsby](https://github.com/gatsbyjs/gatsby)...

# So, why use Gatsby?
## The answer to this question can really be broken down into two parts:
### It generates static content
Gatsby is a static site generator like [Jekyll](jekyllrb.com) or [Hugo](gohugo.io). These frameworks let you create content in the language of your choice and turn that into purely static HTML files.

To me, this is awesome for 3 big reasons:
1. It's fast
* Static sites have no database calls, so they run at light speed.
* Since the site is static, the site is fully functional without Javascript.
2. It's easy
* I feel really silly writing and running a server a blog: something which really isn't that dynamic.
* Dyanmic content immediately opens you up to all sorts of attacks, I don't want to deal with security headaches even if it's as simple as updating Wordpress regularly.
3. It's cheap
* Github pages are awesome. If I can host my site for free, I'll jump through some hoops to save a bit of cash.

### It uses React
While I use React on a daily basis, I rarely use vanilla react. This project let me leverage my knowledge of React, while still letting me practice vanilla React skills.

I suspect for many web developers, this is a huge plus for [Gatsby](https://github.com/gatsbyjs/gatsby) over something like [Hugo](gohugo.io), because they are more likely to be familiar with the framework. While [Jekyll](jekyllrb.com) is great and has a lot of investment from Github, the comfortability of React makes Gatsby worth it from my perspective.

## However, there are some downsides
### Vs. Wordpress

Gatsby is geared towards developers. In the same way that blogging used to require developer skills, Gatsby does. If you are looking to blog with ease, stick to Wordpress.

### Vs. Other Generators
Gatsby is an open-source project which is almost solely developed by [Kyle Matthews](https://github.com/KyleAMathews), so there are bugs (*My hot reloading went on the fritz frequently*). Additionally, many people in the static site generator community think that React is way overkill for most peoples purposes, so consider the complexity of your project before you jump in with Gatsby.

# Build process with Gatsby?
## Use the starter
Getting started with Gatsby is easy thanks to starter kits from the developers and community.

If you want to use the most basic one use:

```bash
git clone https://github.com/gatsbyjs/gatsby-starter-blog
cd gatsby-starter-blog
npm install
npm run dev
```

With these you'll be up and running with an extremely simple Gatsby blog.

While there are many open source examples of other websites on Gatsby's README, I recommend using the basic starter since it's the only one guaranteed to be up to dat with the newest version

## It's React dummy!
Once you are up and running, it's time to style and structure. Before you get too worried with the details of Gatsby remember **It's React Dummy**.

If you are using Gatsby, I assume you probably know a good bit of React already. If not definitely start [here](https://facebook.github.io/react/tutorial/tutorial.html), but if so Gatsby won't feel any different than any other React project you have built! You can build out your website as if the articles would be coming from a server, using components and pages.

The primary difference is that at the end of the day you have local markdown files as your data, as opposed to returned values from a server. Altogether it shouldn't be that big of a shift.

# Details of my implementation
## How do you handle Search Engine Optimization?
I'm using [react-helmet](https://github.com/nfl/react-helmet): an awesome tool from the developers at the NFL.

It's cool for all websites because it allows you to control the head of your website from *any* component you have. For a blog, this is especially important because you want people to actually access your content!

Additionally the syntax is very simple. To update the title and description from a component, you just write:
```jsx
<Helmet>
  <title>Change my title to something new</title>
  <meta name="description" content="" />
</Helmet>
```

## How do you get syntax highlighting like on the JSX above?

I'm using [Prism](http://prismjs.com/). With half a Kilobyte, I am able to get syntax highlighting for all my tech blogging need.

To wrap it together with Gatsby, all it takes is importing Prism into the `markdown-loader/index.js` file and adding a simple JSX function to Syntax Highlight.

```jsx
var highlight = function (str, lang) {
  var value;
  if (lang && Prism.languages[lang]) {
    value = Prism.highlight(str, Prism.languages[lang]);
  } else {
    value = Prism.highlight(str, Prism.languages.javascript);
  }
  return value;
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
});

module.exports = function (content) {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const result = objectAssign({}, meta.attributes, {
    body,
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};
```

This makes adding a syntax highlighted quote a breeze for any language, even the most obscure. For example here is an example in [LOLCODE](http://lolcode.org/):
````markdown
```lolcode
HAI 1.2
  CAN HAS STDIO?
  VISIBLE "HAI WORLD!!!1!"
KTHXBYE
```
````

```lolcode
HAI 1.2
  CAN HAS STDIO?
  VISIBLE "HAI WORLD!!!1!"
KTHXBYE
```

## How do you create small previews of your blog posts using Gatsby?

The great thing about markdown files is that I can put data in the top of the file, which I can use to render JSX previews across the site.

For my site I used this structure:
```markdown
---
title: "Creating a Personal Portfolio with Gatsby"
date: 2017-04-19 00:00:00 -0500
categories: Tech, Frontend, Gatsby, React, Helmet
description: "Learn a little bit about how and why this site was made!"
photo: "https://camo.githubusercontent.com/5f9c7d37f3a89b6aac6e8b9fc577aa5dcf6fc8e5/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f3434324d32693068317a303532613436305333682f6761747362792d6c6f676f2e706e673f582d436c6f75644170702d56697369746f722d49643d343336343226763d6365646335633663"
---
```

These then can all be loaded into another file and accessed through a paths data object. This allows you to make preview components easily by accessing this data object. For example, my previews are rendered like this:
```jsx
const blogPostsList = config.blogPosts.map((p) => {
  const page = find(this.props.route.pages, _p => _p.path === p);
  return {
    ...page.data,
    path: page.path,
  };
});

return(
    filteredBlogPostList.map((post, i) => (
      <article key={i} className="blog-list-item">
        <Row className="blog-list-item-row">
          <Col lg={9} md={9} sm={9} xs={12}>
            <h2 className="blog-list-item-title">
              <Link to={prefixLink(post.path)}>{post.title}</Link>
            </h2>
            <h3>{post.description}</h3>
            <p className="blog-item-footer">
              <a href={prefixLink(post.path)} className="blog-list-item-read-more">
                Read More <FontAwesome name="arrow-right" />
              </a>
              <div className="blog-meta" style={{ float: 'right' }}>
                {new Date(post.date).toLocaleDateString()}
              </div>
            </p>
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="text-center">
            <Link to={prefixLink(post.path)} className="blog-list-item-hero">
              <Image src={post.photo} className="blog-list-item-photo blog-list-container-img" />
            </Link>
          </Col>
        </Row>
      </article>
  )
```

This makes it so that every time I add a new article to my `blogPosts`, the data is automatically loaded and rendered as a new preview.

## Questions?

This site is still a work in progress as my sort of playground! Feel free to ask any questions or make any recommendations below for what I should do next.
