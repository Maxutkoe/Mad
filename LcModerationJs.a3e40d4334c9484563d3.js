"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3888],{13355:function(t,n,e){e.r(n),e.d(n,{LcModerationJs:function(){return b}}),e(41539),e(81299),e(12419),e(47941),e(82526),e(57327),e(88449),e(2490),e(59849),e(38880),e(57658),e(15581),e(34514),e(54747),e(49337);var r=e(4942),o=e(15671),c=e(43144),i=e(60136),u=e(82963),p=e(61120),f=e(87363),s=e(41799),a=e(5834),l=e(47330),y=e(85893);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var w=function(t){(0,i.Z)(f,t);var n,e,r=(n=f,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,p.Z)(n);if(e){var o=(0,p.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)});function f(){return(0,o.Z)(this,f),r.apply(this,arguments)}return(0,c.Z)(f,[{key:"componentDidMount",value:function(){!a.h&&s.N&&this.appendCustomScript()}},{key:"render",value:function(){return null}},{key:"appendCustomScript",value:function(){var t=this.props,n=t.nonce,e=t.content,r=document.querySelector(".page__container");if(e&&r){var o=document.createElement("script");o.textContent="\n            (function(window, document, location, history) {\n                ".concat(e,"\n            }).apply(\n                window.proxyWindow,\n                [window.proxyWindow, window.proxyDocument, window.proxyLocation, window.proxyHistory]\n            );\n        "),o.setAttribute("nonce",n),r.appendChild(o)}}}]),f}(f.PureComponent),h=(0,l.V)(w);function b(t){return(0,y.jsx)(h,O(O({},t),{},{withLcSection:!1}))}}}]);