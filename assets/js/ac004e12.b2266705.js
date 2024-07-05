"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1843],{5285:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=o(4848),t=o(8453);const a={sidebar_position:4},l="Callbacks",i={id:"usage/callbacks",title:"Callbacks",description:"onDieComplete",source:"@site/docs/usage/callbacks.md",sourceDirName:"usage",slug:"/usage/callbacks",permalink:"/docs/usage/callbacks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/callbacks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/usage/methods"},next:{title:"Themes",permalink:"/docs/themes/"}},c={},d=[{value:"onDieComplete",id:"ondiecomplete",level:2},{value:"onRollComplete",id:"onrollcomplete",level:2},{value:"onRemoveComplete",id:"onremovecomplete",level:2},{value:"onThemeConfigLoaded",id:"onthemeconfigloaded",level:2},{value:"onThemeLoaded",id:"onthemeloaded",level:2}];function r(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"callbacks",children:"Callbacks"}),"\n",(0,s.jsx)(n.h2,{id:"ondiecomplete",children:"onDieComplete"}),"\n",(0,s.jsx)(n.p,{children:"This callback is triggered whenever an individual die has completed rolling and contains the die result object as it's argument."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"diceBox.onDieComplete = (dieResult) => console.log('die result', dieResult)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"onrollcomplete",children:"onRollComplete"}),"\n",(0,s.jsx)(n.p,{children:"This callback is triggered whenever all the dice have finished rolling and/or the physics simulation has been stopped and contains the roll result object as it's argument."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"diceBox.onRollComplete = (rollResult) => console.log('roll results', rollResult)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"onremovecomplete",children:"onRemoveComplete"}),"\n",(0,s.jsx)(n.p,{children:"This callback is triggered whenever a die has been removed from the scene and contains the die result object that was removed as it's argument."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"diceBox.onRemoveComplete = (dieResult) => console.log('die removed', dieResult)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"onthemeconfigloaded",children:"onThemeConfigLoaded"}),"\n",(0,s.jsx)(n.p,{children:"This callback is triggered after a theme config file has been successfully fetched and parsed. It contains the theme config data as an argument parameter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"diceBox.onThemeConfigLoaded = (config) => console.log('theme config data', config)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"onthemeloaded",children:"onThemeLoaded"}),"\n",(0,s.jsxs)(n.p,{children:["This callback is triggered after the ",(0,s.jsx)(n.code,{children:"onThemeConfigLoaded"})," is complete and the theme has fetched and loaded all the necessary 3D models, textures, and materials it needs. It contains the theme config data as an argument parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"diceBox.onThemeLoaded = (config) => console.log('theme config data', config)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>i});var s=o(6540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);