"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),h=o,m=f["".concat(c,".").concat(h)]||f[h]||p[h]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:5,title:"FAQ"},a=void 0,s={unversionedId:"faq",id:"faq",title:"FAQ",description:"Where does these data come from?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Showcase",permalink:"/docs/showcase"}},c={},l=[{value:"Where does these data come from?",id:"where-does-these-data-come-from",level:2},{value:"Why the stars(or other metrics) on this site is different from that on GitHub?",id:"why-the-starsor-other-metrics-on-this-site-is-different-from-that-on-github",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"where-does-these-data-come-from"},"Where does these data come from?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Historical Data: ",(0,o.kt)("a",{parentName:"li",href:"http://gharchive.org/"},"http://gharchive.org/")),(0,o.kt)("li",{parentName:"ul"},"Realtime Data: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/activity/events#list-public-events"},"https://docs.github.com/en/rest/activity/events#list-public-events"))),(0,o.kt)("h2",{id:"why-the-starsor-other-metrics-on-this-site-is-different-from-that-on-github"},"Why the stars(or other metrics) on this site is different from that on GitHub?"),(0,o.kt)("p",null,"2 reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub /events api only publish WatchEvent(this means star), there is no UnWatchEvent;"),(0,o.kt)("li",{parentName:"ul"},"GitHub would lost data if there services were down;")))}p.isMDXComponent=!0}}]);