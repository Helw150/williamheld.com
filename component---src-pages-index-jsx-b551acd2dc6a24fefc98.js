webpackJsonp([0xc23565d713b7],{41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),c=n(16),f=r(c),p=n(8),s=r(p),d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,i=void 0,l=void 0;if(r){var c=t.frontmatter;a=c.title,o=c.description?c.description:t.excerpt,i=c.cover,l=s.default.siteUrl+s.default.pathPrefix+n}else a=s.default.siteTitle,o=s.default.siteDescription,i=s.default.siteLogo;var p="/"===s.default.pathPrefix?"":s.default.pathPrefix;i=s.default.siteUrl+p+i;var d=s.default.siteUrl+s.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:a,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:""}];return r&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:a,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:a,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:i},description:o}),u.default.createElement(f.default,null,u.default.createElement("meta",{name:"description",content:o}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?l:d}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:a}),u.default.createElement("meta",{property:"og:description",content:o}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:s.default.siteFBAppID?s.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:s.default.userTwitter?s.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:a}),u.default.createElement("meta",{name:"twitter:description",content:o}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=d,e.exports=t.default},221:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),u=r(l),c=n(16),f=r(c),p=n(60),s=r(p),d=n(41),m=r(d),y=n(8),h=r(y),g=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"index-container"},u.default.createElement(f.default,{title:h.default.siteTitle}),u.default.createElement(m.default,{postEdges:e}),u.default.createElement(s.default,{postEdges:e}))},t}(u.default.Component);t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-b551acd2dc6a24fefc98.js.map