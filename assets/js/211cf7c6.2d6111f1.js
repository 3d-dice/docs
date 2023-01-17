"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,m=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return n?r.createElement(m,a(a({ref:t},h),{},{components:n})):r.createElement(m,a({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Common Objects",l={unversionedId:"usage/objects",id:"usage/objects",title:"Common Objects",description:"Roll Object",source:"@site/docs/usage/objects.md",sourceDirName:"usage",slug:"/usage/objects",permalink:"/docs/usage/objects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/usage/config"},next:{title:"Methods",permalink:"/docs/usage/methods"}},s={},d=[{value:"Roll Object",id:"roll-object",level:2},{value:"Individual Die Result Object",id:"individual-die-result-object",level:2},{value:"Roll Result Array Object",id:"roll-result-array-object",level:2},{value:"What&#39;s the difference between <code>groupId</code>, and <code>rollId</code>?",id:"whats-the-difference-between-groupid-and-rollid",level:3},{value:"Theme Config Object",id:"theme-config-object",level:2}],h={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-objects"},"Common Objects"),(0,o.kt)("h2",{id:"roll-object"},"Roll Object"),(0,o.kt)("p",null,"The roll object is whats required by the ",(0,o.kt)("inlineCode",{parentName:"p"},"roll")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," methods. At a minimum you must specify the number of sides of the dice to be rolled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  modifier: int,      // optional - the modifier (positive or negative) to be added to the final results\n  qty: int,           // optional - the number of dice to be rolled. Defaults to 1\n  sides: mixed,       // the type of die to be rolled. Either a number such as 20 or a die type such as \"fate\".\n  theme: string,      // optional - the theme's 'systemName' for this roll\n  themeColor: string  // optional - HEX value for the theme's material color\n}\n")),(0,o.kt)("h2",{id:"individual-die-result-object"},"Individual Die Result Object"),(0,o.kt)("p",null,"When die results are returned they will contain the information listed below. Individual die results can then be passed back in to ",(0,o.kt)("inlineCode",{parentName:"p"},"roll"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reroll")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," methods as the notation argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  groupId: int,       // the roll group this die belongs to\n  rollId: int,        // the unique identifier for this die within the group\n  sides: int,         // the type of die\n  theme: string,      // the theme that was assigned to this die\n  themeColor: string  // optional - HEX value for the theme's material color\n  value: int,         // the result for this die\n}\n")),(0,o.kt)("h2",{id:"roll-result-array-object"},"Roll Result Array Object"),(0,o.kt)("p",null,"The results object will contain an array of roll groups and the individual rolls made in those groups. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"3d6")," would create a ",(0,o.kt)("em",{parentName:"p"},"roll group")," with three ",(0,o.kt)("em",{parentName:"p"},"rolls")," in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {                    // the roll group object\n    id: 0,             // the id of this group - should match the groupId of rolls\n    mods: [],          // the roll modifier\n    qty: int,          // the number of dice in this roll\n    rolls: [           // an array of Die Result Objects\n      {\n        groupId: int,\n        result: int,\n        rollId: int,\n        sides: int,\n        theme: string,\n        themeColor: string,\n      }\n    ],\n    sides: int,        // the type of die used\n    theme: string      // the theme for this group of dice\n    themeColor: string // the theme color for this group of dice\n    value: int         // the sum of the dice roll results and modifier\n  }\n]\n")),(0,o.kt)("p",null,"The result object for ",(0,o.kt)("inlineCode",{parentName:"p"},"3d6")," will look something like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    groupId: 0,\n    mods: [],\n    qty: 3,\n    rolls: [\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 0,\n        theme: 'diceOfRolling',\n        themeColor: null,\n        value: 5\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 1,\n        theme: 'diceOfRolling',\n        themeColor: null,\n        value: 2\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 2,\n        theme: 'diceOfRolling',\n        themeColor: null,\n        value: 3\n      }\n    ],\n    sides: 6,\n    value: 10\n  }\n]\n")),(0,o.kt)("h3",{id:"whats-the-difference-between-groupid-and-rollid"},"What's the difference between ",(0,o.kt)("inlineCode",{parentName:"h3"},"groupId"),", and ",(0,o.kt)("inlineCode",{parentName:"h3"},"rollId"),"?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"groupId"),": the roll group this die is a part of. This becomes more useful with the advanced dice roller that accepts notations such as ",(0,o.kt)("inlineCode",{parentName:"p"},"2d10+2d6"),". In this case ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId: 0")," would be assigned to the 2d10 and ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId: 1")," would be assigned to the 2d6"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rollId"),": the id of the die within the group. By default this is incremented automatically by the dice roller, however there are cases where the rollId is assigned, such as exploding die. In this case, in order to make an association between the 'exploder' and the 'explodee' the rollId of the added die is set to a decimal value of the triggering die. For example with 1d6 that explodes twice: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    qty: 3,\n    sides: 6,\n    mods: [\n      {\n        type: 'explode',\n        target: null\n      }\n    ],\n    rolls: [\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 0,\n        theme: 'diceOfRolling',\n        themeColor: null,\n        value: 6\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 0.1,\n        theme: 'diceOfRolling',\n        themeColor: null,\n        value: 6\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 0.2,\n        theme: 'diceOfRolling',\n        themeColor: null,\n        value: 5\n      }\n    ],\n    id: 0,\n    value: 17\n  }\n]\n")),(0,o.kt)("h2",{id:"theme-config-object"},"Theme Config Object"),(0,o.kt)("p",null,"This object is required to load a theme"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: string,                  // the pretty name of this theme, can include spaces and special characters\n  systemName: string,            // required - the camelCased system name for this theme, used internally\n  extends: string,               // optional - The theme systemName this theme extends\n  author: string,                // optional - author of this theme\n  version: number,               // optional - version of this theme\n  thumbnail: string,             // optional - A rendered image of what this dice theme looks like\n  meshFile: string,              // the relative path and file name that contains the 3D mesh data for this theme. Only required if not using 'default' mesh. This can point to a shared mesh file located anywhere in static assets folder.\n  meshName: string,              // the system name used for this theme's 3D models. Only required if not using 'default' mesh. If sharing a mesh file with another theme, then it should have the same meshName as the one it's sharing.\n  diceAvailable: [],             // a list of dice available (:string) with this theme. Only required if different from the default ['d4','d6','d8','d10','d12','d20','d100']\n  material: {\n    type: string,                // required - the type of material being loaded for this theme\n    diffuseTexture: string || {  // either the relative path and file name of a texture file or an object\n      light: string,             // the relative path and file name of the 'light' texture used for HEX color based materials\n      dark: string               // the relative path and file name of the 'dark' texture used for HEX color based materials\n    },\n    diffuseLevel: float,         // optional - intensity or strength of the texture\n    bumpTexture: string,         // optional - the relative path and file name of a texture file\n    bumpLevel: float,            // optional - intensity or strength of the texture\n    specularTexture: string,     // optional - the relative path and file name of a texture file\n    specularPower: float         // optional - defines how sharp are the highlights in the material\n  },\n  themeColor: string,            // a HEX value to be applied to a color material.\n  d4FaceDown: false,             // optional - calculate the d4 value based on the downward facing 3D mesh face id\n}\n")))}u.isMDXComponent=!0}}]);