webpackJsonp([0xc23565d713b7],{149:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(15),f=(r(c),function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.repos.edges.map(function(e){return e.node});return u.default.createElement("div",{className:"github-feed"},e.map(function(e){return u.default.createElement("div",{className:"github-post",style:{height:"33%"}},u.default.createElement("h3",{style:{fontSize:"2.5vh",margin:"auto",marginTop:8,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},u.default.createElement("a",{href:e.url},e.name)),u.default.createElement("div",{style:{fontSize:"1.5vh",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",borderBottom:"1px dotted #BDBDBD"}},u.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},e.description),e.languages.edges.map(function(e){return u.default.createElement("span",{style:{color:e.node.color,marginRight:"3px",filter:"brightness(65%)"}},e.node.name)})))}))},t}(u.default.Component));t.default=f,e.exports=t.default},36:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(13),f=r(c),s=n(5),p=r(s),d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,l=void 0,i=void 0;if(r){var c=t.frontmatter;a=c.title,o=c.description?c.description:t.excerpt,l=c.cover,i=p.default.siteUrl+p.default.pathPrefix+n}else a=p.default.siteTitle,o=p.default.siteDescription,l=p.default.siteLogo;var s="/"===p.default.pathPrefix?"":p.default.pathPrefix;l=p.default.siteUrl+s+l;var d=p.default.siteUrl+p.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:a,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:""}];return r&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:a,image:l}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:a,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:l},description:o}),u.default.createElement(f.default,null,u.default.createElement("meta",{name:"description",content:o}),u.default.createElement("meta",{name:"image",content:l}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?i:d}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:a}),u.default.createElement("meta",{property:"og:description",content:o}),u.default.createElement("meta",{property:"og:image",content:l}),u.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:a}),u.default.createElement("meta",{name:"twitter:description",content:o}),u.default.createElement("meta",{name:"twitter:image",content:l}))},t}(i.Component);t.default=d,e.exports=t.default},159:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),u=r(i),c=n(13),f=r(c),s=n(45),p=r(s),d=n(36),m=r(d),h=n(46),y=r(h),w=n(149),g=r(w),E=n(37),b=n(5),v=r(b),_=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e={content:{display:"flex",flexWrap:"wrap",alignContent:"flex-start",justifyContent:"space-evenly",height:"92vh",overflow:"hidden"},header:{height:"50vh",marginBottom:0},blog:{width:"45vw"},code:{width:"25vw"},work:{width:"25vw"}},t=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"index-container"},u.default.createElement(f.default,{title:v.default.siteTitle}),u.default.createElement(m.default,{postEdges:t}),u.default.createElement("div",{className:"index-content",style:e.content},u.default.createElement(y.default,{style:e.header}),u.default.createElement("div",{style:e.blog},u.default.createElement("h2",null,"Newest Blog Post"),u.default.createElement(p.default,{post:(0,E.getPostList)(t)[0],style:e.blog})),u.default.createElement("div",{style:e.work},u.default.createElement("h2",null,"Current Work")),u.default.createElement("div",{style:e.code},u.default.createElement("h2",null,"Recent Code"),u.default.createElement(g.default,{repos:this.props.data.allGithubRepositories}))))},t}(u.default.Component);t.default=_;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-08d3f4beb7717f4d5748.js.map