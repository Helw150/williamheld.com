webpackJsonp([79611799117203,60335399758886],{109:function(e,t){e.exports={layoutContext:{}}},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),l=r(o),i=n(217),u=r(i),c=n(109),f=r(c);t.default=function(e){return l.default.createElement(u.default,a({},e,f.default))},e.exports=t.default},315:function(e,t){},214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(48),f=r(c),s=n(465),p=r(s);n(315);var d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e={nav:{top:"0",position:"fixed",boxShadow:"0 2px 10px 0 rgba(0,0,0,.75)",padding:"1vh",width:"100%",height:"8vh",display:"flex",flexWrap:"wrap",justifyContent:"space-between",background:"black"},image:{width:"10vw",height:"auto",backgroundImage:"url("+p.default+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",color:"transparent"}};return u.default.createElement("div",{style:e.nav},u.default.createElement(f.default,{className:"header-link",to:"/blog"},"Blog"),u.default.createElement("a",{className:"header-link",href:"https://www.linkedin.com/in/williambarrheld/"},"Work"),u.default.createElement(f.default,{style:e.image,to:"/"},"Home"),u.default.createElement("a",{className:"header-link",href:"https://github.com/helw150"},"Code"),u.default.createElement(f.default,{className:"header-link",to:"/about"},"About"))},t}(u.default.Component);t.default=d,e.exports=t.default},317:function(e,t){},217:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),c=n(16),f=r(c),s=n(8),p=r(s);n(317);var d=n(214),h=r(d),b=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=p.default.pathPrefix?p.default.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),r="";if(""===n)r="Home";else if("tags/"===n)r="Tags";else if("categories/"===n)r="Categories";else if("about/"===n)r="About";else if(n.indexOf("posts"))r="Article";else if(n.indexOf("tags/")){var a=n.replace("tags/","").replace("/","").replace("-"," ");r="Tagged in "+e(a)}else if(n.indexOf("categories/")){var o=n.replace("categories/","").replace("/","").replace("-"," ");r=""+e(o)}return r},t.prototype.render=function(){var e=this.props.children;return u.default.createElement("div",null,u.default.createElement(f.default,null,u.default.createElement("title",null,p.default.siteTitle+" |  "+this.getLocalTitle()),u.default.createElement("meta",{name:"description",content:p.default.siteDescription})),u.default.createElement(h.default,null),u.default.createElement("div",{style:{marginTop:"8vh"}}),e())},t}(u.default.Component);t.default=b,e.exports=t.default},465:function(e,t,n){e.exports=n.p+"static/logo-48.74582b68.png"}});
//# sourceMappingURL=component---src-layouts-index-jsx-ae572878a20f28430f57.js.map