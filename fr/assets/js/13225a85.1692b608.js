"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2926],{3755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(5893),s=t(1151);const o={sidebar_position:3},a="Post Installation",i={id:"install-archcraft/post-install",title:"Post Installation",description:"After installing Archcraft, there are few things you should do...",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/install-archcraft/post-install.mdx",sourceDirName:"install-archcraft",slug:"/install-archcraft/post-install",permalink:"/fr/docs/install-archcraft/post-install",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/install-archcraft/post-install.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install Archcraft With ABIF",permalink:"/fr/docs/install-archcraft/install-with-abif"},next:{title:"Openbox",permalink:"/fr/docs/window-managers/stacking-wm/openbox"}},c={},l=[{value:"Update System",id:"update-system",level:3},{value:"Install New Softwares",id:"install-new-softwares",level:3},{value:"Fix Screen Tearing",id:"fix-screen-tearing",level:3},{value:"Enable Suspend Service",id:"enable-suspend-service",level:3},{value:"Fix Lock Screen Background",id:"fix-lock-screen-background",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"post-installation",children:"Post Installation"}),"\n",(0,r.jsx)(n.p,{children:"After installing Archcraft, there are few things you should do..."}),"\n",(0,r.jsx)(n.h3,{id:"update-system",children:"Update System"}),"\n",(0,r.jsx)(n.p,{children:"Refresh package database and Update your new installation."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -Syyu\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you get ",(0,r.jsx)(n.code,{children:"invalid or corrupted package (PGP signature)"})," error, do..."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -S archlinux-keyring\n$ sudo pacman-key --init\n$ sudo pacman-key --populate\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-new-softwares",children:"Install New Softwares"}),"\n",(0,r.jsx)(n.p,{children:"Install your favorite programs with pacman or yay (AUR)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -S gimp inkscape\n\n# Or from AUR\n\n$ yay -S spotify\t\t\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fix-screen-tearing",children:"Fix Screen Tearing"}),"\n",(0,r.jsx)(n.p,{children:"If you're facing screen tearing issue then :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enable ",(0,r.jsx)(n.code,{children:"GLX"})," backend for compositor. If you're using ",(0,r.jsx)(n.code,{children:"openbox"})," then right click on the desktop and\ngo to ",(0,r.jsx)(n.strong,{children:"Preferences > Compositor"})," and click on ",(0,r.jsx)(n.code,{children:"Use 'glx' backend"})," or you can edit ",(0,r.jsx)(n.code,{children:"~/.config/picom.conf"})," file manually."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If first option does not work for you, Create a ",(0,r.jsx)(n.code,{children:"xorg.conf"})," file like this :"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Change to xorg.conf.d dir\n$ cd /etc/X11/xorg.conf.d\n\n# Create a conf file\n$ sudo touch 20-amdgpu.conf\n\n# Edit the file\n$ sudo vim 20-amdgpu.conf\n\n# Paste this in the editor\nSection "Device"\n     Identifier "AMD"\n     Driver "amdgpu"\n     Option "TearFree" "true"\nEndSection\t\t\t\t\t\t\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["This method may not work on your system and you might not be able to boot into ",(0,r.jsx)(n.strong,{children:"xorg"}),". So make sure you know how to use ",(0,r.jsx)(n.strong,{children:"tty"})," or boot into ",(0,r.jsx)(n.strong,{children:"recovery mode"})," to revert the changes you made."]})}),"\n",(0,r.jsx)(n.h3,{id:"enable-suspend-service",children:"Enable Suspend Service"}),"\n",(0,r.jsx)(n.p,{children:"Enable betterlockscreen's suspend service for your user account."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Enable betterlockscreen suspend service\n\n$ sudo systemctl enable betterlockscreen@$USER.service\t\t\t\t\t\t\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fix-lock-screen-background",children:"Fix Lock Screen Background"}),"\n",(0,r.jsx)(n.p,{children:"Fix lock screen layout on hidpi or low resolution displays."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Update the lockscreen wallpaper\n\n$ betterlockscreen -u /usr/share/backgrounds/groot.jpg\n"})}),"\n",(0,r.jsx)(n.p,{children:"Well, that's pretty much everything for now, go ahead and enjoy Archcraft."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);