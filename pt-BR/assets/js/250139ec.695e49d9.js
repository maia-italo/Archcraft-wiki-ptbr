"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[1894],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",u="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,a=e.block,l=e.defaultValue,s=e.values,f=e.groupId,p=e.className,d=r.Children.toArray(e.children),m=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=o(),y=b.tabGroupChoices,g=b.setTabGroupChoices,w=(0,r.useState)(v),h=w[0],O=w[1],k=[];if(null!=f){var x=y[f];null!=x&&x!==h&&m.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var t=e.currentTarget,n=k.indexOf(t),r=m[n].value;O(r),null!=f&&(g(f,r),setTimeout((function(){var e,n,r,a,o,i,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case"ArrowLeft":var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2029:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),c={sidebar_position:9},u="Sway",l={unversionedId:"window-managers/sway",id:"window-managers/sway",isDocsHomePage:!1,title:"Sway",description:"Mais informa\xe7\xf5es : Aqui",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/window-managers/sway.mdx",sourceDirName:"window-managers",slug:"/window-managers/sway",permalink:"/pt-BR/docs/window-managers/sway",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pt-BR/docusaurus-plugin-content-docs/current/window-managers/sway.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Fluxbox",permalink:"/pt-BR/docs/window-managers/fluxbox"},next:{title:"Wayfire",permalink:"/pt-BR/docs/window-managers/wayfire"}},s=[],f=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},t)},p={toc:s,Highlight:f};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sway"},"Sway"),(0,o.kt)("p",null,"Mais informa\xe7\xf5es : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archcraft-os/archcraft-sway"},"Aqui")))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);