"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8322],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),c=o,u=d["".concat(l,".").concat(c)]||d[c]||h[c]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:3},r="Themes",s={unversionedId:"themes",id:"themes",title:"Themes",description:"Everyone loves different dice colors and styles. Also, sometimes it's important to have different colored dice at the virtual table in order to distinguish who's making rolls. With that in mind I've tried to keep the theme layer flexible and easy to customize.",source:"@site/docs/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/themes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/themes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Callbacks",permalink:"/docs/usage/callbacks"},next:{title:"About Addons",permalink:"/docs/addons/"}},l={},m=[{value:"How themes work",id:"how-themes-work",level:2},{value:"How to make a custom theme",id:"how-to-make-a-custom-theme",level:2},{value:"How to make new dice models",id:"how-to-make-new-dice-models",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"themes"},"Themes"),(0,o.kt)("p",null,"Everyone loves different dice colors and styles. Also, sometimes it's important to have different colored dice at the virtual table in order to distinguish who's making rolls. With that in mind I've tried to keep the theme layer flexible and easy to customize."),(0,o.kt)("h2",{id:"how-themes-work"},"How themes work"),(0,o.kt)("p",null,"Themes should be located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/assets/dice-box/themes")," folder. Dice-Box only comes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," theme. Additional themes can be downloaded or installed from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-themes/tree/main/themes"},"@3d-dice/dice-themes"),". Themes have been designed to be easy drop-in addons. Inside a theme folder is a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file used by npm, a ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.config.json")," file, a couple of texture files, and possibly a json file for the 3D models used by this theme. "),(0,o.kt)("p",null,"The folder name for a theme must match the ",(0,o.kt)("inlineCode",{parentName:"p"},"systemName")," parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.config.json")," file."),(0,o.kt)("admonition",{title:"Using NPM",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you use npm to install a theme, then you must manually copy the theme to your static assets folder.")),(0,o.kt)("p",null,"It's important to know that Dice-Box currently only loads the ",(0,o.kt)("inlineCode",{parentName:"p"},"StandardMaterial")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomMaterial")," libraries from BabylonJS. ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{parentName:"em",className:"jargon-term"},"PBR",(0,o.kt)("span",{parentName:"span",className:"jargon-info"},(0,o.kt)("b",{parentName:"span"},"P"),"hysics-",(0,o.kt)("b",{parentName:"span"},"B"),"ased ",(0,o.kt)("b",{parentName:"span"},"R"),"endering - is a virtual material pipeline that can simulate any kind of physical material.")))," materials are not currently supported due to the high overhead it has. It's also important to know that BabylonJS expects normal maps to be ",(0,o.kt)("strong",{parentName:"p"},"DirectX formatted"),". If you have OpenGL normal maps then you'll want to invert the ",(0,o.kt)("inlineCode",{parentName:"p"},"red")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"green")," color channels of the file (using image editing software like ",(0,o.kt)("a",{parentName:"p",href:"https://affinity.serif.com/en-gb/photo/"},"Affinity Photo"),") to convert it to DirectX."),(0,o.kt)("p",null,"For distribution reasons, themes from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-themes/tree/main/themes"},"@3d-dice/dice-themes")," include their required 3D models, but if you're using multiple themes that load the same model file, then you can put that shared file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/assets/dice-box/models")," folder. After that, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"meshFile")," path in the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.config.json")," files as necessary. For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'  meshName: "gemstone",\n  meshFile: "../../models/gemstone.json",\n')),(0,o.kt)("admonition",{title:"Creative Commons 0",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The 3D models and textures available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-box"},"@3d-dice/dice-box")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-themes"},"@3d-dice/dice-themes")," projects are licensed as CC0 content.\nIn summary, CC0 says,  "),(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},'"To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty."')),(0,o.kt)("p",{parentName:"admonition"},"What this means is that these assets are free to be used and distributed by anyone in public or commercial products."),(0,o.kt)("p",{parentName:"admonition"},"See also ",(0,o.kt)("a",{parentName:"p",href:"http://creativecommons.org/publicdomain/zero/1.0/"},"http://creativecommons.org/publicdomain/zero/1.0/"))),(0,o.kt)("h2",{id:"how-to-make-a-custom-theme"},"How to make a custom theme"),(0,o.kt)("p",null,"If you want to make your own textures today then there are two approaches possible. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The first approach is to duplicate any standard material theme folder and use image editing software like ",(0,o.kt)("a",{parentName:"li",href:"https://affinity.serif.com/en-gb/photo/"},"Affinity Photo")," to skew the colors or make changes as best you can. Also available are the ",(0,o.kt)("inlineCode",{parentName:"li"},".png")," files in the default theme if you need to reapply the dice numbers over top of any color changes you make. Once done, update the ",(0,o.kt)("inlineCode",{parentName:"li"},"theme.config.json")," file as necessary. You could even point the ",(0,o.kt)("inlineCode",{parentName:"li"},"bumpTexture")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"meshFile")," paths back to the original theme if you don't want to duplicate them.")),(0,o.kt)("admonition",{title:"Helpful Videos",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0EHljiUMRA4&t=54s"},"Generating Normal Maps in Photoshop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=t8jvroWSCBU"},"Combining Normal Maps in Photoshop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cpetry.github.io/NormalMap-Online/"},"Free Web Based Normal Map Generator")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The second approach is to bake your own textures using the original 3D models. This is the only way to create new seamless textures. Start by downloading the 3D dice I've used for this application ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/3d-dice/dice-themes/models/"},"available here"),". Once you have the ",(0,o.kt)("inlineCode",{parentName:"li"},".blend")," files, you can open them in ",(0,o.kt)("a",{parentName:"li",href:"https://www.blender.org/"},"Blender")," to bake your own procedural textures. There are a couple of youtube videos available that demonstrate how this can be done. ")),(0,o.kt)("admonition",{title:"Helpful Videos",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LLQFopN--LY"},"Baking Textures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=wG6ON8wZYLc"},"Baking Multiple Materials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AnRQhH3fEDY"},"Texture Painting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=CdYz9oLuAOI"},"How to Manage Material Libraries")))),(0,o.kt)("h2",{id:"how-to-make-new-dice-models"},"How to make new dice models"),(0,o.kt)("p",null,"*Coming soon"))}d.isMDXComponent=!0}}]);