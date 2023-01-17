"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},l="Callbacks",i={unversionedId:"usage/callbacks",id:"usage/callbacks",title:"Callbacks",description:"onDieComplete",source:"@site/docs/usage/callbacks.md",sourceDirName:"usage",slug:"/usage/callbacks",permalink:"/docs/usage/callbacks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/callbacks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/usage/methods"},next:{title:"Themes",permalink:"/docs/themes"}},c={},s=[{value:"onDieComplete",id:"ondiecomplete",level:2},{value:"onRollComplete",id:"onrollcomplete",level:2},{value:"onRemoveComplete",id:"onremovecomplete",level:2},{value:"onThemeConfigLoaded",id:"onthemeconfigloaded",level:2},{value:"onThemeLoaded",id:"onthemeloaded",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"callbacks"},"Callbacks"),(0,o.kt)("h2",{id:"ondiecomplete"},"onDieComplete"),(0,o.kt)("p",null,"This callback is triggered whenever an individual die has completed rolling and contains the die result object as it's argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onDieComplete = (dieResult) => console.log('die result', dieResult)\n")),(0,o.kt)("h2",{id:"onrollcomplete"},"onRollComplete"),(0,o.kt)("p",null,"This callback is triggered whenever all the dice have finished rolling and/or the physics simulation has been stopped and contains the roll result object as it's argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onRollComplete = (rollResult) => console.log('roll results', rollResult)\n")),(0,o.kt)("h2",{id:"onremovecomplete"},"onRemoveComplete"),(0,o.kt)("p",null,"This callback is triggered whenever a die has been removed from the scene and contains the die result object that was removed as it's argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onRemoveComplete = (dieResult) => console.log('die removed', dieResult)\n")),(0,o.kt)("h2",{id:"onthemeconfigloaded"},"onThemeConfigLoaded"),(0,o.kt)("p",null,"This callback is triggered after a theme config file has been successfully fetched and parsed. It contains the theme config data as an argument parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onThemeConfigLoaded = (config) => console.log('theme config data', config)\n")),(0,o.kt)("h2",{id:"onthemeloaded"},"onThemeLoaded"),(0,o.kt)("p",null,"This callback is triggered after the ",(0,o.kt)("inlineCode",{parentName:"p"},"onThemeConfigLoaded")," is complete and the theme has fetched and loaded all the necessary 3D models, textures, and materials it needs. It contains the theme config data as an argument parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onThemeLoaded = (config) => console.log('theme config data', config)\n")))}p.isMDXComponent=!0}}]);