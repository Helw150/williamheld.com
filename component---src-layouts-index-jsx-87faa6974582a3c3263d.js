webpackJsonp([79611799117203,60335399758886],{109:function(e,t){e.exports={layoutContext:{}}},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),l=r(a),i=n(215),u=r(i),c=n(109),f=r(c);t.default=function(e){return l.default.createElement(u.default,o({},e,f.default))},e.exports=t.default},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(48),f=r(c),s=n(454),p=r(s),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e={nav:{top:"0",position:"fixed",boxShadow:"0 2px 10px 0 rgba(0,0,0,.75)",padding:"1vh",width:"100%",height:"8vh",display:"flex",flexWrap:"wrap",justifyContent:"space-between",background:"black"},link:{display:"block",width:"20%",height:"6vh",lineHeight:"6vh",color:"#FFF",textDecoration:"none",textAlign:"center"},image:{width:"10vw",height:"auto",backgroundImage:"url("+p.default+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",color:"transparent"}};return u.default.createElement("div",{style:e.nav},u.default.createElement(f.default,{style:e.link,to:"/blog"},"Blog"),u.default.createElement("a",{style:e.link,href:"https://www.linkedin.com/in/williambarrheld/"},"Work"),u.default.createElement(f.default,{style:e.image,to:"/"},"Home"),u.default.createElement("a",{style:e.link,href:"https://github.com/helw150"},"Code"),u.default.createElement(f.default,{style:e.link,to:"/about"},"About"))},t}(u.default.Component);t.default=d,e.exports=t.default},313:function(e,t){},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(16),f=r(c),s=n(13),p=r(s);n(313);var d=n(212),h=r(d),b=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=p.default.pathPrefix?p.default.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),r="";if(""===n)r="Home";else if("tags/"===n)r="Tags";else if("categories/"===n)r="Categories";else if("about/"===n)r="About";else if(n.indexOf("posts"))r="Article";else if(n.indexOf("tags/")){var o=n.replace("tags/","").replace("/","").replace("-"," ");r="Tagged in "+e(o)}else if(n.indexOf("categories/")){var a=n.replace("categories/","").replace("/","").replace("-"," ");r=""+e(a)}return r},t.prototype.render=function(){var e=this.props.children;return u.default.createElement("div",null,u.default.createElement(f.default,null,u.default.createElement("title",null,p.default.siteTitle+" |  "+this.getLocalTitle()),u.default.createElement("meta",{name:"description",content:p.default.siteDescription})),u.default.createElement(h.default,null),u.default.createElement("div",{style:{marginTop:"8vh"}}),e())},t}(u.default.Component);t.default=b,e.exports=t.default},454:function(e,t,n){e.exports=n.p+"static/logo-48.74582b68.png"}});
//# sourceMappingURL=component---src-layouts-index-jsx-87faa6974582a3c3263d.js.map