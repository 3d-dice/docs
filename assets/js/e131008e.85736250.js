"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8792],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={slug:"future-features",title:"Future Features",authors:["frankieali"],tags:["chat"]},o=void 0,l={permalink:"/blog/future-features",editUrl:"https://github.com/3d-dice/docs/blog/2022-06-02-future-features.md",source:"@site/blog/2022-06-02-future-features.md",title:"Future Features",description:'This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this "side project" of mine. I\'m going to leave some of those ideas here for future me.',date:"2022-06-02T00:00:00.000Z",formattedDate:"June 2, 2022",tags:[{label:"chat",permalink:"/blog/tags/chat"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"Frank Ali",title:"Front-End Developer",url:"https://github.com/frankieali",imageURL:"https://github.com/frankieali.png",key:"frankieali"}],frontMatter:{slug:"future-features",title:"Future Features",authors:["frankieali"],tags:["chat"]},prevItem:{title:"Version 1 Release",permalink:"/blog/version-1"},nextItem:{title:"My Pandemic Project is Almost Ready",permalink:"/blog/first-blog-post"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this "side project" of mine. I\'m going to leave some of those ideas here for future me.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I just discovered ",(0,r.kt)("a",{parentName:"p",href:"https://rapier.rs/"},"Rapier.rs"),". This is a new physics engine built using ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," (and also documented using ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," which this site uses as well). This looks like an amazing physics engine and something I certainly want to try. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kripken/ammo.js/"},"AmmoJS")," has been great, but development on the Bullet physics engine has slowed down and I think Rapier will be a quality successor. Check out this ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SOFUgOkuHW8"},"comparison on YouTube"),". Right now, the only bottleneck I get during playback is from the Bullet physics simulation at around 400 dice which still isn't bad.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I would love to implement the sounds of dice rolling. I've been looking at other projects such as ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/riccisi/foundryvtt-dice-so-nice"},"Dice So Nice")," and BabylonJS's own physics imposter implementation to see how I could implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"onCollideEvent")," to trigger sounds. Then there might even be different sound packages similar to Dice So Nice")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Special Effects. The great thing about having a 3D engine and digital dice is that the sky is the limit when it comes to effects. I would love to see exploding dice actually explode. I would like to see some sort of effect when critical roles are triggered. I'd also like to try to implement animated materials, such as water, or even animated dice, like clockwork steampunk dice with moving gears. Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://www.dndbeyond.com/claim/dice/pride?icid_medium=ddb&icid_source=article&icid_campaign=dice-true-color&icid_content=claim-true-color"},"Pride dice set from D&D Beyond"),". They get the idea.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An easy one to do would be to implement some simple post-processing in BabylonJS, such as motion blur, anti-aliasing, or other fun effects")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On the "very near future" list is creating the ',(0,r.kt)("a",{parentName:"p",href:"https://www.fantasyflightgames.com/en/news/2017/6/27/genesys/"},"Genesys Dice")," set. The new theme system in version 1.0 allows for rolling and identifying dice beyond their number type. So creating the Genesys set should be a good test for the theme system's flexibility. It will probably involve creating a new parser that I'm hoping to do as a true \"plug-in\". Soon to be followed by ",(0,r.kt)("a",{parentName:"p",href:"https://www.fantasyflightgames.com/en/legend-of-the-five-rings-roleplaying-game/"},"Legend of the Five Rings")," which I also enjoy playing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Also on the "very near future" list is an "additional dice" theme. I\'ve got a set in the works that includes ',(0,r.kt)("inlineCode",{parentName:"p"},"d2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d14"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d16"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d18"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"d24"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"d30"),". The modeling is almost complete. I still have to UV map everything which will be tricky. I really need to write a tutorial on how I make my themes from scratch.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I'd like to make a few more UI modules as well, such as:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'last "x" rolls')," - records the last few notations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"theme picker")," - an easy interface for switching up themes and theme color"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quick dice picker")," - similar to the dice table on Roll20"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"die roll distribution")," - roll results are saved to the browsers IndexedDB and processed to produce distribution graphs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"favorite rolls")," - save a few frequently used notations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"notation builder")," - a simple touch based ui to build complex notation")))),(0,r.kt)("p",null,"Well, that's it for now. Wish me luck."))}u.isMDXComponent=!0}}]);