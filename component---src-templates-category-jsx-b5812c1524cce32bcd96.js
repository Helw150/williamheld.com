webpackJsonp([0x7600c7af1a80],{35:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=o(1),s=n(u),c=o(15),l=(n(c),o(37),o(45)),f=n(l),p=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e={margin:"0 auto",marginTop:"1vh",maxWidth:"1000px",borderTop:"1px solid #E0E0E0",borderBottom:"1px solid #E0E0E0"};return s.default.createElement("div",{style:e},this.props.postEdges.length>0?this.props.postEdges.map(function(e){return s.default.createElement(f.default,{post:e,key:e.path,style:{height:"20vh"}})}):s.default.createElement("div",{style:{color:"#BDBDBD",textAlign:"center",fontSize:"8vh"}},"No articles match your search"))},t}(s.default.Component);t.default=p,e.exports=t.default},160:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=o(1),s=n(u),c=o(13),l=n(c),f=o(35),p=n(f),d=o(5),h=n(d),y=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return s.default.createElement("div",{className:"category-container"},s.default.createElement(l.default,{title:'Posts in category "'+e+'" | '+h.default.siteTitle}),s.default.createElement(p.default,{postEdges:t}))},t}(s.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-jsx-b5812c1524cce32bcd96.js.map