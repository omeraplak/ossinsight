"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4011],{96214:(e,r,t)=>{var n=t(64836);r.Z=void 0;var i=n(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");r.Z=a},31470:(e,r,t)=>{t.d(r,{Z:()=>V});var n=t(63366),i=t(87462),o=t(67294),a=t(86010),s=t(94780),l=t(57579),c=t(36622),p=t(1568),d=t(9942),u=t(70918),h=t(78884),f=t(81719),b=t(34867);function v(e){return(0,b.Z)("MuiDialog",e)}const g=(0,t(1588).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);const m=(0,o.createContext)({});var y=t(58735),w=t(62097),k=t(85893);const x=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],W=(0,f.ZP)(y.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),Z=(0,f.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),S=(0,f.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.container,r[`scroll${(0,c.Z)(t.scroll)}`]]}})((({ownerState:e})=>(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),C=(0,f.ZP)(u.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.paper,r[`scrollPaper${(0,c.Z)(t.scroll)}`],r[`paperWidth${(0,c.Z)(String(t.maxWidth))}`],t.fullWidth&&r.paperFullWidth,t.fullScreen&&r.paperFullScreen]}})((({theme:e,ownerState:r})=>(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${g.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${g.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${g.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),V=o.forwardRef((function(e,r){const t=(0,h.Z)({props:e,name:"MuiDialog"}),p=(0,w.Z)(),f={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{"aria-describedby":b,"aria-labelledby":g,BackdropComponent:y,BackdropProps:V,children:M,className:P,disableEscapeKeyDown:D=!1,fullScreen:I=!1,fullWidth:O=!1,maxWidth:B="sm",onBackdropClick:j,onClose:N,open:R,PaperComponent:$=u.Z,PaperProps:_={},scroll:A="paper",TransitionComponent:E=d.Z,transitionDuration:F=f,TransitionProps:T}=t,z=(0,n.Z)(t,x),K=(0,i.Z)({},t,{disableEscapeKeyDown:D,fullScreen:I,fullWidth:O,maxWidth:B,scroll:A}),Y=(e=>{const{classes:r,scroll:t,maxWidth:n,fullWidth:i,fullScreen:o}=e,a={root:["root"],container:["container",`scroll${(0,c.Z)(t)}`],paper:["paper",`paperScroll${(0,c.Z)(t)}`,`paperWidth${(0,c.Z)(String(n))}`,i&&"paperFullWidth",o&&"paperFullScreen"]};return(0,s.Z)(a,v,r)})(K),L=o.useRef(),X=(0,l.Z)(g),H=o.useMemo((()=>({titleId:X})),[X]);return(0,k.jsx)(Z,(0,i.Z)({className:(0,a.Z)(Y.root,P),closeAfterTransition:!0,components:{Backdrop:W},componentsProps:{backdrop:(0,i.Z)({transitionDuration:F,as:y},V)},disableEscapeKeyDown:D,onClose:N,open:R,ref:r,onClick:e=>{L.current&&(L.current=null,j&&j(e),N&&N(e,"backdropClick"))},ownerState:K},z,{children:(0,k.jsx)(E,(0,i.Z)({appear:!0,in:R,timeout:F,role:"presentation"},T,{children:(0,k.jsx)(S,{className:(0,a.Z)(Y.container),onMouseDown:e=>{L.current=e.target===e.currentTarget},ownerState:K,children:(0,k.jsx)(C,(0,i.Z)({as:$,elevation:24,role:"dialog","aria-describedby":b,"aria-labelledby":X},_,{className:(0,a.Z)(Y.paper,_.className),ownerState:K,children:(0,k.jsx)(m.Provider,{value:H,children:M})}))})}))}))}))},70131:(e,r,t)=>{t.d(r,{YD:()=>b});var n=t(67294);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,r){return o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},o(e,r)}var a=new Map,s=new WeakMap,l=0,c=void 0;function p(e){return Object.keys(e).sort().filter((function(r){return void 0!==e[r]})).map((function(r){return r+"_"+("root"===r?(t=e.root)?(s.has(t)||(l+=1,s.set(t,l.toString())),s.get(t)):"0":e[r]);var t})).toString()}function d(e,r,t,n){if(void 0===t&&(t={}),void 0===n&&(n=c),void 0===window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return r(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var r=p(e),t=a.get(r);if(!t){var n,i=new Map,o=new IntersectionObserver((function(r){r.forEach((function(r){var t,o=r.isIntersecting&&n.some((function(e){return r.intersectionRatio>=e}));e.trackVisibility&&void 0===r.isVisible&&(r.isVisible=o),null==(t=i.get(r.target))||t.forEach((function(e){e(o,r)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:o,elements:i},a.set(r,t)}return t}(t),s=o.id,l=o.observer,d=o.elements,u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(r),l.observe(e),function(){u.splice(u.indexOf(r),1),0===u.length&&(d.delete(e),l.unobserve(e)),0===d.size&&(l.disconnect(),a.delete(s))}}var u=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(e){return"function"!=typeof e.children}var f=function(e){var r,t;function a(r){var t;return(t=e.call(this,r)||this).node=null,t._unobserveCb=null,t.handleNode=function(e){t.node&&(t.unobserve(),e||t.props.triggerOnce||t.props.skip||t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=e||null,t.observeNode()},t.handleChange=function(e,r){e&&t.props.triggerOnce&&t.unobserve(),h(t.props)||t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)},t.state={inView:!!r.initialInView,entry:void 0},t}t=e,(r=a).prototype=Object.create(t.prototype),r.prototype.constructor=r,o(r,t);var s=a.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,r=e.threshold,t=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay,a=e.fallbackInView;this._unobserveCb=d(this.node,this.handleChange,{threshold:r,root:t,rootMargin:n,trackVisibility:i,delay:o},a)}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!h(this.props)){var e=this.state,r=e.inView,t=e.entry;return this.props.children({inView:r,entry:t,ref:this.handleNode})}var o=this.props,a=o.children,s=o.as,l=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(o,u);return n.createElement(s||"div",i({ref:this.handleNode},l),a)},a}(n.Component);function b(e){var r=void 0===e?{}:e,t=r.threshold,i=r.delay,o=r.trackVisibility,a=r.rootMargin,s=r.root,l=r.triggerOnce,c=r.skip,p=r.initialInView,u=r.fallbackInView,h=n.useRef(),f=n.useState({inView:!!p}),b=f[0],v=f[1],g=n.useCallback((function(e){void 0!==h.current&&(h.current(),h.current=void 0),c||e&&(h.current=d(e,(function(e,r){v({inView:e,entry:r}),r.isIntersecting&&l&&h.current&&(h.current(),h.current=void 0)}),{root:s,rootMargin:a,threshold:t,trackVisibility:o,delay:i},u))}),[Array.isArray(t)?t.toString():t,s,a,l,c,o,u,i]);(0,n.useEffect)((function(){h.current||!b.entry||l||c||v({inView:!!p})}));var m=[g,b.inView,b.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}]);