_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/DS0":function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),c=t.n(o),a=t("aIVY"),i=!0;function l(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"flex flex-wrap gap-4",children:Object.getOwnPropertyNames(a.a).map((function(e){return Object(r.jsx)(c.a,{href:"/comics/".concat(e),children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{className:"flex flex-grow h-28 w-28 items-center space-x-4",children:Object(r.jsx)(a.b,{id:e,showTitle:!1})})})},e)}))})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),l=t("vNVm"),u={};function s(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.asPath||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,w=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var _=c.Children.only(v),g=_&&"object"===typeof _&&_.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),O=r(y,2),j=O[0],E=O[1],x=c.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);(0,c.useEffect)((function(){var e=E&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,E,m,n,t]);var L={ref:x,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:l,scroll:i}))}(e,t,d,p,h,b,w,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var N="undefined"!==typeof m?m:t&&t.locale,M=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);L.href=M||(0,a.addBasePath)((0,a.addLocale)(p,N,t&&t.defaultLocale))}return c.default.cloneElement(_,L)};n.default=f},l3O7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comics",function(){return t("/DS0")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["l3O7",0,2,1,3]]]);