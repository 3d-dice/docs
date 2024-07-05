"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7485],{3395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(4848),s=n(8453);const r={sidebar_position:1},c="Setup",o={id:"usage/config",title:"Setup",description:"Dice-Box can only accept simple dice notations or notation objects such as 2d20 or . This will kick off  the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit.",source:"@site/versioned_docs/version-0.6/usage/config.md",sourceDirName:"usage",slug:"/usage/config",permalink:"/docs/0.6/usage/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6/usage/config.md",tags:[],version:"0.6",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Intro",permalink:"/docs/0.6/intro"},next:{title:"Common Objects",permalink:"/docs/0.6/usage/objects"}},d={},l=[{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Initialize",id:"initialize",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["Dice-Box can only accept simple dice notations or notation objects such as ",(0,i.jsx)(t.code,{children:"2d20"})," or ",(0,i.jsx)(t.code,{children:"{qty:2,sides:20}"}),". This will kick off  the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit."]}),"\n",(0,i.jsxs)(t.p,{children:["This may seem overly simplistic because TTRPG rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing the results of the roll to determine the outcome, such as ",(0,i.jsx)(t.strong,{children:"advantage"})," rolls, ",(0,i.jsx)(t.strong,{children:"exploding"})," rolls or ",(0,i.jsx)(t.strong,{children:"target"})," rolls, you'll need a parser to supply that functionality. I've built one called ",(0,i.jsx)(t.a,{href:"https://github.com/3d-dice/FDP",children:"Fantastic Dice Parser"})," which supports the full ",(0,i.jsx)(t.a,{href:"https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates",children:"Roll20 Dice Specification"}),". Read more about Fantastic Dice Parser in the addons section."]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-new-instance",children:"Create a new instance"}),"\n",(0,i.jsx)(t.p,{children:"Currently this project is an ES module intended to be part of a build system. To import the module into your project use:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import DiceBox from '@3d-dice/dice-box'\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Next create a new instance of the ",(0,i.jsx)(t.code,{children:"DiceBox"})," class. The two arguments for the constructor are a selector for the target DOM node followed by an object of config options. Be sure to set the path to the assets folder copied earlier. The ",(0,i.jsx)(t.code,{children:"assetPath"})," is the only required config option."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const diceBox = new DiceBox(\"#dice-box\", {\n  assetPath: '/assets/'\n})\n"})}),"\n",(0,i.jsx)(t.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,i.jsx)(t.p,{children:"These options can be passed into the constructor when creating a new instance of Dice-Box"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option"}),(0,i.jsx)(t.th,{children:"Default Setting"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{children:"'dice-canvas'"}),(0,i.jsx)(t.td,{children:"The ID of the canvas element to use. If no canvas present then one will be created"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"assetPath"}),(0,i.jsx)(t.td,{children:"'/assets/'"}),(0,i.jsx)(t.td,{children:"The path to static assets needed by this module"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"gravity"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Too much gravity will cause the dice to jitter. Too little and they take much longer to settle."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mass"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"The mass of the dice. Affects how forces act on the dice such as spin"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"friction"}),(0,i.jsx)(t.td,{children:".8"}),(0,i.jsx)(t.td,{children:"The friction of the dice and the surface they roll on"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"restitution"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"The bounciness of the dice"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"angularDamping"}),(0,i.jsx)(t.td,{children:".4"}),(0,i.jsx)(t.td,{children:"Determines how quickly the dice lose their spin (angular momentum)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"linearDamping"}),(0,i.jsx)(t.td,{children:".4"}),(0,i.jsx)(t.td,{children:"Determines how quickly the dice lose their linear momentum"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spinForce"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"The maximum amout of spin the dice may have"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"throwForce"}),(0,i.jsx)(t.td,{children:"5"}),(0,i.jsx)(t.td,{children:"The maximum amout of throwing force used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"startingHeight"}),(0,i.jsx)(t.td,{children:"8"}),(0,i.jsx)(t.td,{children:"The height at which the toss begins"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"settleTimeout"}),(0,i.jsx)(t.td,{children:"5000"}),(0,i.jsx)(t.td,{children:"Time in ms before a die is stopped from moving"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"offscreen"}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"If offscreenCanvas is available it will be used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"delay"}),(0,i.jsx)(t.td,{children:"10"}),(0,i.jsx)(t.td,{children:"The delay between dice being generate. If they're all generated at the same time they instantly collide with each other which doesn't look very natural."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"enableShadows"}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Do the dice cast a shadow? Turn off for a performance bump"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"theme"}),(0,i.jsx)(t.td,{children:"'diceOfRolling'"}),(0,i.jsx)(t.td,{children:"HEX color value or one of 'purpleRock', 'diceOfRolling', 'galvanized'."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scale"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"onDieComplete"}),(0,i.jsx)(t.td,{children:"function"}),(0,i.jsx)(t.td,{children:"callback function triggered whenever an individual die has completed rolling"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"onRollComplete"}),(0,i.jsx)(t.td,{children:"function"}),(0,i.jsx)(t.td,{children:"callback function triggered whenever all the dice have completed rolling"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"onRemoveComplete"}),(0,i.jsx)(t.td,{children:"function"}),(0,i.jsx)(t.td,{children:"callback function triggered whenever a die has been removed from the scene"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"initialize",children:"Initialize"}),"\n",(0,i.jsx)(t.p,{children:"After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a .then() method."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"diceBox.init().then(()=>{\n  diceBox.roll('2d20')\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);