"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6986],{9041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=n(4848),l=n(8453);const i={sidebar_position:6},r="Box Controls",d={id:"addons/boxControls",title:"Box Controls",description:"Box Controls uses the popular dat.GUI module which is self described as:",source:"@site/docs/addons/boxControls.md",sourceDirName:"addons",slug:"/addons/boxControls",permalink:"/docs/addons/boxControls",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/addons/boxControls.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Display Results",permalink:"/docs/addons/displayResults"},next:{title:"Genesys Dice Picker",permalink:"/docs/addons/genesysDicePicker"}},c={},h=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Settings",id:"settings",level:2},{value:"Sliders",id:"sliders",level:3},{value:"Checkbox",id:"checkbox",level:3},{value:"Combo Box",id:"combo-box",level:3},{value:"Color Picker",id:"color-picker",level:3},{value:"Setting theme controls",id:"setting-theme-controls",level:2}];function o(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"box-controls",children:"Box Controls"}),"\n",(0,s.jsxs)(t.p,{children:["Box Controls uses the popular ",(0,s.jsx)(t.a,{href:"https://github.com/dataarts/dat.gui",children:"dat.GUI"})," module which is self described as:"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"A lightweight graphical user interface for changing variables in JavaScript"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use this module if you want to dynamically experiment with the Dice-Box ",(0,s.jsx)(t.a,{href:"/docs/usage/config#configuration-options",children:"config settings"})," and see real time feedback. All changes are passed to Dice-Box's ",(0,s.jsx)(t.code,{children:"updateConfig()"})," method."]}),"\n",(0,s.jsx)(t.p,{children:"This module was created for experimental and demo purposes."}),"\n",(0,s.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.p,{children:"Add the dice-ui module using"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install @3d-dice/dice-ui\n"})}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.p,{children:"Then create a new instance of the picker"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { BoxControls } from '@3d-dice/dice-ui'\n\nconst Controls = new BoxControls({\n  onUpdate: (updates) => {\n    diceBox.updateConfig(updates)\n  }\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(t.h3,{id:"sliders",children:"Sliders"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Options"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"min"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"default"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"max"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"step"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gravity"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mass"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"friction"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".8"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"restitution"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"linearDamping"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"angularDamping"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".4"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spinForce"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"throwForce"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startingHeight"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"65"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"settleTimeout 100"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5000"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"20000"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"delay"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"500"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scale"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"shadowTransparency"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.8"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".01"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lightIntensity"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:".1"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"While the slider has a max setting, there is no enforced max in the module itself."})}),"\n",(0,s.jsx)(t.h3,{id:"checkbox",children:"Checkbox"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Option"}),(0,s.jsx)(t.th,{children:"default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enableShadows"}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"suspendSimulation"}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"combo-box",children:"Combo Box"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Option"}),(0,s.jsx)(t.th,{children:"default"}),(0,s.jsx)(t.th,{children:"options"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:"'default'"}),(0,s.jsx)(t.td,{children:"array passed in from options.themes"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"color-picker",children:"Color Picker"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Option"}),(0,s.jsx)(t.th,{children:"default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"themeColor"}),(0,s.jsx)(t.td,{children:"#0974E6"})]})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Theme config",type:"note",children:(0,s.jsxs)(t.p,{children:["Not all themes make use of ",(0,s.jsx)(t.code,{children:"themeColor"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"setting-theme-controls",children:"Setting theme controls"}),"\n",(0,s.jsxs)(t.p,{children:["The controls for ",(0,s.jsx)(t.code,{children:"theme"})," and ",(0,s.jsx)(t.code,{children:"themeColor"})," have been exposed as ",(0,s.jsx)(t.code,{children:"themeSelect"})," and ",(0,s.jsx)(t.code,{children:"themeColorPicker"})," respectively. These controls can now be set externally."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"Controls.themeSelect.setValue('diceOfRolling')\nControls.themeColorPicker.setValue('#fc05fc')\n"})}),"\n",(0,s.jsx)(t.p,{children:"This was set up so the controls would reflect the theme or themeColor first loaded by dice box. Other controls have not been exposed."})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);