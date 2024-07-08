"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{3047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=n(4848),i=n(8453);const r={sidebar_position:1},d="Getting Started",o={id:"usage/config",title:"Getting Started",description:"It should be noted that Dice-Box can only accept simple dice notations or notation objects such as 2d20 or . Once the notation has been sent to Dice-Box using the roll method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit.",source:"@site/docs/usage/config.md",sourceDirName:"usage",slug:"/usage/config",permalink:"/docs/usage/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Common Objects",permalink:"/docs/usage/objects"}},c={},a=[{value:"Install the module",id:"install-the-module",level:2},{value:"Copy static assets",id:"copy-static-assets",level:3},{value:"Import the module",id:"import-the-module",level:2},{value:"ES Module",id:"es-module",level:3},{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Initialize",id:"initialize",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["It should be noted that Dice-Box can only accept simple dice notations or notation objects such as ",(0,s.jsx)(t.code,{children:"2d20"})," or ",(0,s.jsx)(t.code,{children:"{qty:2,sides:20}"}),". Once the notation has been sent to Dice-Box using the ",(0,s.jsx)(t.code,{children:"roll"})," method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit."]}),"\n",(0,s.jsxs)(t.p,{children:["This may seem overly simplistic because ",(0,s.jsx)(t.em,{children:(0,s.jsxs)(t.span,{className:"jargon-term",children:["TTRPG",(0,s.jsx)(t.span,{className:"jargon-info",children:"Table Top Role Playing Game"})]})})," rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing both the input and the output to determine the final result, such as ",(0,s.jsx)(t.strong,{children:"advantage"})," rolls, ",(0,s.jsx)(t.strong,{children:"exploding"})," rolls or ",(0,s.jsx)(t.strong,{children:"target"})," rolls, you'll need a parser to supply that functionality. @3D-dice supplies a module called ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-parser-interface",children:"Dice Parser Interface"})," which supports the full ",(0,s.jsx)(t.a,{href:"https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates",children:"Roll20 Dice Specification"}),". Read more about the ",(0,s.jsx)(t.a,{href:"/docs/addons/parser",children:"parser"})," in the addons section."]}),"\n",(0,s.jsx)(t.h2,{id:"install-the-module",children:"Install the module"}),"\n",(0,s.jsx)(t.p,{children:"The core library can be install from npm using:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install @3d-dice/dice-box\n"})}),"\n",(0,s.jsx)(t.h3,{id:"copy-static-assets",children:"Copy static assets"}),"\n",(0,s.jsxs)(t.p,{children:["When installing the library, the terminal will ask you to identify a destination for static assets. This defaults to ",(0,s.jsx)(t.code,{children:"/public/assets"})," and will timeout after 10 seconds. You can always manually move these files. They can be found in the ",(0,s.jsx)(t.code,{children:"@3d-dice/dice-box/src/assets"})," folder. Copy everything from this folder to your local static assets or public folder."]}),"\n",(0,s.jsx)(t.p,{children:"If you're using npm version 7 or later, postinstall scripts output are suppressed. This means you will not be prompted to pick a directory. Instead, you will have to move the static assets manually."}),"\n",(0,s.jsx)(t.h2,{id:"import-the-module",children:"Import the module"}),"\n",(0,s.jsx)(t.p,{children:"To import the module into a project with a build system (e.g.: vite or webpack):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import DiceBox from '@3d-dice/dice-box'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"es-module",children:"ES Module"}),"\n",(0,s.jsx)(t.p,{children:"This project is built as an ES module. To import Dice Box as an ES module:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/dice-box.es.min.js";\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If you plan on using the ",(0,s.jsx)(t.code,{children:"unpkg.com"})," CDN, then you'll also have to set the following config options. The drawback to this approach means you are limited to the default dice set (at the moment)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'  assetPath: "assets/",\n  origin: "https://unpkg.com/@3d-dice/dice-box@1.1.3/dist/",\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Code Sandbox Example: ",(0,s.jsx)(t.a,{href:"https://codesandbox.io/p/sandbox/dice-es6-module-cdn-forked-kjjhrl?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqzbzts700063b6gtwn6xgvx%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqzbzts700023b6g6vcw15hp%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqzbzts700033b6g9jzf4diw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqzbzts700053b6gy7b707sv%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B45.52808141267785%252C54.47191858732215%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqzbzts700023b6g6vcw15hp%2522%253A%257B%2522id%2522%253A%2522clqzbzts700023b6g6vcw15hp%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwv4eq3o00023b6h9o827qay%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clwv4eq3o00023b6h9o827qay%2522%257D%252C%2522clqzbzts700053b6gy7b707sv%2522%253A%257B%2522id%2522%253A%2522clqzbzts700053b6gy7b707sv%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqzbzts700043b6gtgdalbp8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clqzbzts700043b6gtgdalbp8%2522%257D%252C%2522clqzbzts700033b6g9jzf4diw%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqzbzts700033b6g9jzf4diw%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A10%257D",children:"Dice Box as ES Module"})]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-new-instance",children:"Create a new instance"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new instance of the ",(0,s.jsx)(t.code,{children:"DiceBox"})," class. The single argument",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," for the constructor is an object of config options. Be sure to set the path to the assets folder mentioned earlier. The ",(0,s.jsx)(t.code,{children:"assetPath"})," is the only required config option."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const diceBox = new DiceBox({\n  assetPath: '/assets/dice-box/' // include the trailing backslash\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,s.jsx)(t.p,{children:"These options can be passed into the constructor when creating a new instance of Dice-Box"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Default Setting"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"'dice-canvas'"}),(0,s.jsx)(t.td,{children:"The ID of the canvas element."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"assetPath"}),(0,s.jsx)(t.td,{children:"'/assets/'"}),(0,s.jsx)(t.td,{children:"The path to static assets needed by this module. *required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["container",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"document.body"})}),(0,s.jsx)(t.td,{children:"A query selector for the DOM element to place the dice box canvas in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gravity"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Too much gravity will cause the dice to jitter. Too little and they take much longer to settle."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mass"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"The mass of the dice. Affects how forces act on the dice such as spin"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"friction"}),(0,s.jsx)(t.td,{children:".8"}),(0,s.jsx)(t.td,{children:"The friction of the dice and the surface they roll on"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"restitution"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"The bounciness of the dice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"angularDamping"}),(0,s.jsx)(t.td,{children:".4"}),(0,s.jsx)(t.td,{children:"Determines how quickly the dice lose their spin (angular momentum)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"linearDamping"}),(0,s.jsx)(t.td,{children:".4"}),(0,s.jsx)(t.td,{children:"Determines how quickly the dice lose their linear momentum"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spinForce"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"The maximum amount of spin the dice may have"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"throwForce"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"The maximum amount of throwing force used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startingHeight"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"The height at which the toss begins"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"settleTimeout"}),(0,s.jsx)(t.td,{children:"5000"}),(0,s.jsx)(t.td,{children:"Time in ms before a die is stopped from moving"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offscreen"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"If offscreenCanvas is available it will be used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"delay"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"The delay between dice being generate. If they're all generated at the same time they instantly collide with each other which doesn't look very natural."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lightIntensity"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Global illumination levels"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enableShadows"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"Do the dice cast a shadow? Turn off for a performance bump"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shadowTransparency"}),(0,s.jsx)(t.td,{children:".8"}),(0,s.jsx)(t.td,{children:"Set the transparency of the shadows cast by the dice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:"'default'"}),(0,s.jsxs)(t.td,{children:["For additional themes see ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-themes",children:"@3d-dice/dice-themes"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["preloadThemes",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,s.jsx)(t.td,{children:"[]"}),(0,s.jsx)(t.td,{children:"An array of themes to pre-load. Useful for themes that extend other themes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["externalThemes",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"An object with theme system names as the key value and an external url path to theme assets. Useful for accessing themes on a CDN."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"themeColor"}),(0,s.jsx)(t.td,{children:"'#2e8555'"}),(0,s.jsx)(t.td,{children:"Some themes allow for a configurable base color as a HEX value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scale"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"suspendSimulation"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Turn off the 3D simulation and use the built-in random number generator instead."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"origin"}),(0,s.jsx)(t.td,{children:"location.origin"}),(0,s.jsx)(t.td,{children:"Sets the site origin used for constructing paths to assets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["onBeforeRoll",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered after notation has been parsed, but before the roll starts"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onDieComplete"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered whenever an individual die has completed rolling"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onRollComplete"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered whenever all the dice have completed rolling"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onRemoveComplete"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered whenever a die has been removed from the scene"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onThemeConfigLoaded"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered after a theme config file has been successfully fetched and parsed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onThemeLoaded"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered after a theme has finished loading all related assets"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"initialize",children:"Initialize"}),"\n",(0,s.jsxs)(t.p,{children:["After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a ",(0,s.jsx)(t.code,{children:".then()"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"diceBox.init().then(()=>{\n  diceBox.roll('2d20')\n})\n"})}),"\n",(0,s.jsxs)(t.p,{children:["or, since ",(0,s.jsx)(t.code,{children:"init"})," is a Promise, it can be awaited:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"await diceBox.init()\ndiceBox.roll('2d20')\n"})}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["new in ",(0,s.jsx)(t.code,{children:"v1.1.x"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-1-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"2"})]})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-1-3","data-footnote-backref":"","aria-label":"Back to reference 1-3",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"3"})]})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-1-4","data-footnote-backref":"","aria-label":"Back to reference 1-4",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"4"})]})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-1-5","data-footnote-backref":"","aria-label":"Back to reference 1-5",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"5"})]})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);