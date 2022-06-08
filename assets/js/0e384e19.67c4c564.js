"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,h=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c="Intro",p={unversionedId:"intro",id:"intro",title:"Intro",description:"Do you love TTRPG and wish you had some 3D dice to incorporate into your side projects? That's exactly why I started this project. This is a high performance 3D dice roller made with BabylonJS, AmmoJS and implemented with lightning fast web workers and offscreenCanvas. Designed to be easy to integrate into your own JavaScript app with a package payload under 1 megabyte after compression.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/usage/config"}},d={},u=[{value:"Open Source",id:"open-source",level:2},{value:"Die Types",id:"die-types",level:2},{value:"Feature Requests",id:"feature-requests",level:2},{value:"Show me some code",id:"show-me-some-code",level:2}],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Do you love ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("span",{parentName:"em",className:"jargon-term"},"TTRPG",(0,a.kt)("span",{parentName:"span",className:"jargon-info"},"Table Top Role Playing Game")))," and wish you had some 3D dice to incorporate into your side projects? That's exactly why I started this project. This is a high performance 3D dice roller made with ",(0,a.kt)("a",{parentName:"p",href:"https://www.babylonjs.com/"},"BabylonJS"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kripken/ammo.js/"},"AmmoJS")," and implemented with lightning fast ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"},"web workers")," and ",(0,a.kt)("a",{parentName:"p",href:"https://doc.babylonjs.com/divingDeeper/scene/offscreenCanvas"},"offscreenCanvas"),". Designed to be easy to integrate into your own JavaScript app with a package payload under 1 megabyte after compression."),(0,a.kt)("h2",{id:"open-source"},"Open Source"),(0,a.kt)("p",null,"Everything in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/"},"@3d-dice")," suite falls under the ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT license")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/share-your-work/public-domain/cc0/"},"CC0 license")," license. This means it's free for commercial use and redistribution. I've benefited from open source software for years and this is my \"give back\"."),(0,a.kt)("h2",{id:"die-types"},"Die Types"),(0,a.kt)("p",null,"This documentation makes frequent reference to common dice notations such as ",(0,a.kt)("inlineCode",{parentName:"p"},"5d6")," where the first number represents the number of dice to roll and the ",(0,a.kt)("inlineCode",{parentName:"p"},"d#")," represents the number of sides on a die. The default theme dice are ",(0,a.kt)("inlineCode",{parentName:"p"},"d4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"d6"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"d8"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"d10"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"d12"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"d20"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"d100"),"."),(0,a.kt)("h2",{id:"feature-requests"},"Feature Requests"),(0,a.kt)("p",null,"This project id under active development with more features in the pipeline. Feel free to add feature requests into the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-box/issues"},"Github issue tracker"),"."),(0,a.kt)("h2",{id:"show-me-some-code"},"Show me some code"),(0,a.kt)("p",null,"See the kitchen sink code demo here: ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/3d-dice-demo-v1-0-2-sm4ien"},"https://codesandbox.io/s/3d-dice-demo-v1-0-2-sm4ien")),(0,a.kt)("p",null,"Here's a simple React Demo for rolling attributes (using 3d6): ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-roller-attributes-v1-0-2-65uqhv"},"https://codesandbox.io/s/react-roller-attributes-v1-0-2-65uqhv")),(0,a.kt)("p",null,"Here's a React Demo with support for advanced dice notation: ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-roller-advanced-notation-v1-0-2-rz0nmr"},"https://codesandbox.io/s/react-roller-advanced-notation-v1-0-2-rz0nmr")))}m.isMDXComponent=!0}}]);