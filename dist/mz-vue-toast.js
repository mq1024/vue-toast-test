!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mz-vue-toast"]=t():e["mz-vue-toast"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,n){n(7);var o=n(5)(n(1),n(6),null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={message:"",className:"",position:"middle",duration:3e3};t.default={DEFAULT_OPT:o,data:function(){return{options:{},showing:!1}},computed:{mergedOption:function(){return Object.assign({},o,this.options)},toastClass:function(){var e=[],t=this.options.className,n=this.mergedOption.position;switch(t&&("string"==typeof t&&e.push(t),Array.isArray(t)&&(e=e.concat(t))),n){case"top":e.push("top");break;case"bottom":e.push("bottom");break;default:e.push("middle")}return e.push(this.className),e.join(" ")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),s={install:function(e){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i();"string"==typeof t?n.options.message=t:n.options=t;var o=t.duration||r.a.DEFAULT_OPT.duration;return n.closed=!1,clearTimeout(n.timer),document.body.appendChild(n.$el),e.nextTick(function(){n.showing=!0,n.$el.removeEventListener("transitioned",u),n.timer=setTimeout(function(){n.closed||n.close()},o)}),n}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(r.a.DEFAULT_OPT,n);var o=e.extend(r.a),s=[],i=function(){if(s.length>0){var e=s[0];return s.splice(0,1),e}return new o({el:document.createElement("div")})},a=function(e){e&&s.push(e)},u=function(e){e.target.parentNode&&e.target.parentNode.removeChild(e.target)};o.prototype.close=function(){this.showing=!1,this.$el.addEventListener("transitionend",u),this.closed=!0,a(this)},e.toast=e.prototype.$toast=t}};"undefined"!=typeof window&&window.Vue&&(window.mzToast=s),t.default=s},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".nono-toast{position:fixed;max-width:80%;border-radius:5px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;z-index:1000;transition:opacity .3s linear}.nono-toast.middle{top:50%;left:50%;transform:translate(-50%,-50%)}.nono-toast.top{top:50px;left:50%;transform:translate(-50%)}.nono-toast.bottom{bottom:50px;left:50%;transform:translate(-50%)}.nono-toast-text{display:block;font-size:14px;text-align:middle;padding:10px 20px}.fade-enter,.fade-leave,.fade-leave-active{opacity:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){e.exports=function(e,t,n,o){var r,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var u=Object.create(a.computed||null);Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}}),a.computed=u}return{esModule:r,exports:s,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"showing"}],staticClass:"nono-toast",class:e.toastClass},[n("span",{staticClass:"nono-toast-text",domProps:{innerHTML:e._s(e.mergedOption.message||e.options.message)}})])])],1)},staticRenderFns:[]}},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(8)("3a8aacda",o,!0)},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(s(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(s(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var s=l++;o=p||(p=r()),t=i.bind(null,o,s,!1),n=i.bind(null,o,s,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function i(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var s=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(9),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=d(e,t);return o(r),function(t){for(var n=[],s=0;s<r.length;s++){var i=r[s],a=c[i.id];a.refs--,n.push(a)}t?(r=d(e,t),o(r)):r=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var s=t[r],i=s[0],a=s[1],u=s[2],d=s[3],c={id:e+":"+r,css:a,media:u,sourceMap:d};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}}])});
//# sourceMappingURL=mz-vue-toast.js.map