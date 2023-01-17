"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},i="Dice Picker",o={unversionedId:"addons/dicePicker",id:"version-0.6/addons/dicePicker",title:"Dice Picker",description:"This is a simple UI module aimed at making picking dice simple and easy. I put this module together mostly to make setting up simple rolls on mobile devices easy. Just tap away at the dice you want to roll. It's very similar in nature to Advanced Roller.",source:"@site/versioned_docs/version-0.6/addons/dicePicker.md",sourceDirName:"addons",slug:"/addons/dicePicker",permalink:"/docs/0.6/addons/dicePicker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6/addons/dicePicker.md",tags:[],version:"0.6",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Advanced Roller",permalink:"/docs/0.6/addons/advRoller"},next:{title:"Display Results",permalink:"/docs/0.6/addons/displayResults"}},d={},s=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Config Options",id:"config-options",level:3},{value:"Methods",id:"methods",level:2}],p={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dice-picker"},"Dice Picker"),(0,r.kt)("p",null,"This is a simple UI module aimed at making picking dice simple and easy. I put this module together mostly to make setting up simple rolls on mobile devices easy. Just tap away at the dice you want to roll. It's very similar in nature to ",(0,r.kt)("a",{parentName:"p",href:"/docs/addons/advRoller"},"Advanced Roller"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dice Picker Screenshot",src:n(4989).Z,width:"954",height:"328"})),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Add the FUI module using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @3d-dice/fui\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Then create a new instace of the picker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { DicePicker } from '@3d-dice/fui'\n\nconst dicePicker = new DicePicker()\n")),(0,r.kt)("h3",{id:"config-options"},"Config Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DicePicker")," only has one argument which is a config object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," :dom node selector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"document.body")),(0,r.kt)("td",{parentName:"tr",align:null},"The target DOM node to inject the roller into")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSubmit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"noop"),(0,r.kt)("td",{parentName:"tr",align:null},"callback triggered on form submit, after notation has been parsed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClear"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"noop"),(0,r.kt)("td",{parentName:"tr",align:null},"callback triggered when form reset event is triggered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onReroll"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"noop"),(0,r.kt)("td",{parentName:"tr",align:null},"callback triggered when FDP returns reroll results")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onResults"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"noop"),(0,r.kt)("td",{parentName:"tr",align:null},"callback triggered when there are no reRoll results and the final result object has been parsed by FDP")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submitForm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")," :event - form submit"),(0,r.kt)("td",{parentName:"tr",align:null},"Take the submit event and passes the input notation to FDP. Calls ",(0,r.kt)("inlineCode",{parentName:"td"},"onSubmit")," callback with results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clear"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Clears the current notation and any values stored in FDP. Calls the ",(0,r.kt)("inlineCode",{parentName:"td"},"onClear")," callback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setNotation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notation")," :object"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the default values for tossing, sort of like placeholder values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handleResults"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"results")," :object"),(0,r.kt)("td",{parentName:"tr",align:null},"Passes roll results object to FDP to check for rerolls. Gets the final parsed results from FDP. Calls ",(0,r.kt)("inlineCode",{parentName:"td"},"onResults")," callback")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There's currently nothing in Dice Picker that would trigger rerolls. Most of the code in this module was copied from the Advanced Roller")),(0,r.kt)("p",null,"With the exception of ",(0,r.kt)("inlineCode",{parentName:"p"},"setNotation")," these methods and callbacks operate the same as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/addons/advRoller"},"Advanced Roller"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setNotation")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"dicePicker.setNotation({\n  d4: {\n    count: 2\n  },\n  d6: {\n    count: 2\n  },\n  d8: {\n    count: 2\n  },\n  d10: {\n    count: 2\n  },\n  d12: {\n    count: 2\n  },\n  d20: {\n    count: 2\n  },\n  d100: {\n    count: 1\n  }\n})\n")),(0,r.kt)("p",null,"Screenshot with notation set:\n",(0,r.kt)("img",{alt:"Set Notation",src:n(5423).Z,width:"954",height:"312"})))}c.isMDXComponent=!0},4989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dicePicker1-07285b676dacab33e7914284bc436534.jpg"},5423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dicePicker2-7a2943e9a06711ef48371dd25131a2c2.jpg"}}]);