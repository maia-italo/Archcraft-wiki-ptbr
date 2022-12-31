"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[5374],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),o=r(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var t,r=e.lazy,o=e.block,u=e.defaultValue,s=e.values,f=e.groupId,p=e.className,m=n.Children.toArray(e.children),d=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=a(),b=v.tabGroupChoices,h=v.setTabGroupChoices,g=(0,n.useState)(y),w=g[0],O=g[1],k=[];if(null!=f){var x=b[f];null!=x&&x!==w&&d.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var t=e.currentTarget,r=k.indexOf(t),n=d[r].value;O(n),null!=f&&(h(f,n),setTimeout((function(){var e,r,n,o,a,i,c,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,r>=0&&a<=u&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;r=k[o]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},p)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=r?r:t)}))),r?(0,n.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},5213:function(e,t,r){r.r(t),r.d(t,{Highlight:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(5064),r(8215),["components"]),c={sidebar_position:1},l="Sway",u={unversionedId:"wayland-compositors/sway",id:"wayland-compositors/sway",isDocsHomePage:!1,title:"Sway",description:"More information : Here",source:"@site/docs/wayland-compositors/sway.mdx",sourceDirName:"wayland-compositors",slug:"/wayland-compositors/sway",permalink:"/pl/docs/wayland-compositors/sway",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/wayland-compositors/sway.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Fluxbox",permalink:"/pl/docs/window-managers/fluxbox"},next:{title:"Wayfire",permalink:"/pl/docs/wayland-compositors/wayfire"}},s=[],f=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},t)},p={toc:s,Highlight:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sway"},"Sway"),(0,a.kt)("p",null,"More information : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archcraft-os/archcraft-sway"},"Here")))}m.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);