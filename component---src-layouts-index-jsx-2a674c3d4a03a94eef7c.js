webpackJsonp([79611799117203,60335399758886],{93:function(e,t){e.exports={layoutContext:{}}},157:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),l=o(a),i=n(165),u=o(i),c=n(93),f=o(c);t.default=function(e){return l.default.createElement(u.default,r({},e,f.default))},e.exports=t.default},161:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=o(i),c=n(23),f=o(c),s=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e={nav:{boxShadow:"0 2px 10px 0 rgba(0,0,0,.75)",padding:"1%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",background:"black"},link:{width:"20%",color:"#FFF",textDecoration:"none",textAlign:"center"},image:{width:"10%",height:"auto",backgroundImage:"/logos/logo.png",backgroundSize:"contain"}};return u.default.createElement("div",{style:e.nav},u.default.createElement(f.default,{style:e.link,to:"/blog"},"Blog"),u.default.createElement(f.default,{style:e.link,to:"/work"},"Work"),u.default.createElement("div",{style:e.image}),u.default.createElement(f.default,{style:e.link,to:"/code"},"Code"),u.default.createElement(f.default,{style:e.link,to:"/about"},"About"))},t}(u.default.Component);t.default=s,e.exports=t.default},262:function(e,t){},165:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=o(i),c=n(14),f=o(c),s=n(12),p=o(s);n(262);var d=n(161),y=o(d),b=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=p.default.pathPrefix?p.default.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),o="";if(""===n)o="Home";else if("tags/"===n)o="Tags";else if("categories/"===n)o="Categories";else if("about/"===n)o="About";else if(n.indexOf("posts"))o="Article";else if(n.indexOf("tags/")){var r=n.replace("tags/","").replace("/","").replace("-"," ");o="Tagged in "+e(r)}else if(n.indexOf("categories/")){var a=n.replace("categories/","").replace("/","").replace("-"," ");o=""+e(a)}return o},t.prototype.render=function(){var e=this.props.children;return u.default.createElement("div",null,u.default.createElement(f.default,null,u.default.createElement("title",null,p.default.siteTitle+" |  "+this.getLocalTitle()),u.default.createElement("meta",{name:"description",content:p.default.siteDescription})),u.default.createElement(y.default,null),e())},t}(u.default.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-2a674c3d4a03a94eef7c.js.map