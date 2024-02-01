"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[6774],{2728:(e,r,n)=>{n.r(r),n.d(r,{Highlight:()=>a,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=n(5893),t=n(1151);n(4866),n(5162);const i={sidebar_position:2,hide_table_of_contents:!1},d="2bwm",c={id:"window-managers/stacking-wm/2bwm",title:"2bwm",description:"2bwm is a fast floating WM, with the particularity of having 2 borders, written over the XCB library and derived from mcwm written by Michael Cardell. In 2bwm everything is accessible from the keyboard but a pointing device can be used for move, resize and raise/lower.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/window-managers/stacking-wm/2bwm.mdx",sourceDirName:"window-managers/stacking-wm",slug:"/window-managers/stacking-wm/2bwm",permalink:"/fr/docs/window-managers/stacking-wm/2bwm",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/stacking-wm/2bwm.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Openbox",permalink:"/fr/docs/window-managers/stacking-wm/openbox"},next:{title:"Berry",permalink:"/fr/docs/window-managers/stacking-wm/berry"}},l={},o=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Config Structure",id:"config-structure",level:3},{value:"Terminal",id:"terminal",level:3},{value:"Notification",id:"notification",level:3},{value:"Wallpaper",id:"wallpaper",level:3},{value:"Statusbar",id:"statusbar",level:3},{value:"Launchers and Applets",id:"launchers-and-applets",level:3},{value:"Compositor",id:"compositor",level:3},{value:"Window Manager",id:"window-manager",level:3},{value:"Keybindings",id:"keybindings",level:2},{value:"Applications",id:"applications",level:3},{value:"Menu and Applets",id:"menu-and-applets",level:3},{value:"Hardware Keys",id:"hardware-keys",level:3},{value:"Workspaces",id:"workspaces",level:3},{value:"Window Management",id:"window-management",level:3},{value:"Window Manager",id:"window-manager-1",level:3},{value:"Misc Keys",id:"misc-keys",level:3},{value:"Screenshots",id:"screenshots",level:2},{value:"FAQs",id:"faqs",level:2}],a=({children:e,color:r})=>{const n={span:"span",...(0,t.a)()};return(0,s.jsx)(n.span,{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"},children:e})};function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"2bwm",children:"2bwm"}),"\n","\n","\n","\n",(0,s.jsx)(r.p,{children:"2bwm is a fast floating WM, with the particularity of having 2 borders, written over the XCB library and derived from mcwm written by Michael Cardell. In 2bwm everything is accessible from the keyboard but a pointing device can be used for move, resize and raise/lower."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/main.png",alt:"img"})}),"\n",(0,s.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(r.p,{children:["Once you finish installing Archcraft, ",(0,s.jsx)(r.strong,{children:"2bwm"})," can be installed on the top of it. It's pre-configured and ready to go. Open a terminal and run the following command to install 2bwm :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"$ sudo pacman -Sy archcraft-2bwm\n"})}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(r.p,{children:"2bwm is pre-configured in Archcraft. In this section, We'll see how the 2bwm window manager is configured, what tools and utilities are used to make it look and work like a complete desktop environment."}),"\n",(0,s.jsx)(r.h3,{id:"config-structure",children:"Config Structure"}),"\n",(0,s.jsx)(r.p,{children:"The configuration structure of 2bwm in Archcraft looks something like this:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"/opt\n\u2514\u2500\u2500 2bwm-source               : 2bwm source code\n    \u2514\u2500\u2500 config.h              : 2bwm config file\n/usr\n\u2514\u2500\u2500 share\n    \u2514\u2500\u2500 archcraft\n        \u2514\u2500\u2500 2bwm\n            \u251c\u2500\u2500 alacritty     : terminal config\n\xa0\xa0          \u251c\u2500\u2500 scripts       : scripts used for 2bwm\n\xa0\xa0          \u251c\u2500\u2500 theme         : desktop theme (polybar, rofi configs) \n            \u251c\u2500\u2500 dunstrc       : dunst config for notifications\n            \u251c\u2500\u2500 picom.conf    : compositor config\n            \u2514\u2500\u2500 xsettingsd    : gtk themes, icons and fonts config file\n"})}),"\n",(0,s.jsx)(r.h3,{id:"terminal",children:"Terminal"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Alacritty"})," is the default terminal. In 2bwm window manager, alacritty is launched with an alternative config file. If you need to change anything, make sure you modify the config files in ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/alacritty"})," directory. These are the following config files you can modify to change the behaviour of your terminal:"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/alacritty/alacritty.toml"})})," : Main configuration file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/alacritty/colors.toml"})})," : Colors configurations ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/alacritty/fonts.toml"})})," : Fonts configurations"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with alacritty config, run : ",(0,s.jsx)(r.code,{children:"man 5 alacritty"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"notification",children:"Notification"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Dunst"})," is used as a notification daemon for notifications in 2bwm. In 2bwm window manager, dunst is launched with an alternative config file, which is ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/dunstrc"}),". So, If you need to modify anything, make sure you edit this file."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with dunst config, run : ",(0,s.jsx)(r.code,{children:"man 5 dunst"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"wallpaper",children:"Wallpaper"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"hsetroot"})," sets the wallpaper in the 2bwm. If you want to change the wallpaper, Edit ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/scripts/2bwm_autostart"})," script and add the path to your wallpaper :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# Restore wallpaper\nhsetroot -cover '/path/to/your/wallpaper'\n"})}),"\n",(0,s.jsx)(r.h3,{id:"statusbar",children:"Statusbar"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Polybar"})," is used as the statusbar in Archcraft's 2bwm window manager."]}),"\n",(0,s.jsxs)(r.p,{children:["The configurations for polybar can be found inside the ",(0,s.jsx)(r.em,{children:"theme"})," directory directory of 2bwm ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme"})]}),"\n",(0,s.jsxs)(r.p,{children:["If you want to modify the ",(0,s.jsx)(r.strong,{children:"polybar"})," settings, or perhaps want to add/remove modules, then you need to edit the following files :"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme/polybar/config.ini"})})," : Main config file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme/polybar/colors.ini"})})," : Colors config file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme/polybar/modules.ini"})})," : Modules config file"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with polybar config, visit : ",(0,s.jsx)(r.a,{href:"https://github.com/polybar/polybar/wiki",children:"polybar wiki"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"launchers-and-applets",children:"Launchers and Applets"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Rofi"})," is used for application launchers, command runner and various applets. To modify the rofi config, edit ",(0,s.jsx)(r.code,{children:"~/.config/rofi/config.rasi"})," file."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with rofi config, run : ",(0,s.jsx)(r.code,{children:"man rofi"})," in terminal."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["The scripts for rofi that are used in 2bwm can be found it ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/scripts"})," directory. These are the following scripts that uses rofi to provide the launchers and applets :"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_askpass"})})," : rofi based ",(0,s.jsx)(r.code,{children:"sudo"})," frontend to get root password ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_asroot"})})," : applet to open apps as root ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_bluetooth"})})," : bluetooth applet to quickly connect to BT devices ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_launcher"})})," : an application launcher, cmd runner, file manager and task manager  ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_music"})})," : music applet, that controls MPD with ",(0,s.jsx)(r.code,{children:"mpc"})," ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_powermenu"})})," : power menu, with confirmation dialog ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_runner"})})," : quickly lets you run a command ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"rofi_screenshot"})})," : screenshot applet that works with maim ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(r.p,{children:"If you want to modify any applet or perhaps want to extend the functionality of the applet, just edit these scripts above."}),"\n",(0,s.jsxs)(r.p,{children:["The configuration of each script can be found inside the ",(0,s.jsx)(r.em,{children:"theme"})," directory of 2bwm ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme"})]}),"\n",(0,s.jsxs)(r.p,{children:["Let's say you want to modify the looks of ",(0,s.jsx)(r.strong,{children:"launcher"}),", then you need to edit the ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme/rofi/launcher.rasi"})," file. Same goes for every other applet, Edit the respective file in the same directory."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with rofi theming, run : ",(0,s.jsx)(r.code,{children:"man rofi-theme"})," in terminal."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["To change the colors and fonts of the launchers and applets, Edit the ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme/rofi/shared/colors.rasi"})," and ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/theme/rofi/shared/fonts.rasi"})," files."]}),"\n",(0,s.jsx)(r.h3,{id:"compositor",children:"Compositor"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Picom"})," is used for compositing. It's a lightweight compositor with shadowing, advanced blurring and fading. In 2bwm, picom is launched with an alternative config file, which is ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/picom.conf"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"If you need to change anything related to picom, Edit this picom config file."}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with picom config, check the picom's default config file in ",(0,s.jsx)(r.code,{children:"/etc/xdg/picom.conf"})]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["If you're having screen-tearing issues, using ",(0,s.jsx)(r.code,{children:"glx"})," backend can solve this issue. ",(0,s.jsx)("br",{}),"\nIf you're facing lagging, hangs and freezes, try switching between ",(0,s.jsx)(r.code,{children:"xrender"})," and ",(0,s.jsx)(r.code,{children:"glx"})," backend."]})}),"\n",(0,s.jsx)(r.h3,{id:"window-manager",children:"Window Manager"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"/opt/2bwm-source/config.h"})," is the main configuration file of 2bwm. If you need to change anything or perhaps you want to add/remove/change keybindings, Edit this file and recompile 2bwm and then install the new binary."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["If you need any help with 2bwm configuration and customisation, run : ",(0,s.jsx)(r.code,{children:"man 2bwm"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"keybindings",children:"Keybindings"}),"\n",(0,s.jsxs)(r.p,{children:["Here's a list of some important keybinds you need to know for operating 2bwm easily. If you want to view, modify or add new keybinds, Edit ",(0,s.jsx)(r.code,{children:"/opt/2bwm-source/config.h"})," file."]}),"\n",(0,s.jsx)(r.h3,{id:"applications",children:"Applications"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Return"})}),(0,s.jsx)(r.td,{children:"Open terminal (alacritty)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Return"})}),(0,s.jsx)(r.td,{children:"Open fullscreen terminal"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + F"})}),(0,s.jsx)(r.td,{children:"Open file manager (thunar)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + E"})}),(0,s.jsx)(r.td,{children:"Open text editor (geany)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + W"})}),(0,s.jsx)(r.td,{children:"Open web browser (firefox)"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"menu-and-applets",children:"Menu and Applets"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super"})}),(0,s.jsx)(r.td,{children:"Open application launcher"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"alt + F1"})}),(0,s.jsx)(r.td,{children:"Open application launcher"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"alt + F2"})}),(0,s.jsx)(r.td,{children:"Open command runner"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + N"})}),(0,s.jsx)(r.td,{children:"Open network manager applet"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + B"})}),(0,s.jsx)(r.td,{children:"Open bluetooth applet"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + M"})}),(0,s.jsx)(r.td,{children:"Open music applet"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + X"})}),(0,s.jsx)(r.td,{children:"Open powermenu applet"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + S"})}),(0,s.jsx)(r.td,{children:"Open screenshots applet"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + R"})}),(0,s.jsx)(r.td,{children:"Open apps as root applet"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"hardware-keys",children:"Hardware Keys"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"Print"})}),(0,s.jsx)(r.td,{children:"Take screenshot"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"alt + Print"})}),(0,s.jsx)(r.td,{children:"Take screenshot in 5 seconds delay"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"shift + Print"})}),(0,s.jsx)(r.td,{children:"Take screenshot in 10 seconds delay"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"ctrl + Print"})}),(0,s.jsx)(r.td,{children:"Take screenshot of currently focused window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Print"})}),(0,s.jsx)(r.td,{children:"Take screenshot of selected area"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioRaiseVolume"})}),(0,s.jsx)(r.td,{children:"Increase volume"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioLowerVolume"})}),(0,s.jsx)(r.td,{children:"Decrease volume"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioMute"})}),(0,s.jsx)(r.td,{children:"Toggle mute speakers"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioMicMute"})}),(0,s.jsx)(r.td,{children:"Toggle mute microphone"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"XF86MonBrightnessUp"})}),(0,s.jsx)(r.td,{children:"Increase display brightness"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"XF86MonBrightnessDown"})}),(0,s.jsx)(r.td,{children:"Decrease display brightness"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"workspaces",children:"Workspaces"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + 1..9,0"})}),(0,s.jsx)(r.td,{children:"Switch to respective workspace"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + Right/Left"})}),(0,s.jsx)(r.td,{children:"Next/Previous workspace"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + shift + Right/Left"})}),(0,s.jsx)(r.td,{children:"Move window to Next/Previous workspace"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Comma/Period"})}),(0,s.jsx)(r.td,{children:"Next/Previous screen"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"window-management",children:"Window Management"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + C/Q"})}),(0,s.jsx)(r.td,{children:"Close focued window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Tab"})}),(0,s.jsx)(r.td,{children:"Focus to next/previous window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Up/Down/Left/Right"})}),(0,s.jsx)(r.td,{children:"Move window directionally"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Up/Down/Left/Right"})}),(0,s.jsx)(r.td,{children:"Resize window directionally"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + alt + Left/Right"})}),(0,s.jsx)(r.td,{children:"Resize while keeping the window's aspect ratio"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + G"})}),(0,s.jsx)(r.td,{children:"Teleport the window to center of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + G"})}),(0,s.jsx)(r.td,{children:"Teleport the window to centerY of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + G"})}),(0,s.jsx)(r.td,{children:"Teleport the window to centerX of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + H"})}),(0,s.jsx)(r.td,{children:"Teleport the window to Top left of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + K"})}),(0,s.jsx)(r.td,{children:"Teleport the window to Top right of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + J"})}),(0,s.jsx)(r.td,{children:"Teleport the window to Bottom left of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + L"})}),(0,s.jsx)(r.td,{children:"Teleport the window to Bottom right of the screen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + M"})}),(0,s.jsx)(r.td,{children:"Maximize window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + F"})}),(0,s.jsx)(r.td,{children:"Fullscreen window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + V"})}),(0,s.jsx)(r.td,{children:"Maximize vertically"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + V"})}),(0,s.jsx)(r.td,{children:"Maximize horizontally"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + H"})}),(0,s.jsx)(r.td,{children:"Maximize and move vertically to the left"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + L"})}),(0,s.jsx)(r.td,{children:"Maximize and move vertically to the right"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + J"})}),(0,s.jsx)(r.td,{children:"Maximize and move horizontally to the left"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + K"})}),(0,s.jsx)(r.td,{children:"Maximize and move horizontally to the right"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + ctrl + K"})}),(0,s.jsx)(r.td,{children:"Maximize and move : fold half vertically"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + ctrl + H"})}),(0,s.jsx)(r.td,{children:"Maximize and move : fold half horizontally"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + ctrl + J"})}),(0,s.jsx)(r.td,{children:"Maximize and move : unfold vertically"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + shift + ctrl + L"})}),(0,s.jsx)(r.td,{children:"Maximize and move : unfold horizontally"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + I"})}),(0,s.jsx)(r.td,{children:"Iconify the window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + A"})}),(0,s.jsx)(r.td,{children:"Make the window unkillable"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Z"})}),(0,s.jsx)(r.td,{children:"Raise or lower a window"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + T"})}),(0,s.jsx)(r.td,{children:"Make the window appear always on top"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + D"})}),(0,s.jsx)(r.td,{children:"Make the window stay on all workspaces"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Y"})}),(0,s.jsx)(r.td,{children:"Toggle sloppy"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + Space"})}),(0,s.jsx)(r.td,{children:"Make window half and centered"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"window-manager-1",children:"Window Manager"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + R"})}),(0,s.jsx)(r.td,{children:"Restart 2bwm"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + Q"})}),(0,s.jsx)(r.td,{children:"Quit 2bwm"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"misc-keys",children:"Misc Keys"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Keys"}),(0,s.jsx)(r.th,{children:"Action"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + M"})}),(0,s.jsx)(r.td,{children:"Open ncmpcpp with album art in terminal"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + L"})}),(0,s.jsx)(r.td,{children:"Trigger lockscreen"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)("kbd",{children:"super + P"})}),(0,s.jsx)(r.td,{children:"Run colorpicker"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,s.jsxs)(r.p,{children:["Here's few screenshots of ",(0,s.jsx)(r.code,{children:"2bwm"})," desktop. These'll give you an idea of the experience of 2bwm in Archcraft."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Desktop 1"}),(0,s.jsx)(r.th,{children:"Desktop 2"}),(0,s.jsx)(r.th,{children:"Desktop 3"}),(0,s.jsx)(r.th,{children:"Desktop 4"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_1.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_2.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_3.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_4.png",alt:"img"})})]})})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Desktop 5"}),(0,s.jsx)(r.th,{children:"Desktop 6"}),(0,s.jsx)(r.th,{children:"Desktop 7"}),(0,s.jsx)(r.th,{children:"Desktop 8"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_5.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_6.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_7.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_8.png",alt:"img"})})]})})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Desktop 9"}),(0,s.jsx)(r.th,{children:"Desktop 10"}),(0,s.jsx)(r.th,{children:"Desktop 11"}),(0,s.jsx)(r.th,{children:"Desktop 12"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_9.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_10.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_11.png",alt:"img"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/2bwm/desktop/desktop_12.png",alt:"img"})})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to change GTK theme, icons and cursor?"})}),(0,s.jsxs)(r.p,{children:["To change GTK theme, icons and cursor in 2bwm session, Edit ",(0,s.jsx)(r.code,{children:"/usr/share/archcraft/2bwm/xsettingsd"})," file and restart 2bwm to apply the changes."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ini",children:'Net/ThemeName "Nordic"\nNet/IconThemeName "Zafiro"\nGtk/CursorThemeName "Qogirr"\n'})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to manage multiple monitors and resolution in 2bwm?"})}),(0,s.jsxs)(r.p,{children:["If you use multiple monitors with 2bwm window manager, you can manage them by running ",(0,s.jsx)(r.em,{children:"Manager Monitors"})," or ",(0,s.jsx)(r.code,{children:"archcraft-randr"})," app."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Why Alacritty is not working on my computer?"})}),(0,s.jsx)(r.p,{children:"Since Alacritty is a OpenGL based terminal emulator, It may not work on some computer hardwares. You can make it work on such computers by following these methods :"}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Open alacritty with ",(0,s.jsx)(r.strong,{children:"LIBGL_ALWAYS_SOFTWARE=1"})," variable. Edit the keybindings/script launching alacritty and replace ",(0,s.jsx)(r.code,{children:"alacritty"})," with ",(0,s.jsx)(r.code,{children:"LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n",(0,s.jsxs)(r.li,{children:["Edit ",(0,s.jsx)(r.strong,{children:"/usr/share/applications/Alacritty.desktop"})," desktop file and replace ",(0,s.jsx)(r.code,{children:"Exec=alacritty"})," with ",(0,s.jsx)(r.code,{children:"Exec=env LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n"]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>d});n(7294);var s=n(512);const t={tabItem:"tabItem_Ymn6"};var i=n(5893);function d(e){let{children:r,hidden:n,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,d),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>y});var s=n(7294),t=n(512),i=n(2466),d=n(6550),c=n(469),l=n(1980),o=n(7392),a=n(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}(n);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function j(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:n}=e;const t=(0,d.k6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})}),[i,t])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,i=x(e),[d,l]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[o,h]=u({queryString:n,groupId:t}),[p,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,i]=(0,a.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),f=(()=>{const e=o??p;return j({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function w(e){let{className:r,block:n,selectedValue:s,selectValue:d,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),a=e=>{const r=e.currentTarget,n=l.indexOf(r),t=c[n].value;t!==s&&(o(r),d(t))},h=e=>{let r=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>l.push(e),onKeyDown:h,onClick:a,...i,className:(0,t.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:t}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function k(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(w,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function y(e){const r=(0,m.Z)();return(0,b.jsx)(k,{...e,children:h(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>d});var s=n(7294);const t={},i=s.createContext(t);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);