webpackJsonp([0xa93941ba78cd],{44:function(e,t){},36:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),s=n(13),c=r(s);n(44);var f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement(c.default,{to:this.props.post.path,className:"blog-list-item",style:this.props.style},u.default.createElement("div",{className:"header"},u.default.createElement("span",null,this.props.post.title)),u.default.createElement("span",{className:"description"},this.props.post.excerpt),u.default.createElement("img",{src:this.props.post.cover,alt:"Simple Graphic related to "+this.props.post.tags.join(",  "),className:"image"}),u.default.createElement("div",{className:"follow"},"Read More"),u.default.createElement("span",{className:"date"},this.props.post.date))},t}(u.default.Component);t.default=f,e.exports=t.default},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),s=n(13),c=(r(s),n(18),n(36)),f=r(c),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e={margin:"0 auto",marginTop:"1vh",maxWidth:"1000px",borderTop:"1px solid #E0E0E0",borderBottom:"1px solid #E0E0E0"};return u.default.createElement("div",{style:e},this.props.postEdges.length>0?this.props.postEdges.map(function(e){return u.default.createElement(f.default,{post:e,key:e.path,style:{height:"20vh"}})}):u.default.createElement("div",{style:{color:"#BDBDBD",textAlign:"center",fontSize:"8vh"}},"No articles match your search"))},t}(u.default.Component);t.default=p,e.exports=t.default},37:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),s=n(15),c=r(s),f=n(5),p=r(f),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,o=void 0,a=void 0,i=void 0,l=void 0;if(r){var s=t.frontmatter;o=s.title,a=s.description?s.description:t.excerpt,i=s.cover,l=p.default.siteUrl+p.default.pathPrefix+n}else o=p.default.siteTitle,a=p.default.siteDescription,i=p.default.siteLogo;var f="/"===p.default.pathPrefix?"":p.default.pathPrefix;i=p.default.siteUrl+f+i;var d=p.default.siteUrl+p.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:""}];return r&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:"",headline:o,image:{"@type":"ImageObject",url:i},description:a}),u.default.createElement(c.default,null,u.default.createElement("meta",{name:"description",content:a}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?l:d}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:o}),u.default.createElement("meta",{property:"og:description",content:a}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:o}),u.default.createElement("meta",{name:"twitter:description",content:a}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=d,e.exports=t.default},153:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),s=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.onChange=function(e){return r.props.onChange(e.target.value)},r}return i(t,e),t.prototype.render=function(){var e={fontSize:"14px",maxWidth:"400px",width:"80%",borderRadius:"25px",padding:"1vh",caretColor:"#9E9E9E",border:"none",outlineWidth:0,textOverflow:"ellipsis"};return u.default.createElement("input",{style:e,type:"text",placeholder:"Have something in mind? Search Here!",onChange:this.onChange})},t}(l.Component);t.default=s,e.exports=t.default},159:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),u=r(l),s=n(15),c=r(s),f=n(62),p=r(f),d=n(46),m=r(d),h=n(153),y=r(h),E=n(37),b=r(E),g=n(18),w=n(5),_=r(w),v=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.searchArticles=function(e){return r.setState({searchTerm:e})},r.state={searchTerm:""},r}return i(t,e),t.prototype.filterArticles=function(e){var t=(0,g.getPostList)(e),n=this.state.searchTerm.toLowerCase(),r=t.filter(function(e){return~e.title.toLowerCase().indexOf(n)||e.tags.find(function(e){return~e.toLowerCase().indexOf(n)})});return r},t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"blog-container"},u.default.createElement(c.default,{title:_.default.siteTitle}),u.default.createElement(b.default,{postEdges:e}),u.default.createElement(m.default,null,u.default.createElement("h1",null,"Blog"),u.default.createElement(y.default,{onChange:this.searchArticles})),u.default.createElement(p.default,{postEdges:this.filterArticles(e)}))},t}(u.default.Component);t.default=v;t.pageQuery="** extracted graphql fragment **"},18:function(e,t){"use strict";t.__esModule=!0;t.getPostList=function(e){var t=[];return e.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t}}});
//# sourceMappingURL=component---src-pages-blog-jsx-6f2eb1013f02d2e59926.js.map