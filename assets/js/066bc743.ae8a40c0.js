"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{5508:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(4848),o=i(8453);const a={slug:"roadmap-2023",title:"Roadmap for 2023",authors:["frankieali"],tags:["chat"]},n=void 0,r={permalink:"/blog/roadmap-2023",editUrl:"https://github.com/3d-dice/docs/blog/2023-01-16-roadmap.md",source:"@site/blog/2023-01-16-roadmap.md",title:"Roadmap for 2023",description:"Happy New Year. The start of the year has been very exciting with the controvesial changes being considered for Wizards of the Coast's OGL. I have been considering what I want to accomplish with this project this year. Since there's been so much upheavel in the TTRPG space, I'm anticipating the development of many new apps using many other game systems. With that in mind I'm hoping to support more types of dice rolls to satisfy everyone's needs as best I can. With that I think I have a decent roadmap for version 2.0 of Fantastic Dice.",date:"2023-01-16T00:00:00.000Z",tags:[{inline:!0,label:"chat",permalink:"/blog/tags/chat"}],readingTime:3.485,hasTruncateMarker:!1,authors:[{name:"Frank Ali",title:"Front-End Developer",url:"https://github.com/frankieali",imageURL:"https://github.com/frankieali.png",key:"frankieali"}],frontMatter:{slug:"roadmap-2023",title:"Roadmap for 2023",authors:["frankieali"],tags:["chat"]},unlisted:!1,prevItem:{title:"Version 1.1 Release",permalink:"/blog/version-1.1"},nextItem:{title:"Version 1 Release",permalink:"/blog/version-1"}},h={authorsImageUrls:[void 0]},l=[];function c(e){const t={a:"a",code:"code",em:"em",p:"p",span:"span",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Happy New Year. The start of the year has been very ",(0,s.jsx)(t.em,{children:"exciting"})," with the controvesial changes being considered for Wizards of the Coast's ",(0,s.jsx)(t.em,{children:(0,s.jsxs)(t.span,{className:"jargon-term",children:["OGL",(0,s.jsx)(t.span,{className:"jargon-info",children:"Open Game License"})]})}),". I have been considering what I want to accomplish with this project this year. Since there's been so much upheavel in the ",(0,s.jsx)(t.em,{children:(0,s.jsxs)(t.span,{className:"jargon-term",children:["TTRPG",(0,s.jsx)(t.span,{className:"jargon-info",children:"Table Top Role Playing Game"})]})})," space, I'm anticipating the development of many new apps using many other game systems. With that in mind I'm hoping to support more types of dice rolls to satisfy everyone's needs as best I can. With that I think I have a decent roadmap for version 2.0 of Fantastic Dice."]}),"\n",(0,s.jsxs)(t.p,{children:["Last year ended with me digging into deterministic rolling. I think this will be the most important feature to get right and will open up this project as a viable option for more developers. There are pros and cons to engineering the deterministic setup, but I think the pros outweight the cons considerably. I started by developing ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-box-threejs",children:"dice-box-threejs"}),". This project was based on ",(0,s.jsx)(t.a,{href:"https://majorvictory.github.io/3DDiceRoller/",children:"Major's 3D Dice"})," which was based on ",(0,s.jsx)(t.a,{href:"http://a.teall.info/dice/",children:"Teal Dice"}),". I undertook this project to both understand the deterministic approach used as well to assist others who needed this feature right away. It does not have all the features or optimizations that the original ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-box",children:"dice-box"})," has, but it does work well enough and has been published to NPM."]}),"\n",(0,s.jsxs)(t.p,{children:["Moving forward with determinism, I've chosen to swap physics engines from ",(0,s.jsx)(t.a,{href:"https://github.com/kripken/ammo.js/",children:"AmmoJS"})," to ",(0,s.jsx)(t.a,{href:"https://rapier.rs/",children:"Rapier"})," which advertises itself as ",(0,s.jsx)(t.a,{href:"https://rapier.rs/docs/user_guides/javascript/determinism",children:"fully cross-platform deterministic"}),". After dropping Rapier in, it became apparent right away that determinism was not working at all. After digging into the issue I think the root issue lies in the way I've set up the 3D environment to post messages to the web worker which adds collider objects to the physics world. Fixing this issue requires quite a bit of rework. It's going to be a big overhaul and a good starting point for version 2.0."]}),"\n",(0,s.jsxs)(t.p,{children:["The second feature I'm hoping to tackle is redesigning the theme system. Currently it's a complicated multi-step process to make your own dice set. I'm hoping to improve on that. Originally, I opted to use ",(0,s.jsx)(t.a,{href:"https://github.com/BabylonJS/BlenderExporter",children:"Babylon JS's blender exporter"})," plug-in to generate json data that was compact, easy to parse and could be gzip'ed. After exporting the blender data, I would still have to add additional information to the file to map the 3D mesh face id's to numerical values. Unfortunatly, the exporter has not kept up with blender releases. I think it's time to switch over to the more universally supported ",(0,s.jsx)(t.code,{children:".fbx"})," file type. This creates much larger files and requires additional BabylonJS plug-ins to load. The project will go well beyond the 1MB code delivery goal of version 1.0 (Rapier also contributes to a much larger package). However, I think it will allow for more flexibility when creating assests. Also, the ",(0,s.jsx)(t.code,{children:".fbx"})," format will allow for inclusion of 3D animations and effects. Additionally, this approach will allow creators to use the 3D software of their choice to make dice assets."]}),"\n",(0,s.jsxs)(t.p,{children:["Next up are sounds. One thing I learned when developing ",(0,s.jsx)(t.a,{href:"https://github.com/3d-dice/dice-box-threejs",children:"dice-box-threejs"})," was how to queue and play sound effects on collision events. I plan to port this behavior over and offer it as an opt-in config option or plug-in."]}),"\n",(0,s.jsx)(t.p,{children:"Another improvement I'd like to make (perhaps as part of the theme redesign) is finding a better way to determine which dice face is pointing up at the end of a roll and what value that represents. Not all dice use numbers and I want to make sure the new system is flexible enough for systems like fate or genesys. I'm also hoping I can find an elegant way to include this information in the 3D asset file."}),"\n",(0,s.jsx)(t.p,{children:"Finally, I want to enable some post processing render effects in BabylonJS."}),"\n",(0,s.jsx)(t.p,{children:"Stretch goal - implement a plug-in architecture for addons."}),"\n",(0,s.jsxs)(t.p,{children:["In summary, I'm very motivated by the ",(0,s.jsx)(t.em,{children:(0,s.jsxs)(t.span,{className:"jargon-term",children:["OGL",(0,s.jsx)(t.span,{className:"jargon-info",children:"Open Game License"})]})})," upheavle to create a better dice roller that supports more systems, is easy to customize and offers deterministic rolling for integration with back-end number generators. I also plan to make blog posts more frequently so others know this project isn't dead (My day job got busy the last few months). I hope it's a productive year."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>r});var s=i(6540);const o={},a=s.createContext(o);function n(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);