webpackJsonp([0xa6cd3c51205b],{35:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),s=o(i),l=n(15),c=(o(l),n(37),n(45)),f=o(c),p=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e={margin:"0 auto",marginTop:"1vh",maxWidth:"1000px",borderTop:"1px solid #E0E0E0",borderBottom:"1px solid #E0E0E0"};return s.default.createElement("div",{style:e},this.props.postEdges.length>0?this.props.postEdges.map(function(e){return s.default.createElement(f.default,{post:e,key:e.path,style:{height:"20vh"}})}):s.default.createElement("div",{style:{color:"#BDBDBD",textAlign:"center",fontSize:"8vh"}},"No articles match your search"))},t}(s.default.Component);t.default=p,e.exports=t.default},162:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),s=o(i),l=n(13),c=o(l),f=n(35),p=o(f),d=n(5),h=o(d),y=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=this.props.data.allMarkdownRemark.edges;return s.default.createElement("div",{className:"tag-container"},s.default.createElement(c.default,{title:'Posts tagged as "'+e+'" | '+h.default.siteTitle}),s.default.createElement(p.default,{postEdges:t}))},t}(s.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-563dfa8af0a79595f5a3.js.map