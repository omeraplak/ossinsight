"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9071],{62286:(e,t,o)=>{o.d(t,{D:()=>a});const a=(0,o(23097).P)("title",{},"Title")},38622:(e,t,o)=>{o.d(t,{Q:()=>i,v:()=>a});const a=(0,o(23097).P)("toolbox",{},"Toolbox");function i(e){return{show:!0,onclick:e,iconStyle:{borderColor:"lightgray"},icon:"path://M995.84,1024,28.16,1024C12.8,1024,0,1011.2,0,995.84l0,0c0-15.36,12.8-28.16,28.16-28.16l967.68,0c15.36,0,28.16,12.8,28.16,28.16l0,0C1024,1011.2,1011.2,1024,995.84,1024zM926.72,376.32,926.72,376.32c-10.24-10.24-30.72-10.24-40.96,0L537.6,721.92,537.6,28.16C537.6,12.8,527.36,0,512,0s-25.6,12.8-25.6,28.16l0,693.76L138.24,376.32c-10.24-10.24-30.72-10.24-40.96,0-10.24,10.24-10.24,28.16,0,40.96l394.24,394.24c2.56,2.56,2.56,2.56,5.12,2.56,0,0,2.56,2.56,2.56,2.56,7.68,2.56,15.36,2.56,23.04,0,2.56,0,2.56-2.56,2.56-2.56,2.56,0,5.12-2.56,5.12-2.56l394.24-394.24C936.96,404.48,936.96,386.56,926.72,376.32z"}}},72428:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(54235),i=o(85893);const n=(0,a.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},31812:(e,t,o)=>{o.d(t,{Z:()=>I});var a=o(63366),i=o(87462),n=o(67294),r=o(36622),l=o(49669),d=o(94780),s=o(81719),c=o(78884),u=o(54225),p=o(70754),g=o(34867);function m(e){return(0,g.Z)("MuiLoadingButton",e)}const b=(0,o(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var v=o(85893);const h=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],f=(0,s.ZP)(u.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${b.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${b.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:e,theme:t})=>(0,i.Z)({[`& .${b.startIconLoadingStart}, & .${b.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${b.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${b.startIconLoadingStart}, & .${b.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${b.startIconLoadingStart}, & .${b.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),Z=(0,s.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,r.Z)(o.loadingPosition)}`]]}})((({theme:e,ownerState:t})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10}))),I=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiLoadingButton"}),{children:n,disabled:s=!1,id:u,loading:g=!1,loadingIndicator:b,loadingPosition:I="center",variant:x="text"}=o,y=(0,a.Z)(o,h),C=(0,l.Z)(u),E=null!=b?b:(0,v.jsx)(p.Z,{"aria-labelledby":C,color:"inherit",size:16}),L=(0,i.Z)({},o,{disabled:s,loading:g,loadingIndicator:E,loadingPosition:I,variant:x}),S=(e=>{const{loading:t,loadingPosition:o,classes:a}=e,n={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,r.Z)(o)}`],endIcon:[t&&`endIconLoading${(0,r.Z)(o)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,r.Z)(o)}`]},l=(0,d.Z)(n,m,a);return(0,i.Z)({},a,l)})(L),k=g?(0,v.jsx)(Z,{className:S.loadingIndicator,ownerState:L,children:E}):null;return(0,v.jsxs)(f,(0,i.Z)({disabled:s||g,id:C,ref:t},y,{variant:x,classes:S,ownerState:L,children:["end"===L.loadingPosition?n:k,"end"===L.loadingPosition?k:n]}))}))},62135:(e,t,o)=>{o.d(t,{Z:()=>Z});var a=o(63366),i=o(87462),n=o(67294),r=o(86010),l=o(94780),d=o(41796),s=o(36622),c=o(81719),u=o(78884),p=o(34867);function g(e){return(0,p.Z)("MuiButtonGroup",e)}const m=(0,o(1588).Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var b=o(58907),v=o(85893);const h=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],f=(0,c.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${m.grouped}`]:t.grouped},{[`& .${m.grouped}`]:t[`grouped${(0,s.Z)(o.orientation)}`]},{[`& .${m.grouped}`]:t[`grouped${(0,s.Z)(o.variant)}`]},{[`& .${m.grouped}`]:t[`grouped${(0,s.Z)(o.variant)}${(0,s.Z)(o.orientation)}`]},{[`& .${m.grouped}`]:t[`grouped${(0,s.Z)(o.variant)}${(0,s.Z)(o.color)}`]},t.root,t[o.variant],!0===o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth,"vertical"===o.orientation&&t.vertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},"vertical"===t.orientation&&{flexDirection:"column"},{[`& .${m.grouped}`]:(0,i.Z)({minWidth:40,"&:not(:first-of-type)":(0,i.Z)({},"horizontal"===t.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===t.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===t.variant&&"horizontal"===t.orientation&&{marginLeft:-1},"outlined"===t.variant&&"vertical"===t.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,i.Z)({},"horizontal"===t.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===t.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===t.variant&&"horizontal"===t.orientation&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"vertical"===t.orientation&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"inherit"!==t.color&&{borderColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,d.Fq)(e.palette[t.color].main,.5)},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"transparent"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"transparent"},"contained"===t.variant&&"horizontal"===t.orientation&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${m.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},"contained"===t.variant&&"vertical"===t.orientation&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${m.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},"contained"===t.variant&&"inherit"!==t.color&&{borderColor:(e.vars||e).palette[t.color].dark},{"&:hover":(0,i.Z)({},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"currentColor"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,i.Z)({},"contained"===t.variant&&{boxShadow:"none"})},"contained"===t.variant&&{boxShadow:"none"})}))),Z=n.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiButtonGroup"}),{children:d,className:c,color:p="primary",component:m="div",disabled:Z=!1,disableElevation:I=!1,disableFocusRipple:x=!1,disableRipple:y=!1,fullWidth:C=!1,orientation:E="horizontal",size:L="medium",variant:S="outlined"}=o,k=(0,a.Z)(o,h),$=(0,i.Z)({},o,{color:p,component:m,disabled:Z,disableElevation:I,disableFocusRipple:x,disableRipple:y,fullWidth:C,orientation:E,size:L,variant:S}),R=(e=>{const{classes:t,color:o,disabled:a,disableElevation:i,fullWidth:n,orientation:r,variant:d}=e,c={root:["root",d,"vertical"===r&&"vertical",n&&"fullWidth",i&&"disableElevation"],grouped:["grouped",`grouped${(0,s.Z)(r)}`,`grouped${(0,s.Z)(d)}`,`grouped${(0,s.Z)(d)}${(0,s.Z)(r)}`,`grouped${(0,s.Z)(d)}${(0,s.Z)(o)}`,a&&"disabled"]};return(0,l.Z)(c,g,t)})($),_=n.useMemo((()=>({className:R.grouped,color:p,disabled:Z,disableElevation:I,disableFocusRipple:x,disableRipple:y,fullWidth:C,size:L,variant:S})),[p,Z,I,x,y,C,L,S,R.grouped]);return(0,v.jsx)(f,(0,i.Z)({as:m,role:"group",className:(0,r.Z)(R.root,c),ref:t,ownerState:$},k,{children:(0,v.jsx)(b.Z.Provider,{value:_,children:d})}))}))},6351:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(67294),i=o(86010),n=o(95999),r=o(6023);const l="collapseSidebarButton_PEFL",d="collapseSidebarButtonIcon_kv0_";function s(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,n.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,n.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",l),onClick:t},a.createElement(r.Z,{className:d}))}},89665:(e,t,o)=>{o.d(t,{Z:()=>L});var a=o(87462),i=o(67294),n=o(86010),r=o(902),l=o(86668),d=o(86043),s=o(35281),c=o(53438),u=o(48596),p=o(14353),g=o(39960),m=o(95999),b=o(72389),v=o(1424);function h(e){let{categoryLabel:t,onClick:o}=e;return i.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:o})}function f(e){let{item:t,onItemClick:o,activePath:m,level:f,index:Z,...I}=e;const{items:x,label:y,collapsible:C,className:E,href:L}=t,{docs:{sidebar:{autoCollapseCategories:S}}}=(0,l.L)(),k=function(e){const t=(0,b.Z)();return(0,i.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),$=(0,c._F)(t,m),R=(0,u.Mg)(L,m),{collapsed:_,setCollapsed:P}=(0,d.u)({initialState:()=>!!C&&(!$&&t.collapsed)}),{expandedItem:w,setExpandedItem:z}=(0,p.f)(),B=function(e){void 0===e&&(e=!_),z(e?null:Z),P(e)};return function(e){let{isActive:t,collapsed:o,updateCollapsed:a}=e;const n=(0,r.D9)(t);(0,i.useEffect)((()=>{t&&!n&&o&&a(!1)}),[t,n,o,a])}({isActive:$,collapsed:_,updateCollapsed:B}),(0,i.useEffect)((()=>{C&&null!=w&&w!==Z&&S&&P(!0)}),[C,w,Z,P,S]),i.createElement("li",{className:(0,n.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(f),"menu__list-item",{"menu__list-item--collapsed":_},E)},i.createElement("div",{className:(0,n.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":R})},i.createElement(g.Z,(0,a.Z)({className:(0,n.Z)("menu__link",{"menu__link--sublist":C,"menu__link--sublist-caret":!L&&C,"menu__link--active":$}),onClick:C?e=>{null==o||o(t),L?B(!1):(e.preventDefault(),B())}:()=>{null==o||o(t)},"aria-current":R?"page":void 0,"aria-expanded":C?!_:void 0,href:C?k??"#":k},I),y),L&&C&&i.createElement(h,{categoryLabel:y,onClick:e=>{e.preventDefault(),B()}})),i.createElement(d.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},i.createElement(v.Z,{items:x,tabIndex:_?-1:0,onItemClick:o,activePath:m,level:f+1})))}var Z=o(13919),I=o(39471);const x="menuExternalLink_NmtK";function y(e){let{item:t,onItemClick:o,activePath:r,level:l,index:d,...u}=e;const{href:p,label:m,className:b,autoAddBaseUrl:v}=t,h=(0,c._F)(t,r),f=(0,Z.Z)(p);return i.createElement("li",{className:(0,n.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",b),key:m},i.createElement(g.Z,(0,a.Z)({className:(0,n.Z)("menu__link",!f&&x,{"menu__link--active":h}),autoAddBaseUrl:v,"aria-current":h?"page":void 0,to:p},f&&{onClick:o?()=>o(t):void 0},u),m,!f&&i.createElement(I.Z,null)))}const C="menuHtmlItem_M9Kj";function E(e){let{item:t,level:o,index:a}=e;const{value:r,defaultStyle:l,className:d}=t;return i.createElement("li",{className:(0,n.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(o),l&&[C,"menu__list-item"],d),key:a,dangerouslySetInnerHTML:{__html:r}})}function L(e){let{item:t,...o}=e;switch(t.type){case"category":return i.createElement(f,(0,a.Z)({item:t},o));case"html":return i.createElement(E,(0,a.Z)({item:t},o));default:return i.createElement(y,(0,a.Z)({item:t},o))}}},6023:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(87462),i=o(67294);function n(e){return i.createElement("svg",(0,a.Z)({width:"20",height:"20","aria-hidden":"true"},e),i.createElement("g",{fill:"#7a7a7a"},i.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},14353:(e,t,o)=>{o.d(t,{D:()=>l,f:()=>d});var a=o(67294),i=o(902);const n=Symbol("EmptyContext"),r=a.createContext(n);function l(e){let{children:t}=e;const[o,i]=(0,a.useState)(null),n=(0,a.useMemo)((()=>({expandedItem:o,setExpandedItem:i})),[o]);return a.createElement(r.Provider,{value:n},t)}function d(){const e=(0,a.useContext)(r);if(e===n)throw new i.i6("DocSidebarItemsExpandedStateProvider");return e}},64063:e=>{e.exports=function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var a,i,n;if(Array.isArray(t)){if((a=t.length)!=o.length)return!1;for(i=a;0!=i--;)if(!e(t[i],o[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((a=(n=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(i=a;0!=i--;)if(!Object.prototype.hasOwnProperty.call(o,n[i]))return!1;for(i=a;0!=i--;){var r=n[i];if(!e(t[r],o[r]))return!1}return!0}return t!=t&&o!=o}}}]);