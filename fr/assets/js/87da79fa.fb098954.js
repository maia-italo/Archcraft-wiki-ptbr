"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[6007],{7393:(e,n,r)=>{r.r(n),r.d(n,{Highlight:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=r(5893),i=r(1151);r(4866),r(5162);const t={sidebar_position:5,hide_table_of_contents:!1},c="CWM",d={id:"window-managers/stacking-wm/cwm",title:"CWM",description:"cwm is an X11 window manager with a focus on getting out of your way so you can be productive. It was originally derived from evilwm, but the codebase has since been re-written from scratch.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/window-managers/stacking-wm/cwm.mdx",sourceDirName:"window-managers/stacking-wm",slug:"/window-managers/stacking-wm/cwm",permalink:"/fr/docs/window-managers/stacking-wm/cwm",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/stacking-wm/cwm.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Blackbox",permalink:"/fr/docs/window-managers/stacking-wm/blackbox"},next:{title:"EvilWM",permalink:"/fr/docs/window-managers/stacking-wm/evilwm"}},l={},o=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Config Structure",id:"config-structure",level:3},{value:"Terminal",id:"terminal",level:3},{value:"Notification",id:"notification",level:3},{value:"Wallpaper",id:"wallpaper",level:3},{value:"Statusbar",id:"statusbar",level:3},{value:"Launchers and Applets",id:"launchers-and-applets",level:3},{value:"Compositor",id:"compositor",level:3},{value:"Window Manager",id:"window-manager",level:3},{value:"Keybindings",id:"keybindings",level:2},{value:"Applications",id:"applications",level:3},{value:"Menu and Applets",id:"menu-and-applets",level:3},{value:"Hardware Keys",id:"hardware-keys",level:3},{value:"Groups",id:"groups",level:3},{value:"Window Management",id:"window-management",level:3},{value:"Window Manager",id:"window-manager-1",level:3},{value:"Misc Keys",id:"misc-keys",level:3},{value:"Mouse Bindings",id:"mouse-bindings",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"FAQs",id:"faqs",level:2}],h=({children:e,color:n})=>{const r={span:"span",...(0,i.a)()};return(0,s.jsx)(r.span,{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"},children:e})};function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cwm",children:"CWM"}),"\n","\n","\n","\n",(0,s.jsx)(n.p,{children:"cwm is an X11 window manager with a focus on getting out of your way so you can be productive. It was originally derived from evilwm, but the codebase has since been re-written from scratch."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/main.png",alt:"img"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Once you finish installing Archcraft, ",(0,s.jsx)(n.strong,{children:"cwm"})," can be installed on the top of it. It's pre-configured and ready to go. Open a terminal and run the following command to install cwm :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -Sy archcraft-cwm\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"cwm is pre-configured in Archcraft. In this section, We'll see how the cwm window manager is configured, what tools and utilities are used to make it look and work like a complete desktop environment."}),"\n",(0,s.jsx)(n.h3,{id:"config-structure",children:"Config Structure"}),"\n",(0,s.jsx)(n.p,{children:"The configuration structure of cwm in Archcraft looks something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/usr/bin/run-cwm   : Autostart programs\n~/.cwmrc           : main cwm config file\n~/.cwm             : cwm config directory\n\u251c\u2500\u2500 alacritty      : terminal config\n\u251c\u2500\u2500 scripts        : scripts used for cwm\n\u251c\u2500\u2500 theme          : desktop theme (polybar, rofi configs) \n\u251c\u2500\u2500 dunstrc        : dunst config for notifications\n\u251c\u2500\u2500 picom.conf     : compositor config\n\u2514\u2500\u2500 xsettingsd     : gtk themes, icons and fonts config file\n"})}),"\n",(0,s.jsx)(n.h3,{id:"terminal",children:"Terminal"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Alacritty"})," is the default terminal. In the cwm window manager, alacritty is launched with an alternative config file. If you need to change anything, make sure you modify the config files in ",(0,s.jsx)(n.code,{children:"~/.cwm/alacritty"})," directory. These are the following config files you can modify to change the behaviour of your terminal:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwm/alacritty/alacritty.toml"})})," : Main configuration file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwm/alacritty/colors.toml"})})," : Colors configurations ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwm/alacritty/fonts.toml"})})," : Fonts configurations"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with alacritty config, run : ",(0,s.jsx)(n.code,{children:"man 5 alacritty"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"notification",children:"Notification"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dunst"})," is used as a notification daemon for notifications in cwm. In the cwm window manager, dunst is launched with an alternative config file, which is ",(0,s.jsx)(n.code,{children:"~/.cwm/dunstrc"}),". So, If you need to modify anything, make sure you edit this file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with dunst config, run : ",(0,s.jsx)(n.code,{children:"man 5 dunst"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wallpaper",children:"Wallpaper"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hsetroot"})," sets the wallpaper in the cwm. If you want to change the wallpaper, Edit ",(0,s.jsx)(n.code,{children:"/usr/bin/run-cwm"})," script and add the path to your wallpaper :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Restore wallpaper\nhsetroot -cover '/path/to/your/wallpaper'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"statusbar",children:"Statusbar"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Polybar"})," is used as the statusbar in Archcraft's cwm window manager."]}),"\n",(0,s.jsxs)(n.p,{children:["The configurations for polybar can be found inside the ",(0,s.jsx)(n.em,{children:"theme"})," directory directory of cwm ",(0,s.jsx)(n.code,{children:"~/.cwm/theme"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to modify the ",(0,s.jsx)(n.strong,{children:"polybar"})," settings, or perhaps want to add/remove modules, then you need to edit the following files :"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwm/theme/polybar/config.ini"})})," : Main config file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwm/theme/polybar/colors.ini"})})," : Colors config file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwm/theme/polybar/modules.ini"})})," : Modules config file"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with polybar config, visit : ",(0,s.jsx)(n.a,{href:"https://github.com/polybar/polybar/wiki",children:"polybar wiki"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"launchers-and-applets",children:"Launchers and Applets"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rofi"})," is used for application launchers, command runner and various applets. To modify the rofi config, edit ",(0,s.jsx)(n.code,{children:"~/.config/rofi/config.rasi"})," file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with rofi config, run : ",(0,s.jsx)(n.code,{children:"man rofi"})," in terminal."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The scripts for rofi that are used in cwm can be found it ",(0,s.jsx)(n.code,{children:"~/.cwm/scripts"})," directory. These are the following scripts that uses rofi to provide the launchers and applets in cwm :"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_askpass"})})," : rofi based ",(0,s.jsx)(n.code,{children:"sudo"})," frontend to get root password ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_asroot"})})," : applet to open apps as root ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_bluetooth"})})," : bluetooth applet to quickly connect to BT devices ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_launcher"})})," : an application launcher, cmd runner, file manager and task manager  ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_music"})})," : music applet, that controls MPD with ",(0,s.jsx)(n.code,{children:"mpc"})," ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_powermenu"})})," : power menu, with confirmation dialog ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_runner"})})," : quickly lets you run a command ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_screenshot"})})," : screenshot applet that works with maim ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"If you want to modify any applet or perhaps want to extend the functionality of the applet, just edit these scripts above."}),"\n",(0,s.jsxs)(n.p,{children:["The configuration of each script can be found inside the ",(0,s.jsx)(n.em,{children:"theme"})," directory of cwm ",(0,s.jsx)(n.code,{children:"~/.cwm/theme"})]}),"\n",(0,s.jsxs)(n.p,{children:["Let's say you want to modify the looks of ",(0,s.jsx)(n.strong,{children:"launcher"}),", then you need to edit the ",(0,s.jsx)(n.code,{children:"~/.cwm/theme/rofi/launcher.rasi"})," file. Same goes for every other applet, Edit the respective file in the same directory."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with rofi theming, run : ",(0,s.jsx)(n.code,{children:"man rofi-theme"})," in terminal."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To change the colors and fonts of the launchers and applets, Edit the ",(0,s.jsx)(n.code,{children:"~/.cwm/theme/rofi/shared/colors.rasi"})," and ",(0,s.jsx)(n.code,{children:"~/.cwm/theme/rofi/shared/fonts.rasi"})," files."]}),"\n",(0,s.jsx)(n.h3,{id:"compositor",children:"Compositor"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Picom"})," is used for compositing. It's a lightweight compositor with shadowing, advanced blurring and fading. In cwm, picom is launched with an alternative config file, which is ",(0,s.jsx)(n.code,{children:"~/.cwm/picom.conf"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to change anything related to picom, Edit this picom config file."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with picom config, check the picom's default config file in ",(0,s.jsx)(n.code,{children:"/etc/xdg/picom.conf"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you're having screen-tearing issues, using ",(0,s.jsx)(n.code,{children:"glx"})," backend can solve this issue. ",(0,s.jsx)("br",{}),"\nIf you're facing lagging, hangs and freezes, try switching between ",(0,s.jsx)(n.code,{children:"xrender"})," and ",(0,s.jsx)(n.code,{children:"glx"})," backend."]})}),"\n",(0,s.jsx)(n.h3,{id:"window-manager",children:"Window Manager"}),"\n",(0,s.jsx)(n.p,{children:"The configuration of cwm is available in your home directory. To configure cwm window manager, this is the main file that is used :"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.cwmrc"})})," : main configuration file responsible for determining the behaviour and settings of the overall session. Edit this file to configure keybindings, colors, menu and cwm appearance. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with cwm configuration, run : ",(0,s.jsx)(n.code,{children:"man cwm"})," and ",(0,s.jsx)(n.code,{children:"man cwmrc"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keybindings",children:"Keybindings"}),"\n",(0,s.jsxs)(n.p,{children:["Here's a list of some important keybinds you need to know for operating cwm easily. If you want to view, modify or add new keybinds, Edit ",(0,s.jsx)(n.code,{children:"~/.cwmrc"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Return"})}),(0,s.jsx)(n.td,{children:"Open terminal (alacritty)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Return"})}),(0,s.jsx)(n.td,{children:"Open fullscreen terminal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + F"})}),(0,s.jsx)(n.td,{children:"Open file manager (thunar)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + E"})}),(0,s.jsx)(n.td,{children:"Open text editor (geany)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + W"})}),(0,s.jsx)(n.td,{children:"Open web browser (firefox)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"menu-and-applets",children:"Menu and Applets"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super"})}),(0,s.jsx)(n.td,{children:"Open application launcher"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + F1"})}),(0,s.jsx)(n.td,{children:"Open application launcher"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + F2"})}),(0,s.jsx)(n.td,{children:"Open command runner"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + N"})}),(0,s.jsx)(n.td,{children:"Open network manager applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + B"})}),(0,s.jsx)(n.td,{children:"Open bluetooth applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + M"})}),(0,s.jsx)(n.td,{children:"Open music applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + X"})}),(0,s.jsx)(n.td,{children:"Open powermenu applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + S"})}),(0,s.jsx)(n.td,{children:"Open screenshots applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + R"})}),(0,s.jsx)(n.td,{children:"Open apps as root applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + ctrl + W"})}),(0,s.jsx)(n.td,{children:"Launch window search menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + ctrl + A"})}),(0,s.jsx)(n.td,{children:"Launch application search menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + ctrl + G"})}),(0,s.jsx)(n.td,{children:"Launch group search menu"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"hardware-keys",children:"Hardware Keys"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot in 5 seconds delay"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"shift + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot in 10 seconds delay"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot of currently focused window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot of selected area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioRaiseVolume"})}),(0,s.jsx)(n.td,{children:"Increase volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioLowerVolume"})}),(0,s.jsx)(n.td,{children:"Decrease volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioMute"})}),(0,s.jsx)(n.td,{children:"Toggle mute speakers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioMicMute"})}),(0,s.jsx)(n.td,{children:"Toggle mute microphone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86MonBrightnessUp"})}),(0,s.jsx)(n.td,{children:"Increase display brightness"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86MonBrightnessDown"})}),(0,s.jsx)(n.td,{children:"Decrease display brightness"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"groups",children:"Groups"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + NUM"})}),(0,s.jsx)(n.td,{children:"Show only group NUM, where NUM is 1-9, hiding other groups"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + NUM"})}),(0,s.jsx)(n.td,{children:"Hide current window from display and move to group NUM, where NUM is 1-9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + alt + NUM"})}),(0,s.jsx)(n.td,{children:"Toggle visibility of group NUM, where NUM is 1-9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + NUM"})}),(0,s.jsx)(n.td,{children:"Close all windows in group NUM, where NUM is 1-9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + B"})}),(0,s.jsx)(n.td,{children:"Show only the previously active group"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + A"})}),(0,s.jsx)(n.td,{children:"Toggle visibility of all groups"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + G"})}),(0,s.jsx)(n.td,{children:"Toggle group membership of current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + Right/Left"})}),(0,s.jsx)(n.td,{children:"Forward/Reverse cycle through groups"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"window-management",children:"Window Management"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + C/Q"})}),(0,s.jsx)(n.td,{children:"Close focused client"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Tab"})}),(0,s.jsx)(n.td,{children:"Forward/Reverse cycle through windows"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Tab"})}),(0,s.jsx)(n.td,{children:"Forward/Reverse cycle through windows in current group"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + I"})}),(0,s.jsx)(n.td,{children:"Hide current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + T"})}),(0,s.jsx)(n.td,{children:"Freeze current window geometry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + R"})}),(0,s.jsx)(n.td,{children:"Label current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + O"})}),(0,s.jsx)(n.td,{children:"Stick current window to all groups"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Space"})}),(0,s.jsx)(n.td,{children:"Fullscreen current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Space"})}),(0,s.jsx)(n.td,{children:"Maximize current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + V"})}),(0,s.jsx)(n.td,{children:"Vertically maximize current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + H"})}),(0,s.jsx)(n.td,{children:"Horizontally maximize current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + shift + V"})}),(0,s.jsx)(n.td,{children:"Vertically maximize current window placing it in left of the screen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + shift + H"})}),(0,s.jsx)(n.td,{children:"Horizontally maximize current window placing it at top of the screen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Left/Right/Up/Down"})}),(0,s.jsx)(n.td,{children:"Move window by 10px directionally"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + H/J/K/L"})}),(0,s.jsx)(n.td,{children:"Move window by 100px directionally"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + Left/Right/Up/Down"})}),(0,s.jsx)(n.td,{children:"Resize window by 10px directionally"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + H/J/K/L"})}),(0,s.jsx)(n.td,{children:"Resize window by 100px directionally"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Left/Right/Up/Down"})}),(0,s.jsx)(n.td,{children:"Snap window to the screen edges"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + H/J/K/L"})}),(0,s.jsx)(n.td,{children:"Snap window to the screen edges"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"window-manager-1",children:"Window Manager"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + R"})}),(0,s.jsx)(n.td,{children:"Restart CWM"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + Q"})}),(0,s.jsx)(n.td,{children:"Quit CWM"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"misc-keys",children:"Misc Keys"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + M"})}),(0,s.jsx)(n.td,{children:"Run ncmpcpp with album art"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + L"})}),(0,s.jsx)(n.td,{children:"Trigger lockscreen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + P"})}),(0,s.jsx)(n.td,{children:"Run colorpicker"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"mouse-bindings",children:"Mouse Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Button"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Button_1"})}),(0,s.jsx)(n.td,{children:"Raise current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Button_3"})}),(0,s.jsx)(n.td,{children:"Lower current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Button_2"})}),(0,s.jsx)(n.td,{children:"Hide current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Button_1"})}),(0,s.jsx)(n.td,{children:"Move current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Button_3"})}),(0,s.jsx)(n.td,{children:"Resize current window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Button_2"})}),(0,s.jsx)(n.td,{children:"Freeze current window geometry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Button_1"})}),(0,s.jsx)(n.td,{children:"Launch window search menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Button_3"})}),(0,s.jsx)(n.td,{children:"Launch application search menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Button_2"})}),(0,s.jsx)(n.td,{children:"Launch group search menu"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,s.jsxs)(n.p,{children:["Here's few screenshots of ",(0,s.jsx)(n.code,{children:"cwm"})," desktop. These'll give you an idea of the experience of cwm in Archcraft."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Desktop 1"}),(0,s.jsx)(n.th,{children:"Desktop 2"}),(0,s.jsx)(n.th,{children:"Desktop 3"}),(0,s.jsx)(n.th,{children:"Desktop 4"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_1.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_2.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_3.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_4.png",alt:"img"})})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Desktop 5"}),(0,s.jsx)(n.th,{children:"Desktop 6"}),(0,s.jsx)(n.th,{children:"Desktop 7"}),(0,s.jsx)(n.th,{children:"Desktop 8"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_5.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_6.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_7.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_8.png",alt:"img"})})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Desktop 9"}),(0,s.jsx)(n.th,{children:"Desktop 10"}),(0,s.jsx)(n.th,{children:"Desktop 11"}),(0,s.jsx)(n.th,{children:"Desktop 12"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_9.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_10.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_11.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/cwm/desktop/desktop_12.png",alt:"img"})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to update my config to new configs?"})}),(0,s.jsxs)(n.p,{children:["When a new version of Archcraft cwm get released, And you update the system by ",(0,s.jsx)(n.code,{children:"sudo pacman -Syu"})," or you update the cwm package by ",(0,s.jsx)(n.code,{children:"sudo pacman -S archcraft-cwm"}),", New config files get installed as ",(0,s.jsx)(n.strong,{children:"~/.cwm_pacnew_YYYY-MM-DD"})," and ",(0,s.jsx)(n.strong,{children:"~/.cwmrc_pacnew_YYYY-MM-DD"})," in your home directory."]}),(0,s.jsx)(n.p,{children:"To use new configs :"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["backup your old ",(0,s.jsx)(n.code,{children:"~/.cwm"})," directory and ",(0,s.jsx)(n.code,{children:"~/.cwmrc"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["move ",(0,s.jsx)(n.code,{children:"~/.cwm_pacnew_YYYY-MM-DD"})," to ",(0,s.jsx)(n.code,{children:"~/.cwm"})]}),"\n",(0,s.jsxs)(n.li,{children:["move ",(0,s.jsx)(n.code,{children:"~/.cwmrc_pacnew_YYYY-MM-DD"})," to ",(0,s.jsx)(n.code,{children:"~/.cwmrc"})]}),"\n",(0,s.jsx)(n.li,{children:"logout and login again."}),"\n"]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to change GTK theme, icons and cursor?"})}),(0,s.jsxs)(n.p,{children:["To change GTK theme, icons and cursor in cwm session, Edit ",(0,s.jsx)(n.code,{children:"~/.cwm/xsettingsd"})," file and restart cwm to apply the changes."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:'Net/ThemeName "Arc-Dark"\nNet/IconThemeName "Arc-Circle"\nGtk/CursorThemeName "Future"\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to manage multiple monitors and resolution in cwm?"})}),(0,s.jsxs)(n.p,{children:["If you use multiple monitors with cwm window manager, you can manage them by running ",(0,s.jsx)(n.em,{children:"Manager Monitors"})," or ",(0,s.jsx)(n.code,{children:"archcraft-randr"})," app."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Why Alacritty is not working on my computer?"})}),(0,s.jsx)(n.p,{children:"Since Alacritty is a OpenGL based terminal emulator, It may not work on some computer hardwares. You can make it work on such computers by following these methods :"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open alacritty with ",(0,s.jsx)(n.strong,{children:"LIBGL_ALWAYS_SOFTWARE=1"})," variable. Edit the keybindings/script launching alacritty and replace ",(0,s.jsx)(n.code,{children:"alacritty"})," with ",(0,s.jsx)(n.code,{children:"LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n",(0,s.jsxs)(n.li,{children:["Edit ",(0,s.jsx)(n.strong,{children:"/usr/share/applications/Alacritty.desktop"})," desktop file and replace ",(0,s.jsx)(n.code,{children:"Exec=alacritty"})," with ",(0,s.jsx)(n.code,{children:"Exec=env LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>c});r(7294);var s=r(512);const i={tabItem:"tabItem_Ymn6"};var t=r(5893);function c(e){let{children:n,hidden:r,className:c}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,c),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>k});var s=r(7294),i=r(512),t=r(2466),c=r(6550),d=r(469),l=r(1980),o=r(7392),h=r(12);function a(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return a(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const i=(0,c.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,t=x(e),[c,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,a]=j({queryString:r,groupId:i}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,h.Nk)(r);return[i,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:i}),f=(()=>{const e=o??p;return u({value:e,tabValues:t})?e:null})();(0,d.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),a(e),m(e)}),[a,m,t]),tabValues:t}}var m=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(5893);function g(e){let{className:n,block:r,selectedValue:s,selectValue:c,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),h=e=>{const n=e.currentTarget,r=l.indexOf(n),i=d[r].value;i!==s&&(o(n),c(i))},a=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:d.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:a,onClick:h,...t,className:(0,i.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=p(e);return(0,w.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,w.jsx)(g,{...e,...n}),(0,w.jsx)(b,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,w.jsx)(y,{...e,children:a(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(7294);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);