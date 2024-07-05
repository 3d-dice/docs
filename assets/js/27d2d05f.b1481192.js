"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4361],{7105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(4848),i=n(8453);const r={sidebar_position:1},d="Getting Started",c={id:"usage/config",title:"Getting Started",description:"It should be noted that Dice-Box can only accept simple dice notations or notation objects such as 2d20 or . Once the notation has been sent to Dice-Box using the roll method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit.",source:"@site/versioned_docs/version-1.0.14/usage/config.md",sourceDirName:"usage",slug:"/usage/config",permalink:"/docs/1.0.14/usage/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.14/usage/config.md",tags:[],version:"1.0.14",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Intro",permalink:"/docs/1.0.14/intro"},next:{title:"Common Objects",permalink:"/docs/1.0.14/usage/objects"}},o={},l=[{value:"Install the module",id:"install-the-module",level:2},{value:"Copy static assets",id:"copy-static-assets",level:3},{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Initialize",id:"initialize",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["It should be noted that Dice-Box can only accept simple dice notations or notation objects such as ",(0,s.jsx)(t.code,{children:"2d20"})," or ",(0,s.jsx)(t.code,{children:"{qty:2,sides:20}"}),". Once the notation has been sent to Dice-Box using the ",(0,s.jsx)(t.code,{children:"roll"})," method, it will kick off the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit."]}),"\n",(0,s.jsxs)(t.p,{children:["This may seem overly simplistic because ",(0,s.jsx)(t.em,{children:(0,s.jsxs)(t.span,{className:"jargon-term",children:["TTRPG",(0,s.jsx)(t.span,{className:"jargon-info",children:"Table Top Role Playing Game"})]})})," rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing both the input and the output to determine the final result, such as ",(0,s.jsx)(t.strong,{children:"advantage"})," rolls, ",(0,s.jsx)(t.strong,{children:"exploding"})," rolls or ",(0,s.jsx)(t.strong,{children:"target"})," rolls, you'll need a parser to supply that functionality. 3D-dice supplies one called ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-parser-interface",children:"Dice Parser Interface"})," which supports the full ",(0,s.jsx)(t.a,{href:"https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates",children:"Roll20 Dice Specification"}),". Read more about Dice Parser Interface in the addons section."]}),"\n",(0,s.jsx)(t.h2,{id:"install-the-module",children:"Install the module"}),"\n",(0,s.jsx)(t.p,{children:"The core library can be install from npm using:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install @3d-dice/dice-box\n"})}),"\n",(0,s.jsx)(t.h3,{id:"copy-static-assets",children:"Copy static assets"}),"\n",(0,s.jsxs)(t.p,{children:["When installing the library, the terminal will ask you to identify a destination for static assets. This defaults to ",(0,s.jsx)(t.code,{children:"/public/assets"})," and will timeout after 10 seconds. You can always manually move these files. They can be found in the ",(0,s.jsx)(t.code,{children:"@3d-dice/dice-box/src/assets"})," folder. Copy everything from this folder to your local static assets or public folder."]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-new-instance",children:"Create a new instance"}),"\n",(0,s.jsx)(t.p,{children:"Currently this project is an ES module intended to be part of a build system. To import the module into your project use:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import DiceBox from '@3d-dice/dice-box'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Create a new instance of the ",(0,s.jsx)(t.code,{children:"DiceBox"})," class. The two arguments for the constructor are a selector for the target DOM node followed by an object of config options. Be sure to set the path to the assets folder mentioned earlier. The ",(0,s.jsx)(t.code,{children:"assetPath"})," is the only required config option."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const diceBox = new DiceBox(\"#dice-box\", {\n  assetPath: '/assets/dice-box/' // include the trailing backslash\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,s.jsx)(t.p,{children:"These options can be passed into the constructor when creating a new instance of Dice-Box"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Default Setting"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"'dice-canvas'"}),(0,s.jsx)(t.td,{children:"The ID of the canvas element to use. If no canvas present then one will be created"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"assetPath"}),(0,s.jsx)(t.td,{children:"'/assets/'"}),(0,s.jsx)(t.td,{children:"The path to static assets needed by this module. *required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gravity"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Too much gravity will cause the dice to jitter. Too little and they take much longer to settle."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mass"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"The mass of the dice. Affects how forces act on the dice such as spin"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"friction"}),(0,s.jsx)(t.td,{children:".8"}),(0,s.jsx)(t.td,{children:"The friction of the dice and the surface they roll on"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"restitution"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"The bounciness of the dice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"angularDamping"}),(0,s.jsx)(t.td,{children:".4"}),(0,s.jsx)(t.td,{children:"Determines how quickly the dice lose their spin (angular momentum)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"linearDamping"}),(0,s.jsx)(t.td,{children:".4"}),(0,s.jsx)(t.td,{children:"Determines how quickly the dice lose their linear momentum"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spinForce"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"The maximum amount of spin the dice may have"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"throwForce"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"The maximum amount of throwing force used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startingHeight"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"The height at which the toss begins"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"settleTimeout"}),(0,s.jsx)(t.td,{children:"5000"}),(0,s.jsx)(t.td,{children:"Time in ms before a die is stopped from moving"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offscreen"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"If offscreenCanvas is available it will be used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"delay"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"The delay between dice being generate. If they're all generated at the same time they instantly collide with each other which doesn't look very natural."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lightIntensity"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Global illumination levels"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enableShadows"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"Do the dice cast a shadow? Turn off for a performance bump"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shadowTransparency"}),(0,s.jsx)(t.td,{children:".8"}),(0,s.jsx)(t.td,{children:"Set the transparency of the shadows cast by the dice"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:"'default'"}),(0,s.jsxs)(t.td,{children:["For additional themes see ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-themes",children:"@3d-dice/dice-themes"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"themeColor"}),(0,s.jsx)(t.td,{children:"'#2e8555'"}),(0,s.jsx)(t.td,{children:"Some themes allow for a configurable base color as a HEX value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scale"}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"suspendSimulation"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Turn off the 3D simulation and use the built-in random number generator instead."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"origin"}),(0,s.jsx)(t.td,{children:"location.origin"}),(0,s.jsx)(t.td,{children:"Sets the site origin used for constructing paths to assets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onDieComplete"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered whenever an individual die has completed rolling"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onRollComplete"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered whenever all the dice have completed rolling"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onRemoveComplete"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered whenever a die has been removed from the scene"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onThemeConfigLoaded"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered after a theme config file has been successfully fetched and parsed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onThemeLoaded"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"callback function triggered after a theme has finished loading all related assets"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"initialize",children:"Initialize"}),"\n",(0,s.jsxs)(t.p,{children:["After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a ",(0,s.jsx)(t.code,{children:".then()"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"diceBox.init().then(()=>{\n  diceBox.roll('2d20')\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);