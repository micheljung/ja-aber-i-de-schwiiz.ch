(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,t,r){e.exports=r("nOHt")},"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),o=r("lwsE"),i=r("W8MJ");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var l,d=(l=r("q1tI"))&&l.__esModule?l:{default:l},f=r("8L3h"),h=r("jwwS");var p=[],m=[],g=!1;function b(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function v(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=b(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function w(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function y(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:w,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new x(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!g&&"function"===typeof r.webpack){var i=r.webpack();m.push((function(e){var t,r=u(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){o();var i=d.default.useContext(h.LoadableContext),a=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?r.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}var x=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return y(b,e)}function O(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(v,e)},j.preloadAll=function(){return new Promise((function(e,t){O(p).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return g=!0,t()};O(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var k=j;t.default=k},MKm5:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return v})),r.d(t,"default",(function(){return w}));var n,o=r("nKUr"),i=r("q1tI"),a=r("aIVY");function c(e){var t=e.icon,r=(e.title,e.description,e.url);return Object(o.jsx)("a",{href:r,children:Object(o.jsx)("img",{className:"h-12 w-12",src:t,alt:"Instagram Logo"})},r)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s,l=function(e){return i.createElement("svg",u({viewBox:"0 0 24 43",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=i.createElement("path",{d:"M2.574 40.353L21.427 21.5 2.574 2.647",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5})))};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){return i.createElement("svg",d({viewBox:"0 0 64.398 50.886",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=i.createElement("g",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeWidth:5},i.createElement("path",{d:"M2.5 9.623h16.009l8.65 10.37m9.064 10.864l8.65 10.37h17.024M2.5 41.264h16.009L44.872 9.659h17.024"}),i.createElement("path",{d:"M54.737 16.818l7.16-7.16-7.16-7.158M54.738 48.386l7.16-7.16-7.16-7.158",strokeLinejoin:"round"}))))},h=r("20a2");function p(e){var t=e.comicId,r=Object(h.useRouter)();function n(e){var n=Object.getOwnPropertyNames(a.a),o=n.indexOf(t),i=n[Math.max(0,(o+e)%n.length)];r.push(i,void 0)}return Object(o.jsxs)("div",{className:"flex flex-row justify-center gap-4 content-center",children:[Object(o.jsx)("button",{className:"h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2",onClick:function(){return n(-1)},children:Object(o.jsx)(l,{className:"w-4 h-4",transform:"scale(-1,1)"})}),Object(o.jsx)("button",{className:"h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded-md px-3",onClick:function(){return function(){var e=Object.getOwnPropertyNames(a.a),t=e[Math.floor(Math.random()*e.length)];r.push(t,void 0)}()},children:Object(o.jsx)(f,{className:"w-6 h-6"})}),Object(o.jsx)("button",{className:"h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2",onClick:function(){return n(1)},children:Object(o.jsx)("div",{className:"w-4 self-center",children:Object(o.jsx)(l,{className:"w-4 h-4"})})})]})}function m(){return Object(o.jsx)("div",{className:"p-4 dark:text-gray-300",children:Object(o.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/",children:Object(o.jsx)("img",{alt:"Creative Commons Lizenzvertrag",src:"/icons/by-nc.svg"})})})}var g=r("vAVA");function b(e){var t=e.comicElementId;var r=function(e){var r=e.scale,n="".concat(1024*r,"px");return Object(o.jsxs)("button",{className:"flex-grow rounded bg-white dark:bg-transparent border dark:border-transparent dark:border-gray-700 py-2 px-2",onClick:function(){return function(e){var r=document.getElementById("".concat(t));g.saveSvgAsPng(r,"".concat(t,"-x").concat(e,".png"),{scale:e,backgroundColor:"white"})}(r)},children:[Object(o.jsx)("span",{className:"text-md",children:"PNG"})," ",Object(o.jsx)("span",{className:"text-xs",children:n})]})};return Object(o.jsxs)("div",{className:"flex flex-wrap gap-2 items-stretch mx-auto",children:[Object(o.jsx)(r,{scale:.5}),Object(o.jsx)(r,{scale:1}),Object(o.jsx)(r,{scale:2})]})}var v=!0;function w(e){var t=e.id,r=void 0===t?"1":t,n="comic-".concat(r);return Object(o.jsxs)("div",{className:"",children:[Object(o.jsxs)("main",{className:"grid grid-cols-1 gap-4",children:[Object(o.jsx)(p,{comicId:r}),Object(o.jsx)(a.b,{id:r}),Object(o.jsx)(p,{comicId:r}),Object(o.jsx)(b,{comicElementId:n}),Object(o.jsxs)("div",{className:"flex flex-wrap gap-2 mx-1 justify-center",children:[Object(o.jsx)(c,{icon:"/icons/instagram.svg",title:"Instagram",description:"Folge mir auf Instagram",url:"https://www.instagram.com/ja.aber.i.de.schwiiz"}),Object(o.jsx)(c,{icon:"/icons/facebook.svg",title:"Facebook",description:"Folge mir auf Facebook",url:"https://www.facebook.com/ja.aber.i.de.schwiiz"}),Object(o.jsx)(c,{icon:"/icons/youtube.svg",title:"YouTube",description:"Abonniere mich auf YouTube",url:"https://www.youtube.com/channel/UC9O3PwuTOpMBfOA_7bgabZQ"})]})]}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)(m,{})}),Object(o.jsxs)("div",{className:"text-center text-gray-400",children:["Quelltext auf\xa0",Object(o.jsx)("a",{href:"https://github.com/micheljung/ja-aber-i-de-schwiiz.ch",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})]})}},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));if(n=i(i({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=a.default.Map;var o={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};c(r("q1tI"));var a=c(r("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},aIVY:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c}));var n=r("nKUr"),o=r("Vvt1"),i=r.n(o),a=(r("q1tI"),{1:{title:"Kein Leid verursachen zu wollen, ist extrem"}});function c(e){var t=e.id,o=e.showTitle,c=void 0===o||o,u=function(e){switch(e){case"1":return i()((function(){return r.e(11).then(r.bind(null,"GGBL"))}),{loadableGenerated:{webpack:function(){return["GGBL"]},modules:["../components/ComicComponent.js -> ../comics/1.svg"]}});default:throw"Unknown ID: "+e}}(t),s=a[t].title;return Object(n.jsxs)("div",{className:"grid grid-col-1 gap-4 w-auto mx-1",children:[c&&Object(n.jsx)("h1",{className:"text-md xl:text-xl text-center font-bold",children:s}),Object(n.jsx)(u,{id:"comic-".concat(t),className:"mx-auto border border-black dark:border-gray-300 text-black dark:text-gray-300 xl:w-4/5 "})]})}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},vAVA:function(e,t,r){"use strict";var n;!function(){var r=t||{}||this||window;void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n),r.default=r;var o="http://www.w3.org/2000/xmlns/",i="http://www.w3.org/2000/svg",a=/url\(["']?(.+?)["']?\)/,c={woff2:"font/woff2",woff:"font/woff",otf:"application/x-font-opentype",ttf:"application/x-font-ttf",eot:"application/vnd.ms-fontobject",sfnt:"application/font-sfnt",svg:"image/svg+xml"},u=function(e){return e instanceof HTMLElement||e instanceof SVGElement},s=function(e){if(!u(e))throw new Error("an HTMLElement or SVGElement is required; got "+e)},l=function(e){return new Promise((function(t,r){u(e)?t(e):r(new Error("an HTMLElement or SVGElement is required; got "+e))}))},d=function(e){var t=Object.keys(c).filter((function(t){return e.indexOf("."+t)>0})).map((function(e){return c[e]}));return t?t[0]:(console.error("Unknown font format for "+e+". Fonts may not be working correctly."),"application/octet-stream")},f=function(e,t,r){var n=e.viewBox&&e.viewBox.baseVal&&e.viewBox.baseVal[r]||null!==t.getAttribute(r)&&!t.getAttribute(r).match(/%$/)&&parseInt(t.getAttribute(r))||e.getBoundingClientRect()[r]||parseInt(t.style[r])||parseInt(window.getComputedStyle(e).getPropertyValue(r));return"undefined"===typeof n||null===n||isNaN(parseFloat(n))?0:n},h=function(e){for(var t=window.atob(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),o=new Uint8Array(n),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([n],{type:r})},p=function(e){return Promise.all(Array.from(e.querySelectorAll("image")).map((function(e){var t,r=e.getAttributeNS("http://www.w3.org/1999/xlink","href")||e.getAttribute("href");return r?((t=r)&&0===t.lastIndexOf("http",0)&&-1===t.lastIndexOf(window.location.host)&&(r+=(-1===r.indexOf("?")?"?":"&")+"t="+(new Date).valueOf()),new Promise((function(t,n){var o=document.createElement("canvas"),i=new Image;i.crossOrigin="anonymous",i.src=r,i.onerror=function(){return n(new Error("Could not load "+r))},i.onload=function(){o.width=i.width,o.height=i.height,o.getContext("2d").drawImage(i,0,0),e.setAttributeNS("http://www.w3.org/1999/xlink","href",o.toDataURL("image/png")),t(!0)}}))):Promise.resolve(null)})))},m={},g=function(e){return Promise.all(e.map((function(e){return new Promise((function(t,r){if(m[e.url])return t(m[e.url]);var n=new XMLHttpRequest;n.addEventListener("load",(function(){var r=function(e){for(var t="",r=new Uint8Array(e),n=0;n<r.byteLength;n++)t+=String.fromCharCode(r[n]);return window.btoa(t)}(n.response),o=e.text.replace(a,'url("data:'+e.format+";base64,"+r+'")')+"\n";m[e.url]=o,t(o)})),n.addEventListener("error",(function(r){console.warn("Failed to load font from: "+e.url,r),m[e.url]=null,t(null)})),n.addEventListener("abort",(function(r){console.warn("Aborted loading font from: "+e.url,r),t(null)})),n.open("GET",e.url),n.responseType="arraybuffer",n.send()}))}))).then((function(e){return e.filter((function(e){return e})).join("")}))},b=null,v=function(e,t){var r=t||{},n=r.selectorRemap,o=r.modifyStyle,i=r.modifyCss,c=r.fonts,u=r.excludeUnusedCss,s=i||function(e,t){return(n?n(e):e)+"{"+(o?o(t):t)+"}\n"},l=[],f="undefined"===typeof c,h=c||[];return(b||(b=Array.from(document.styleSheets).map((function(e){try{return{rules:e.cssRules,href:e.href}}catch(t){return console.warn("Stylesheet could not be loaded: "+e.href,t),{}}})))).forEach((function(t){var r=t.rules,n=t.href;r&&Array.from(r).forEach((function(t){if("undefined"!=typeof t.style)if(function(e,t){if(t)try{return e.querySelector(t)||e.parentNode&&e.parentNode.querySelector(t)}catch(r){console.warn('Invalid CSS selector "'+t+'"',r)}}(e,t.selectorText))l.push(s(t.selectorText,t.style.cssText));else if(f&&t.cssText.match(/^@font-face/)){var r=function(e,t){var r=e.cssText.match(a),n=r&&r[1]||"";if(n&&!n.match(/^data:/)&&"about:blank"!==n){var o=n.startsWith("../")?t+"/../"+n:n.startsWith("./")?t+"/."+n:n;return{text:e.cssText,format:d(o),url:o}}}(t,n);r&&h.push(r)}else u||l.push(t.cssText)}))})),g(h).then((function(e){return l.join("\n")+e}))},w=function(){if(!navigator.msSaveOrOpenBlob&&!("download"in document.createElement("a")))return{popup:window.open()}};r.prepareSvg=function(e,t,r){s(e);var n=t||{},a=n.left,c=void 0===a?0:a,u=n.top,l=void 0===u?0:u,d=n.width,h=n.height,m=n.scale,g=void 0===m?1:m,b=n.responsive,w=void 0!==b&&b,y=n.excludeCss,x=void 0!==y&&y;return p(e).then((function(){var n=e.cloneNode(!0);n.style.backgroundColor=(t||{}).backgroundColor||e.style.backgroundColor;var a=function(e,t,r,n){if("svg"===e.tagName)return{width:r||f(e,t,"width"),height:n||f(e,t,"height")};if(e.getBBox){var o=e.getBBox(),i=o.x,a=o.y;return{width:i+o.width,height:a+o.height}}}(e,n,d,h),u=a.width,s=a.height;if("svg"!==e.tagName){if(!e.getBBox)return void console.error("Attempted to render non-SVG element",e);null!=n.getAttribute("transform")&&n.setAttribute("transform",n.getAttribute("transform").replace(/translate\(.*?\)/,""));var p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.appendChild(n),n=p}if(n.setAttribute("version","1.1"),n.setAttribute("viewBox",[c,l,u,s].join(" ")),n.getAttribute("xmlns")||n.setAttributeNS(o,"xmlns",i),n.getAttribute("xmlns:xlink")||n.setAttributeNS(o,"xmlns:xlink","http://www.w3.org/1999/xlink"),w?(n.removeAttribute("width"),n.removeAttribute("height"),n.setAttribute("preserveAspectRatio","xMinYMin meet")):(n.setAttribute("width",u*g),n.setAttribute("height",s*g)),Array.from(n.querySelectorAll("foreignObject > *")).forEach((function(e){e.setAttributeNS(o,"xmlns","svg"===e.tagName?i:"http://www.w3.org/1999/xhtml")})),!x)return v(e,t).then((function(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML="<![CDATA[\n"+e+"\n]]>";var o=document.createElement("defs");o.appendChild(t),n.insertBefore(o,n.firstChild);var i=document.createElement("div");i.appendChild(n);var a=i.innerHTML.replace(/NS\d+:href/gi,'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');if("function"!==typeof r)return{src:a,width:u,height:s};r(a,u,s)}));var m=document.createElement("div");m.appendChild(n);var b=m.innerHTML;if("function"!==typeof r)return{src:b,width:u,height:s};r(b,u,s)}))},r.svgAsDataUri=function(e,t,n){return s(e),r.prepareSvg(e,t).then((function(e){var t=e.src,r=e.width,o=e.height,i="data:image/svg+xml;base64,"+window.btoa(decodeURIComponent(encodeURIComponent('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>'+t).replace(/%([0-9A-F]{2})/g,(function(e,t){var r=String.fromCharCode("0x"+t);return"%"===r?"%25":r}))));return"function"===typeof n&&n(i,r,o),i}))},r.svgAsPngUri=function(e,t,n){s(e);var o=t||{},i=o.encoderType,a=void 0===i?"image/png":i,c=o.encoderOptions,u=void 0===c?.8:c,l=o.canvg,d=function(e){var t=e.src,r=e.width,o=e.height,i=document.createElement("canvas"),c=i.getContext("2d"),s=window.devicePixelRatio||1;i.width=r*s,i.height=o*s,i.style.width=i.width+"px",i.style.height=i.height+"px",c.setTransform(s,0,0,s,0,0),l?l(i,t):c.drawImage(t,0,0);var d=void 0;try{d=i.toDataURL(a,u)}catch(f){if("undefined"!==typeof SecurityError&&f instanceof SecurityError||"SecurityError"===f.name)return void console.error("Rendered SVG images cannot be downloaded in this browser.");throw f}return"function"===typeof n&&n(d,i.width,i.height),Promise.resolve(d)};return l?r.prepareSvg(e,t).then(d):r.svgAsDataUri(e,t).then((function(e){return new Promise((function(t,r){var n=new Image;n.onload=function(){return t(d({src:n,width:n.width,height:n.height}))},n.onerror=function(){r("There was an error loading the data URI as an image on the following SVG\n"+window.atob(e.slice(26))+"Open the following link to see browser's diagnosis\n"+e)},n.src=e}))}))},r.download=function(e,t,r){if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(h(t),e);else{var n=document.createElement("a");if("download"in n){n.download=e,n.style.display="none",document.body.appendChild(n);try{var o=h(t),i=URL.createObjectURL(o);n.href=i,n.onclick=function(){return requestAnimationFrame((function(){return URL.revokeObjectURL(i)}))}}catch(a){console.error(a),console.warn("Error while getting object URL. Falling back to string URL."),n.href=t}n.click(),document.body.removeChild(n)}else r&&r.popup&&(r.popup.document.title=e,r.popup.location.replace(t))}},r.saveSvg=function(e,t,n){var o=w();return l(e).then((function(e){return r.svgAsDataUri(e,n||{})})).then((function(e){return r.download(t,e,o)}))},r.saveSvgAsPng=function(e,t,n){var o=w();return l(e).then((function(e){return r.svgAsPngUri(e,n||{})})).then((function(e){return r.download(t,e,o)}))}}()}}]);