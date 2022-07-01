"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[6999],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5018:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={slug:"01-post-mpd",title:"Add my music in mpd",authors:"adi1090x",tags:["howto","mpd","ncmpcpp","polybar"]},l=void 0,c={permalink:"/blog/01-post-mpd",editUrl:"https://github.com/archcraft-os/documentation/edit/main/blog/2021/07-20-post-mpd.md",source:"@site/blog/2021/07-20-post-mpd.md",title:"Add my music in mpd",description:"To add your favorite music in mpd, (assuming your songs are stored in ~/Music directory) follow the steps below :",date:"2021-07-20T00:00:00.000Z",formattedDate:"July 20, 2021",tags:[{label:"howto",permalink:"/blog/tags/howto"},{label:"mpd",permalink:"/blog/tags/mpd"},{label:"ncmpcpp",permalink:"/blog/tags/ncmpcpp"},{label:"polybar",permalink:"/blog/tags/polybar"}],readingTime:.315,truncated:!0,authors:[{name:"Aditya Shakya",title:"Developer of Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],prevItem:{title:"Change themes and icons in bspwm",permalink:"/blog/02-post-bspwm"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To add your favorite music in ",(0,a.kt)("inlineCode",{parentName:"p"},"mpd"),", (",(0,a.kt)("em",{parentName:"p"},"assuming your songs are stored in ",(0,a.kt)("inlineCode",{parentName:"em"},"~/Music")," directory"),") follow the steps below :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open a terminal and run ",(0,a.kt)("strong",{parentName:"li"},"ncmpcpp")),(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"ncmpcpp"),", press ",(0,a.kt)("kbd",null,"2")," to open ",(0,a.kt)("strong",{parentName:"li"},"song browser")),(0,a.kt)("li",{parentName:"ul"},"In browser tab, press ",(0,a.kt)("kbd",null,"u")," to update the ",(0,a.kt)("strong",{parentName:"li"},"music database")),(0,a.kt)("li",{parentName:"ul"},"Select your songs and press ",(0,a.kt)("kbd",null,"SPACE")," to add the songs in your ",(0,a.kt)("strong",{parentName:"li"},"current playlist"))))}d.isMDXComponent=!0}}]);