"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Setup",o={unversionedId:"usage/config",id:"version-0.6/usage/config",title:"Setup",description:"Dice-Box can only accept simple dice notations or notation objects such as 2d20 or . This will kick off  the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit.",source:"@site/versioned_docs/version-0.6/usage/config.md",sourceDirName:"usage",slug:"/usage/config",permalink:"/docs/0.6/usage/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6/usage/config.md",tags:[],version:"0.6",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Intro",permalink:"/docs/0.6/intro"},next:{title:"Common Objects",permalink:"/docs/0.6/usage/objects"}},s={},p=[{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Initialize",id:"initialize",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Dice-Box can only accept simple dice notations or notation objects such as ",(0,r.kt)("inlineCode",{parentName:"p"},"2d20")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"{qty:2,sides:20}"),". This will kick off  the 3D physics simulation. When dice have stopped moving, the module will return a detailed result object that you are free to parse as you see fit. "),(0,r.kt)("p",null,"This may seem overly simplistic because TTRPG rolls can be pretty complex. However, it is not the job of the Dice-Box to perform complex notation operations. For complex notations that require analyzing the results of the roll to determine the outcome, such as ",(0,r.kt)("strong",{parentName:"p"},"advantage")," rolls, ",(0,r.kt)("strong",{parentName:"p"},"exploding")," rolls or ",(0,r.kt)("strong",{parentName:"p"},"target")," rolls, you'll need a parser to supply that functionality. I've built one called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/FDP"},"Fantastic Dice Parser")," which supports the full ",(0,r.kt)("a",{parentName:"p",href:"https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-RollTemplates"},"Roll20 Dice Specification"),". Read more about Fantastic Dice Parser in the addons section."),(0,r.kt)("h2",{id:"create-a-new-instance"},"Create a new instance"),(0,r.kt)("p",null,"Currently this project is an ES module intended to be part of a build system. To import the module into your project use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import DiceBox from '@3d-dice/dice-box'\n")),(0,r.kt)("p",null,"Next create a new instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DiceBox")," class. The two arguments for the constructor are a selector for the target DOM node followed by an object of config options. Be sure to set the path to the assets folder copied earlier. The ",(0,r.kt)("inlineCode",{parentName:"p"},"assetPath")," is the only required config option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const diceBox = new DiceBox(\"#dice-box\", {\n  assetPath: '/assets/'\n})\n")),(0,r.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,r.kt)("p",null,"These options can be passed into the constructor when creating a new instance of Dice-Box"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"'dice-canvas'"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the canvas element to use. If no canvas present then one will be created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetPath"),(0,r.kt)("td",{parentName:"tr",align:null},"'/assets/'"),(0,r.kt)("td",{parentName:"tr",align:null},"The path to static assets needed by this module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gravity"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Too much gravity will cause the dice to jitter. Too little and they take much longer to settle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mass"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The mass of the dice. Affects how forces act on the dice such as spin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"friction"),(0,r.kt)("td",{parentName:"tr",align:null},".8"),(0,r.kt)("td",{parentName:"tr",align:null},"The friction of the dice and the surface they roll on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restitution"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"The bounciness of the dice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"angularDamping"),(0,r.kt)("td",{parentName:"tr",align:null},".4"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how quickly the dice lose their spin (angular momentum)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linearDamping"),(0,r.kt)("td",{parentName:"tr",align:null},".4"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how quickly the dice lose their linear momentum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spinForce"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amout of spin the dice may have")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throwForce"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amout of throwing force used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startingHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"The height at which the toss begins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settleTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"5000"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in ms before a die is stopped from moving")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offscreen"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"If offscreenCanvas is available it will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"The delay between dice being generate. If they're all generated at the same time they instantly collide with each other which doesn't look very natural.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableShadows"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Do the dice cast a shadow? Turn off for a performance bump")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"theme"),(0,r.kt)("td",{parentName:"tr",align:null},"'diceOfRolling'"),(0,r.kt)("td",{parentName:"tr",align:null},"HEX color value or one of 'purpleRock', 'diceOfRolling', 'galvanized'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scale"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Options are best between 2-9. The higher the number the larger the dice. Accepts decimal numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDieComplete"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"callback function triggered whenever an individual die has completed rolling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRollComplete"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"callback function triggered whenever all the dice have completed rolling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRemoveComplete"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"callback function triggered whenever a die has been removed from the scene")))),(0,r.kt)("h2",{id:"initialize"},"Initialize"),(0,r.kt)("p",null,"After a class instance has been made you must then initialize it. Once initialized, you'll be ready to roll some dice. The init method is an async method so it can be awaited or followed by a .then() method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.init().then(()=>{\n  diceBox.roll('2d20')\n})\n")))}d.isMDXComponent=!0}}]);