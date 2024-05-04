"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[9571],{65514:(e,n,r)=>{r.r(n),r.d(n,{Highlight:()=>a,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(85893),i=r(11151);r(74866),r(85162);const t={sidebar_position:3,hide_table_of_contents:!1},d="Berry",c={id:"window-managers/stacking-wm/berry",title:"Berry",description:"Bite-sized window manager written in C. It is controlled via a command-line client, allowing users to control windows via a hotkey daemon such as sxhkd or expand functionality via shell scripts. It provides extensible theming options with double borders, title bars, and window text. Berry places new windows in unoccupied spaces and supports virtual desktops.",source:"@site/docs/window-managers/stacking-wm/berry.mdx",sourceDirName:"window-managers/stacking-wm",slug:"/window-managers/stacking-wm/berry",permalink:"/docs/window-managers/stacking-wm/berry",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/stacking-wm/berry.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"2bwm",permalink:"/docs/window-managers/stacking-wm/2bwm"},next:{title:"Blackbox",permalink:"/docs/window-managers/stacking-wm/blackbox"}},o={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Config Structure",id:"config-structure",level:3},{value:"Terminal",id:"terminal",level:3},{value:"Notification",id:"notification",level:3},{value:"Wallpaper",id:"wallpaper",level:3},{value:"Statusbar",id:"statusbar",level:3},{value:"Launchers and Applets",id:"launchers-and-applets",level:3},{value:"Compositor",id:"compositor",level:3},{value:"Window Manager",id:"window-manager",level:3},{value:"Keybindings",id:"keybindings",level:2},{value:"Applications",id:"applications",level:3},{value:"Menu and Applets",id:"menu-and-applets",level:3},{value:"Hardware Keys",id:"hardware-keys",level:3},{value:"Workspaces",id:"workspaces",level:3},{value:"Window Management",id:"window-management",level:3},{value:"Window Manager",id:"window-manager-1",level:3},{value:"Misc Keys",id:"misc-keys",level:3},{value:"Screenshots",id:"screenshots",level:2},{value:"FAQs",id:"faqs",level:2}],a=({children:e,color:n})=>{const r={span:"span",...(0,i.a)()};return(0,s.jsx)(r.span,{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"},children:e})};function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"berry",children:"Berry"}),"\n","\n","\n","\n",(0,s.jsx)(n.p,{children:"Bite-sized window manager written in C. It is controlled via a command-line client, allowing users to control windows via a hotkey daemon such as sxhkd or expand functionality via shell scripts. It provides extensible theming options with double borders, title bars, and window text. Berry places new windows in unoccupied spaces and supports virtual desktops."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/main.png",alt:"img"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Once you finish installing Archcraft, ",(0,s.jsx)(n.strong,{children:"Berry"})," can be installed on the top of it. It's pre-configured and ready to go. Open a terminal and run the following command to install Berry :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -Sy archcraft-berry\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Berry is pre-configured in Archcraft. In this section, We'll see how the Berry window manager is configured, what tools and utilities are used to make it look and work like a complete desktop environment."}),"\n",(0,s.jsx)(n.h3,{id:"config-structure",children:"Config Structure"}),"\n",(0,s.jsx)(n.p,{children:"The configuration structure of Berry in Archcraft looks something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"~/.config\n\u2514\u2500\u2500 berry           : berry config directory\n    \u251c\u2500\u2500 alacritty   : terminal config\n    \u251c\u2500\u2500 scripts     : scripts used for berry\n    \u251c\u2500\u2500 theme       : desktop theme (polybar, rofi configs) \n    \u251c\u2500\u2500 autostart   : main berry config file\n    \u251c\u2500\u2500 dunstrc     : dunst config for notifications\n    \u251c\u2500\u2500 picom.conf  : compositor config\n    \u251c\u2500\u2500 sxhkdrc     : keybindings config\n    \u2514\u2500\u2500 xsettingsd  : gtk themes, icons and fonts config file\n"})}),"\n",(0,s.jsx)(n.h3,{id:"terminal",children:"Terminal"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Alacritty"})," is the default terminal. In the Berry window manager, alacritty is launched with an alternative config file. If you need to change anything, make sure you modify the config files in ",(0,s.jsx)(n.code,{children:"~/.config/berry/alacritty"})," directory. These are the following config files you can modify to change the behaviour of your terminal:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.config/berry/alacritty/alacritty.toml"})})," : Main configuration file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.config/berry/alacritty/colors.toml"})})," : Colors configurations ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.config/berry/alacritty/fonts.toml"})})," : Fonts configurations"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with alacritty config, run : ",(0,s.jsx)(n.code,{children:"man 5 alacritty"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"notification",children:"Notification"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dunst"})," is used as a notification daemon for notifications in Berry. In the Berry window manager, dunst is launched with an alternative config file, which is ",(0,s.jsx)(n.code,{children:"~/.config/berry/dunstrc"}),". So, If you need to modify anything, make sure you edit this file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with dunst config, run : ",(0,s.jsx)(n.code,{children:"man 5 dunst"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wallpaper",children:"Wallpaper"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hsetroot"})," sets the wallpaper in the Berry. If you want to change the wallpaper, Edit ",(0,s.jsx)(n.code,{children:"~/.config/berry/scripts/berry_autostart"})," script and add the path to your wallpaper :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Restore wallpaper\nhsetroot -cover '/path/to/your/wallpaper'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"statusbar",children:"Statusbar"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Polybar"})," is used as the statusbar in Archcraft's Berry window manager."]}),"\n",(0,s.jsxs)(n.p,{children:["The configurations for polybar can be found inside the ",(0,s.jsx)(n.em,{children:"theme"})," directory directory of Berry ",(0,s.jsx)(n.code,{children:"~/.config/berry/theme"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to modify the ",(0,s.jsx)(n.strong,{children:"polybar"})," settings, or perhaps want to add/remove modules, then you need to edit the following files :"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.config/berry/theme/polybar/config.ini"})})," : Main config file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.config/berry/theme/polybar/colors.ini"})})," : Colors config file ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"~/.config/berry/theme/polybar/modules.ini"})})," : Modules config file"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with polybar config, visit : ",(0,s.jsx)(n.a,{href:"https://github.com/polybar/polybar/wiki",children:"polybar wiki"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"launchers-and-applets",children:"Launchers and Applets"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rofi"})," is used for application launchers, command runner and various applets. To modify the rofi config, edit ",(0,s.jsx)(n.code,{children:"~/.config/rofi/config.rasi"})," file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with rofi config, run : ",(0,s.jsx)(n.code,{children:"man rofi"})," in terminal."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The scripts for rofi that are used in Berry can be found it ",(0,s.jsx)(n.code,{children:"~/.config/berry/scripts"})," directory. These are the following scripts that uses rofi to provide the launchers and applets in Berry :"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_askpass"})})," : rofi based ",(0,s.jsx)(n.code,{children:"sudo"})," frontend to get root password ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_asroot"})})," : applet to open apps as root ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_bluetooth"})})," : bluetooth applet to quickly connect to BT devices ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_launcher"})})," : an application launcher, cmd runner, file manager and task manager  ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_music"})})," : music applet, that controls MPD with ",(0,s.jsx)(n.code,{children:"mpc"})," ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_powermenu"})})," : power menu, with confirmation dialog ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_runner"})})," : quickly lets you run a command ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_screenshot"})})," : screenshot applet that works with maim ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rofi_windows"})})," : applet to manage opened windows ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"If you want to modify any applet or perhaps want to extend the functionality of the applet, just edit these scripts above."}),"\n",(0,s.jsxs)(n.p,{children:["The configuration of each script can be found inside the ",(0,s.jsx)(n.em,{children:"theme"})," directory of Berry ",(0,s.jsx)(n.code,{children:"~/.config/berry/theme"})]}),"\n",(0,s.jsxs)(n.p,{children:["Let's say you want to modify the looks of ",(0,s.jsx)(n.strong,{children:"launcher"}),", then you need to edit the ",(0,s.jsx)(n.code,{children:"~/.config/berry/theme/rofi/launcher.rasi"})," file. Same goes for every other applet, Edit the respective file in the same directory."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with rofi theming, run : ",(0,s.jsx)(n.code,{children:"man rofi-theme"})," in terminal."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To change the colors and fonts of the launchers and applets, Edit the ",(0,s.jsx)(n.code,{children:"~/.config/berry/theme/rofi/shared/colors.rasi"})," and ",(0,s.jsx)(n.code,{children:"~/.config/berry/theme/rofi/shared/fonts.rasi"})," files."]}),"\n",(0,s.jsx)(n.h3,{id:"compositor",children:"Compositor"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Picom"})," is used for compositing. It's a lightweight compositor with shadowing, advanced blurring and fading. In Berry, picom is launched with an alternative config file, which is ",(0,s.jsx)(n.code,{children:"~/.config/berry/picom.conf"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to change anything related to picom, Edit this picom config file."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with picom config, check the picom's default config file in ",(0,s.jsx)(n.code,{children:"/etc/xdg/picom.conf"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you're having screen-tearing issues, using ",(0,s.jsx)(n.code,{children:"glx"})," backend can solve this issue. ",(0,s.jsx)("br",{}),"\nIf you're facing lagging, hangs and freezes, try switching between ",(0,s.jsx)(n.code,{children:"xrender"})," and ",(0,s.jsx)(n.code,{children:"glx"})," backend."]})}),"\n",(0,s.jsx)(n.h3,{id:"window-manager",children:"Window Manager"}),"\n",(0,s.jsxs)(n.p,{children:["The configuration of Berry is available in ",(0,s.jsx)(n.code,{children:"~/.config/berry"}),". To configure Berry window manager, these are the files that are used :"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"autostart"})})," : main configuration file responsible for determining the behaviour and settings of the overall session. Edit this file to configure Berry's appearance. ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"sxhkdrc"})})," : Berry does not handle any keyboard input and instead provides the ",(0,s.jsx)(n.code,{children:"berryc"})," program as its interface. So, For keyboard shortcuts, a hotkey daemon ",(0,s.jsx)(n.code,{children:"sxhkd"})," is used. Edit this file to add/remove keybindings."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need any help with berry configuration, visit : ",(0,s.jsx)(n.a,{href:"https://berrywm.org/",children:"berrywm.org"})," ",(0,s.jsx)("br",{}),"\nIf you need any help with sxhkd configuration, run : ",(0,s.jsx)(n.code,{children:"man sxhkd"})," in terminal."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keybindings",children:"Keybindings"}),"\n",(0,s.jsxs)(n.p,{children:["Here's a list of some important keybinds you need to know for operating Berry easily. If you want to view, modify or add new keybinds, Edit ",(0,s.jsx)(n.code,{children:"~/.config/berry/sxhkdrc"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Return"})}),(0,s.jsx)(n.td,{children:"Open terminal (alacritty)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Return"})}),(0,s.jsx)(n.td,{children:"Open fullscreen terminal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + F"})}),(0,s.jsx)(n.td,{children:"Open file manager (thunar)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + E"})}),(0,s.jsx)(n.td,{children:"Open text editor (geany)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + W"})}),(0,s.jsx)(n.td,{children:"Open web browser (firefox)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"menu-and-applets",children:"Menu and Applets"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super"})}),(0,s.jsx)(n.td,{children:"Open application launcher"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + F1"})}),(0,s.jsx)(n.td,{children:"Open application launcher"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + F2"})}),(0,s.jsx)(n.td,{children:"Open command runner"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + N"})}),(0,s.jsx)(n.td,{children:"Open network manager applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + B"})}),(0,s.jsx)(n.td,{children:"Open bluetooth applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + M"})}),(0,s.jsx)(n.td,{children:"Open music applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + X"})}),(0,s.jsx)(n.td,{children:"Open powermenu applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + S"})}),(0,s.jsx)(n.td,{children:"Open screenshots applet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + R"})}),(0,s.jsx)(n.td,{children:"Open apps as root applet"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"hardware-keys",children:"Hardware Keys"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot in 5 seconds delay"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"shift + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot in 10 seconds delay"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot of currently focused window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Print"})}),(0,s.jsx)(n.td,{children:"Take screenshot of selected area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioRaiseVolume"})}),(0,s.jsx)(n.td,{children:"Increase volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioLowerVolume"})}),(0,s.jsx)(n.td,{children:"Decrease volume"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioMute"})}),(0,s.jsx)(n.td,{children:"Toggle mute speakers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86AudioMicMute"})}),(0,s.jsx)(n.td,{children:"Toggle mute microphone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86Audio + Next/Prev/Play/Stop"})}),(0,s.jsx)(n.td,{children:"Media controls (MPD)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86MonBrightnessUp"})}),(0,s.jsx)(n.td,{children:"Increase display brightness"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"XF86MonBrightnessDown"})}),(0,s.jsx)(n.td,{children:"Decrease display brightness"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"workspaces",children:"Workspaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + 1..9"})}),(0,s.jsx)(n.td,{children:"Switch to respective workspace"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + 1..9"})}),(0,s.jsx)(n.td,{children:"Send focused window to respective workspace"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"window-management",children:"Window Management"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Left/Down/Up/Right"})}),(0,s.jsx)(n.td,{children:"Resize window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + ctrl + Left/Down/Up/Right"})}),(0,s.jsx)(n.td,{children:"Move window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Left"})}),(0,s.jsx)(n.td,{children:"Snap left"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Right"})}),(0,s.jsx)(n.td,{children:"Snap right"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Up"})}),(0,s.jsx)(n.td,{children:"Maximize window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Down"})}),(0,s.jsx)(n.td,{children:"Resize and center window with fixed geometry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Space"})}),(0,s.jsx)(n.td,{children:"Toggle fullscreen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + T"})}),(0,s.jsx)(n.td,{children:"Toggle decorations"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Tab"})}),(0,s.jsx)(n.td,{children:"Cycle focused windows"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"alt + Tab"})}),(0,s.jsx)(n.td,{children:"Cycle focused windows"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + C"})}),(0,s.jsx)(n.td,{children:"Center window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Q"})}),(0,s.jsx)(n.td,{children:"Close focused window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + C"})}),(0,s.jsx)(n.td,{children:"Close focused window"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"window-manager-1",children:"Window Manager"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + shift + Q"})}),(0,s.jsx)(n.td,{children:"Quit berry"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + Escape"})}),(0,s.jsx)(n.td,{children:"Reload sxhkd configuration file"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"misc-keys",children:"Misc Keys"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Keys"}),(0,s.jsx)(n.th,{children:"Action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + M"})}),(0,s.jsx)(n.td,{children:"Open ncmpcpp with album art in terminal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"ctrl + alt + L"})}),(0,s.jsx)(n.td,{children:"Trigger lockscreen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("kbd",{children:"super + P"})}),(0,s.jsx)(n.td,{children:"Run colorpicker"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,s.jsxs)(n.p,{children:["Here's few screenshots of ",(0,s.jsx)(n.code,{children:"Berry"})," desktop. These'll give you an idea of the experience of Berry in Archcraft."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Desktop 1"}),(0,s.jsx)(n.th,{children:"Desktop 2"}),(0,s.jsx)(n.th,{children:"Desktop 3"}),(0,s.jsx)(n.th,{children:"Desktop 4"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_1.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_2.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_3.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_4.png",alt:"img"})})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Desktop 5"}),(0,s.jsx)(n.th,{children:"Desktop 6"}),(0,s.jsx)(n.th,{children:"Desktop 7"}),(0,s.jsx)(n.th,{children:"Desktop 8"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_5.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_6.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_7.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_8.png",alt:"img"})})]})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Desktop 9"}),(0,s.jsx)(n.th,{children:"Desktop 10"}),(0,s.jsx)(n.th,{children:"Desktop 11"}),(0,s.jsx)(n.th,{children:"Desktop 12"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_9.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_10.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_11.png",alt:"img"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/berry/desktop/desktop_12.png",alt:"img"})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to update my config to new configs?"})}),(0,s.jsxs)(n.p,{children:["When a new version of Archcraft Berry get released, And you update the system by ",(0,s.jsx)(n.code,{children:"sudo pacman -Syu"})," or you update the Berry package by ",(0,s.jsx)(n.code,{children:"sudo pacman -S archcraft-berry"}),", New config files get installed as ",(0,s.jsx)(n.strong,{children:"berry_pacnew_YYYY-MM-DD"})," in your ",(0,s.jsx)(n.code,{children:"~/.config"})," directory."]}),(0,s.jsxs)(n.p,{children:["To use new configs, backup your old ",(0,s.jsx)(n.code,{children:"~/.config/berry"})," directory and move ",(0,s.jsx)(n.code,{children:"~/.config/berry_pacnew_YYYY-MM-DD"})," to ",(0,s.jsx)(n.code,{children:"~/.config/berry"})," and login again."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to change GTK theme, icons and cursor?"})}),(0,s.jsxs)(n.p,{children:["To change GTK theme, icons and cursor in Berry session, Edit ",(0,s.jsx)(n.code,{children:"~/.config/berry/xsettingsd"})," file and restart Berry to apply the changes."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Net/ThemeName "Catppuccin-Mocha"\nNet/IconThemeName "Luv-Folders-Dark"\nGtk/CursorThemeName "Sweet"\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"How to manage multiple monitors and resolution in Berry?"})}),(0,s.jsxs)(n.p,{children:["If you use multiple monitors with Berry window manager, you can manage them by running ",(0,s.jsx)(n.em,{children:"Manager Monitors"})," or ",(0,s.jsx)(n.code,{children:"archcraft-randr"})," app."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Why Alacritty is not working on my computer?"})}),(0,s.jsx)(n.p,{children:"Since Alacritty is a OpenGL based terminal emulator, It may not work on some computer hardwares. You can make it work on such computers by following these methods :"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open alacritty with ",(0,s.jsx)(n.strong,{children:"LIBGL_ALWAYS_SOFTWARE=1"})," variable. Edit the keybindings/script launching alacritty and replace ",(0,s.jsx)(n.code,{children:"alacritty"})," with ",(0,s.jsx)(n.code,{children:"LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n",(0,s.jsxs)(n.li,{children:["Edit ",(0,s.jsx)(n.strong,{children:"/usr/share/applications/Alacritty.desktop"})," desktop file and replace ",(0,s.jsx)(n.code,{children:"Exec=alacritty"})," with ",(0,s.jsx)(n.code,{children:"Exec=env LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>d});r(67294);var s=r(90512);const i={tabItem:"tabItem_Ymn6"};var t=r(85893);function d(e){let{children:n,hidden:r,className:d}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,d),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var s=r(67294),i=r(90512),t=r(12466),d=r(16550),c=r(20469),o=r(91980),l=r(67392),a=r(50012);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const i=(0,d.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,t=x(e),[d,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[l,h]=j({queryString:r,groupId:i}),[p,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,a.Nk)(r);return[i,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:i}),m=(()=>{const e=l??p;return u({value:e,tabValues:t})?e:null})();(0,c.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,t]),tabValues:t}}var f=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function b(e){let{className:n,block:r,selectedValue:s,selectValue:d,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.o5)(),a=e=>{const n=e.currentTarget,r=o.indexOf(n),i=c[r].value;i!==s&&(l(n),d(i))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:a,...t,className:(0,i.Z)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:i}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var s=r(67294);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);