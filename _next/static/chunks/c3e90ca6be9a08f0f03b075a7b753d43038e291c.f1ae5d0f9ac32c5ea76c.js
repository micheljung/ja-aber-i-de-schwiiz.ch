(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"20a2":function(e,t,n){e.exports=n("nOHt")},"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),o=n("lwsE"),a=n("W8MJ");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var l,d=(l=n("q1tI"))&&l.__esModule?l:{default:l},f=n("8L3h"),m=n("jwwS");var p=[],h=[],b=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function y(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=v(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function j(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new O(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!b&&"function"===typeof n.webpack){var a=n.webpack();h.push((function(e){var t,n=u(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=d.default.useContext(m.LoadableContext),i=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var O=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return j(v,e)}function x(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return x(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return j(y,e)},w.preloadAll=function(){return new Promise((function(e,t){x(p).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return b=!0,t()};x(h,e).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var k=w;t.default=k},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},u=n("lwAK"),s=n("FYa8"),l=n("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function b(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}b.rewind=function(){};var v=b;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MKm5:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return b})),n.d(t,"default",(function(){return v}));var r,o=n("nKUr"),a=n("q1tI"),i=n("aIVY");n("g4pe"),n("p4Cq");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u,s=function(e){return a.createElement("svg",c({viewBox:"0 0 24 43",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=a.createElement("path",{d:"M2.574 40.353L21.427 21.5 2.574 2.647",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5})))};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e){return a.createElement("svg",l({viewBox:"0 0 64.398 50.886",xmlns:"http://www.w3.org/2000/svg"},e),u||(u=a.createElement("g",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeWidth:5},a.createElement("path",{d:"M2.5 9.623h16.009l8.65 10.37m9.064 10.864l8.65 10.37h17.024M2.5 41.264h16.009L44.872 9.659h17.024"}),a.createElement("path",{d:"M54.737 16.818l7.16-7.16-7.16-7.158M54.738 48.386l7.16-7.16-7.16-7.158",strokeLinejoin:"round"}))))};function f(e){var t=e.icon,n=e.title,r=e.description,a=e.url;return Object(o.jsxs)("a",{href:a,className:"px-4 py-2 dark:bg-gray-700 rounded-xl shadow-md flex flex-grow lg:w-56 items-center space-x-4",children:[Object(o.jsx)("div",{className:"flex-shrink-0",children:Object(o.jsx)("img",{className:"h-12 w-12",src:t,alt:"Instagram Logo"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"text-xl font-medium text-black dark:text-gray-400",children:n}),Object(o.jsx)("p",{className:"text-gray-500 dark:text-gray-500",children:r})]})]},a)}var m=n("20a2");function p(e){var t=e.comicId,n=Object(m.useRouter)();function r(e){var r=Object.getOwnPropertyNames(i.a),o=r.indexOf(t),a=r[Math.max(0,(o+e)%r.length)];n.push(a,void 0)}return Object(o.jsxs)("div",{className:"flex flex-row h-12 justify-center gap-4 content-center",children:[Object(o.jsx)("button",{className:"h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2",onClick:function(){return r(-1)},children:Object(o.jsx)(s,{className:"w-4 h-4",transform:"scale(-1,1)"})}),Object(o.jsx)("button",{className:"h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded-md px-3",onClick:function(){return function(){var e=Object.getOwnPropertyNames(i.a),t=e[Math.floor(Math.random()*e.length)];n.push(t,void 0)}()},children:Object(o.jsx)(d,{className:"w-6 h-6"})}),Object(o.jsx)("button",{className:"h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2",onClick:function(){return r(1)},children:Object(o.jsx)("div",{className:"w-4 self-center",children:Object(o.jsx)(s,{className:"w-4 h-4"})})})]})}function h(){return Object(o.jsx)("div",{className:"p-4 text-center dark:text-gray-300",children:Object(o.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/",children:Object(o.jsx)("img",{className:"mx-auto",alt:"Creative Commons Lizenzvertrag",src:"/icons/by-nc.svg"})})})}var b=!0;function v(e){var t=e.id,n=void 0===t?"1":t;return Object(o.jsxs)("div",{className:"flex flex-col min-h-screen",children:[Object(o.jsxs)("main",{className:"p-2 gap-4",children:[Object(o.jsxs)("div",{className:"mx-auto lg:w-1/2",children:[Object(o.jsx)(p,{comicId:n}),Object(o.jsx)(i.b,{id:n}),Object(o.jsx)(p,{comicId:n})]}),Object(o.jsxs)("div",{className:"flex flex-wrap gap-4",children:[Object(o.jsx)(f,{icon:"/icons/instagram.svg",title:"Instagram",description:"Folge mir auf Instagram",url:"https://www.instagram.com/ja.aber.i.de.schwiiz"}),Object(o.jsx)(f,{icon:"/icons/facebook.svg",title:"Facebook",description:"Folge mir auf Facebook",url:"https://www.facebook.com/ja.aber.i.de.schwiiz"}),Object(o.jsx)(f,{icon:"/icons/youtube.svg",title:"YouTube",description:"Abonniere mich auf YouTube",url:"https://www.youtube.com/channel/UC9O3PwuTOpMBfOA_7bgabZQ"})]})]}),Object(o.jsxs)("footer",{children:[Object(o.jsx)(h,{}),Object(o.jsxs)("div",{className:"flex justify-center text-gray-400",children:["Quelltext auf\xa0",Object(o.jsx)("a",{href:"https://github.com/micheljung/ja-aber-i-de-schwiiz.ch",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})]})}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Vvt1:function(e,t,n){e.exports=n("a6RD")},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));if(r=a(a({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=i.default.Map;var o={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};c(n("q1tI"));var i=c(n("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},aIVY:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("nKUr"),o=n("Vvt1"),a=n.n(o),i=(n("q1tI"),{1:{title:"Tierische Produkte zu vermeiden ist extrem"}});function c(e){var t=e.id,o=e.showTitle,c=void 0===o||o,u=function(e){switch(e){case"1":return a()((function(){return n.e(11).then(n.bind(null,"GGBL"))}),{loadableGenerated:{webpack:function(){return["GGBL"]},modules:["../components/ComicComponent.js -> ../comics/1.svg"]}});default:throw"Unknown ID: "+e}}(t),s=i[t].title;return Object(r.jsxs)("div",{className:"flex-grow",children:[c&&Object(r.jsx)("h1",{children:s}),Object(r.jsx)(u,{className:"text-black dark:text-gray-300"})]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},p4Cq:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),o=n("q1tI"),a=n("sKF2");function i(){var e=Object(o.useState)(!1),t=e[0],n=e[1],i=Object(a.b)(),c=i.resolvedTheme,u=i.setTheme;return Object(o.useEffect)((function(){return n(!0)}),[]),Object(r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"flex items-center justify-center h-12 w-12",onClick:function(){return u("dark"===c?"light":"dark")},children:t&&Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-8 w-8 text-gray-800 dark:text-gray-200",children:"dark"===c?Object(r.jsx)("path",{className:"nostroke",fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):Object(r.jsx)("path",{className:"nostroke",d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})}},sKF2:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("g4pe"),i=n.n(a),c=Object(r.createContext)({setTheme:function(e){},themes:[]}),u=function(){return Object(r.useContext)(c)},s=["light","dark"],l="(prefers-color-scheme: dark)",d=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,i=e.enableSystem,u=void 0===i||i,d=e.enableColorScheme,b=void 0===d||d,v=e.storageKey,y=void 0===v?"theme":v,g=e.themes,j=void 0===g?["light","dark"]:g,O=e.defaultTheme,w=void 0===O?u?"system":"light":O,x=e.attribute,k=void 0===x?"data-theme":x,_=e.value,M=e.children,S=Object(r.useState)((function(){return m(y,w)})),P=S[0],C=S[1],E=Object(r.useState)((function(){return m(y)})),I=E[0],N=E[1],T=_?Object.values(_):j,A=Object(r.useCallback)((function(e){var n=h(e);N(n),"system"!==P||t||L(n,!1)}),[P,t]),D=Object(r.useRef)(A);D.current=A;var L=Object(r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==_?void 0:_[e])||e,o=a&&n?p():null;if(t)try{localStorage.setItem(y,e)}catch(e){}if("system"===e&&u){var i=h();r=(null==_?void 0:_[i])||i}if(n){var c,s=document.documentElement;"class"===k?((c=s.classList).remove.apply(c,T),s.classList.add(r)):s.setAttribute(k,r),null==o||o()}}),[]);Object(r.useEffect)((function(){var e=function(){return D.current.apply(D,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var q=Object(r.useCallback)((function(e){t?L(e,!0,!1):L(e),C(e)}),[t]);return Object(r.useEffect)((function(){var e=function(e){e.key===y&&q(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[q]),Object(r.useEffect)((function(){if(b){var e=t&&s.includes(t)?t:P&&s.includes(P)?P:"system"===P&&I||null;document.documentElement.style.setProperty("color-scheme",e)}}),[b,P,I,t]),o.a.createElement(c.Provider,{value:{theme:P,setTheme:q,forcedTheme:t,resolvedTheme:"system"===P?I:P,themes:u?[].concat(j,["system"]):j,systemTheme:u?I:void 0}},o.a.createElement(f,{forcedTheme:t,storageKey:y,attribute:k,value:_,enableSystem:u,defaultTheme:w,attrs:T}),M)},f=Object(r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,r=e.attribute,a=e.enableSystem,c=e.defaultTheme,u=e.value,s="class"===r?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==u?void 0:u[e])||e;var n=t?e:"'"+e+"'";return"class"===r?"d.add("+n+")":"d.setAttribute('"+r+"', "+n+")"},f="system"===c;return o.a.createElement(i.a,null,o.a.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+d(t)+"}()"}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(f?"":d(c)+";")+'if("system"===e||(!e&&'+f+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(u?"var x="+JSON.stringify(u)+";":"")+d(u?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(u?"var x="+JSON.stringify(u)+";":"")+d(u?"x[e]":"e",!0)+"}else{"+d(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),m=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"}}}]);