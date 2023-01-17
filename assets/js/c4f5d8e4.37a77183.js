"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4195],{9335:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(7294),r=n(6010),i=n(3285),o=(n(9960),n(2263));const l="heroBanner_qdFl",s="heroBannerText_x20J",c="bgDice_saGU";var m=n(7462);const d="features_xdhU",u="featureImg_IxXR",h="diceDemo_hwRR",g=[{title:"High Performance",Img:"/img/icons/launch.svg",description:a.createElement(a.Fragment,null,"Developed from the ground up with performance in mind. Using web workers, offscreen canvas rendering, WASM, and array buffers to speed everything up. Go ahead, roll hundreds of dice.")},{title:"Compact",Img:"/img/icons/package.svg",description:a.createElement(a.Fragment,null,"Custom configured physics simulation engine (AmmoJS) and rendering engine (BabylonJS) in order to keep the JavaScript payload around 400k after compression. That's a full 3D environment with physics that runs in a browser!")},{title:"Responsive",Img:"/img/icons/scalable.svg",description:a.createElement(a.Fragment,null,"Designed to be responsive and perform great on mobile devices. Not only will the Dice-Box resize with the browser window, but you can also set the size of your dice in the configurations.")},{title:"Themable",Img:"/img/icons/unit.svg",description:a.createElement(a.Fragment,null,"Variety is the spice of life. The theme system is flexible, enabling different 3D dice models, colors and skins. Every roll can have a different look. Comes pre-packed with HEX color support, but one can easily drop in ",a.createElement("strong",null,a.createElement("a",{href:"https://github.com/3d-dice/dice-themes",target:"_blank"},"custom built themes"))," for the look you want.")},{title:"Easy Config",Img:"/img/icons/feature-list.svg",description:a.createElement(a.Fragment,null,"Many of the physics and 3D environment ",a.createElement("strong",null,a.createElement("a",{href:"/docs/usage/config#configuration-options"},"paramaters"))," have been exposed for easy customization. Want to make the gravity five times stronger? Go right ahead. All parameters are easy to alter even after initializing the Dice-Box.")},{title:"Addon Support",Img:"/img/icons/box-solution.svg",description:a.createElement(a.Fragment,null,"A few addons are already available at ",a.createElement("strong",null,a.createElement("a",{href:"https://github.com/3d-dice",target:"_blank"},"3d-dice"))," with more in the works. The results of the dice roller are formatted as a detailed JavaScript object. Addons can build on top of those results for any number of uses. Custom events provide convenient spots to tie into the action.")}];function f(e){let{Img:t,title:n,description:i}=e;return a.createElement("div",{className:(0,r.Z)("col col--4")},a.createElement("div",{className:"text--center"},a.createElement("img",{className:u,alt:n,src:t})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,n),a.createElement("p",null,i)))}function p(){return a.createElement("section",{className:d},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},g.map(((e,t)=>a.createElement(f,(0,m.Z)({key:t},e))))),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col col--12")},a.createElement("h2",null,"Live Demo"),a.createElement("p",null,"Try it out for yourself!"),a.createElement("div",{id:"dice-box"},a.createElement("iframe",{id:"dice-demo",className:h,src:"https://d3rivgcgaqw1jo.cloudfront.net/index.html"}))))))}function v(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:(0,r.Z)("hero hero--primary",l)},a.createElement("iframe",{id:"bg-dice",className:c,src:"https://d3rivgcgaqw1jo.cloudfront.net/demos/fountain/index.html"}),a.createElement("div",{className:(0,r.Z)("container",s)},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("p",{className:"hero__small"},"* available as an NPM module *")))}function E(){const{siteConfig:e}=(0,o.Z)();return a.createElement(i.Z,{title:"Roll some dice!",description:"3D dice module for JavaScript Apps with TTRPG in mind"},a.createElement(v,null),a.createElement("main",null,a.createElement(p,null)))}}}]);