"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8792],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={slug:"future-features",title:"Future Features",authors:["frankieali"],tags:["chat"]},s=void 0,c={permalink:"/blog/future-features",editUrl:"https://github.com/3d-dice/docs/blog/2022-06-02-future-features.md",source:"@site/blog/2022-06-02-future-features.md",title:"Future Features",description:'This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this "side project" of mine. I\'m going to leave some of those ideas here for future me.',date:"2022-06-02T00:00:00.000Z",formattedDate:"June 2, 2022",tags:[{label:"chat",permalink:"/blog/tags/chat"}],readingTime:2.66,truncated:!1,authors:[{name:"Frank Ali",title:"Front-End Developer",url:"https://github.com/frankieali",imageURL:"https://github.com/frankieali.png",key:"frankieali"}],frontMatter:{slug:"future-features",title:"Future Features",authors:["frankieali"],tags:["chat"]},prevItem:{title:"Version 1 Release",permalink:"/blog/version-1"},nextItem:{title:"My Pandemic Project is Almost Ready",permalink:"/blog/first-blog-post"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this "side project" of mine. I\'m going to leave some of those ideas here for future me.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"I just discovered ",(0,i.kt)("a",{parentName:"p",href:"https://rapier.rs/"},"Rapier.rs"),". This is a new physics engine built using ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," (and also documented using ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," which this site uses as well). This looks like an amazing physics engine and something I certainly want to try. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kripken/ammo.js/"},"AmmoJS")," has been great, but development on the Bullet physics engine has slowed down and I think Rapier will be a quality successor. Check out this ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SOFUgOkuHW8"},"comparison on YouTube"),". Right now, the only bottleneck I get during playback is from the Bullet physics simulation at around 400 dice which still isn't bad.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"I would love to implement the sounds of dice rolling. I've been looking at other projects such as ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/riccisi/foundryvtt-dice-so-nice"},"Dice So Nice")," and BabylonJS's own physics imposter implementation to see how I could implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"onCollideEvent")," to trigger sounds. Then there might even be different sound packages similar to Dice So Nice")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Special Effects. The great thing about having a 3D engine and digital dice is that the sky is the limit when it comes to effects. I would love to see exploding dice actually explode. I would like to see some sort of effect when critical roles are triggered. I'd also like to try to implement animated materials, such as water, or even animated dice, like clockwork steampunk dice with moving gears. Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://www.dndbeyond.com/claim/dice/pride?icid_medium=ddb&icid_source=article&icid_campaign=dice-true-color&icid_content=claim-true-color"},"Pride dice set from D&D Beyond"),". They get the idea.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"An easy one to do would be to implement some simple post-processing in BabylonJS, such as motion blur, anti-aliasing, or other fun effects")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'On the "very near future" list is creating the ',(0,i.kt)("a",{parentName:"p",href:"https://www.fantasyflightgames.com/en/news/2017/6/27/genesys/"},"Genesys Dice")," set. The new theme system in version 1.0 allows for rolling and identifying dice beyond their number type. So creating the Genesys set should be a good test for the theme system's flexibility. It will probably involve creating a new parser that I'm hoping to do as a true \"plug-in\". Soon to be followed by ",(0,i.kt)("a",{parentName:"p",href:"https://www.fantasyflightgames.com/en/legend-of-the-five-rings-roleplaying-game/"},"Legend of the Five Rings")," which I also enjoy playing.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Also on the "very near future" list is an "additional dice" theme. I\'ve got a set in the works that includes ',(0,i.kt)("inlineCode",{parentName:"p"},"d2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d14"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d16"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d18"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d24"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"d30"),". The modeling is almost complete. I still have to UV map everything which will be tricky. I really need to write a tutorial on how I make my themes from scratch.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"I'd like to make a few more UI modules as well, such as:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},'last "x" rolls')," - records the last few notations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"theme picker")," - an easy interface for switching up themes and theme color"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quick dice picker")," - similar to the dice table on Roll20"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"die roll distribution")," - roll results are saved to the browsers IndexedDB and processed to produce distribution graphs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"favorite rolls")," - save a few frequently used notations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notation builder")," - a simple touch based ui to build complex notation")))),(0,i.kt)("p",null,"Well, that's it for now. Wish me luck."))}d.isMDXComponent=!0}}]);