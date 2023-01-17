"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:2},o="Fantastic Dice Parser",i={unversionedId:"addons/parser",id:"version-0.6/addons/parser",title:"Fantastic Dice Parser",description:"As mentioned in the config setup, Dice-Box requires a parser to do the fun things. Any roll notations that are more than the simple pattern d{side}+/-{modifier} have to go through a parser to make sense of the notation. All the rolls supported are documented at Roll20 Dice Specification",source:"@site/versioned_docs/version-0.6/addons/parser.md",sourceDirName:"addons",slug:"/addons/parser",permalink:"/docs/0.6/addons/parser",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6/addons/parser.md",tags:[],version:"0.6",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"About Addons",permalink:"/docs/0.6/addons/"},next:{title:"Advanced Roller",permalink:"/docs/0.6/addons/advRoller"}},s={},d=[{value:"dice-roller-parser",id:"dice-roller-parser",level:2},{value:"Parser Interface",id:"parser-interface",level:2},{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Methods",id:"methods",level:2},{value:"parseNotation",id:"parsenotation",level:3},{value:"handleRerolls",id:"handlererolls",level:3},{value:"rollResults Input",id:"rollresults-input",level:4},{value:"Returned Dice Object:",id:"returned-dice-object",level:4},{value:"parseFinalResults",id:"parsefinalresults",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fantastic-dice-parser"},"Fantastic Dice Parser"),(0,a.kt)("p",null,"As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/docs/usage/config"},"config setup"),", Dice-Box requires a parser to do the fun things. Any roll notations that are more than the simple pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"{quantity}d{side}+/-{modifier}")," have to go through a parser to make sense of the notation. All the rolls supported are documented at ",(0,a.kt)("a",{parentName:"p",href:"https://roll20.zendesk.com/hc/en-us/articles/360037773133-Dice-Reference#DiceReference-Roll20DiceSpecification"},"Roll20 Dice Specification")),(0,a.kt)("h2",{id:"dice-roller-parser"},"dice-roller-parser"),(0,a.kt)("p",null,"Rather than write my own parser from the ground up, I found one written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/BTMorton"},"Ben Morton")," called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/BTMorton/dice_roller"},"dice_roller"),". While almost fully featured, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dice_roller")," project seems to have gone dormant. I forked that project into ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-roller-parser"},"@3d-dice/dice-roller-parser"),", where I've been able to fix some bugs I've found as well as add features I need for Dice-Box. The important feature of dice_roller that made it different from other programmatic dice rollers like ",(0,a.kt)("a",{parentName:"p",href:"https://dice-roller.github.io/documentation/"},"RPG Dice Roller")," is that it allows a custom random function as a constructor parameter. Instead of using a random function, I hijack this feature to pass in a function that contains all the roll results from Dice-Box. So insted of producing random numbers, it's just parsing the notation with the values I've delivered to it."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The documentation for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-roller-parser"},"@3d-dice/dice-roller-parser")," on GitHub is pretty robust so it is not reproduced here.")),(0,a.kt)("h2",{id:"parser-interface"},"Parser Interface"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"F"),"antastic ",(0,a.kt)("strong",{parentName:"p"},"D"),"ice ",(0,a.kt)("strong",{parentName:"p"},"P"),"arser, or FDP for short, simply provides an interface between ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-roller-parser"},"@3d-dice/dice-roller-parser")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-box"},"@3d-dice/dice-box"),". Since ",(0,a.kt)("inlineCode",{parentName:"p"},"dice-roller-parser")," is pretty self contained, I did not want to include this interface in that package. The parser is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/fdp"},"@3d-dice/fdp")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@3d-dice/dice-roller-parser")," is a dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"@3d-dice/fdp"),". You do not have to install it seperatly.")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Install the library using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @3d-dice/fdp\n")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Then create a new instace of the parser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import DiceParser from '@3d-dice/fdp'\n\nconst DRP = new DiceParser()\n")),(0,a.kt)("p",null,"The DRP class instance now has methods to parse raw notations, process re-rolls and compute the final results from ",(0,a.kt)("inlineCode",{parentName:"p"},"dice-box")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="dice-to-roll">\n    <input id="input--notation" class="input" placeholder="2d20" autocomplete="off" />\n</form>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const form = document.getElementById("dice-to-roll")\nconst notationInput = document.getElementById("input--notation")\n\nconst submitForm = (e) => {\n  e.preventDefault();\n    const notation = DRP.parseNotation(notationInput.value)\n}\n\nform.addEventListener("submit", submitForm)\n')),(0,a.kt)("h3",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"One thing this modules does not do is provide the interface for providing an input for the roll notation string or displaying the final results. It is expected that the developer will create their own inputs and outputs or use modules from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/fui"},"@3d-dice/fui")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#parsenotation"},"parseNotation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"notation")," :string"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts a dice string input, parses it and returns a JSON representation of the parsed input.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#handlererolls"},"handleRerolls")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rollResults")," :array"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts an array of dice roll results and returns a new array of dice objects that need to be re-rolled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#parsefinalresults"},"parseFinalResults")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rollResults")," :array"),(0,a.kt)("td",{parentName:"tr",align:null},"pass in a roll results object to get the computed results of the dice roll")))),(0,a.kt)("h3",{id:"parsenotation"},"parseNotation"),(0,a.kt)("p",null,"Accepts a dice string input, parses it and returns a JSON representation of the parsed input."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"DRP.parseNotation('4d6')")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  die: {\n    type: 'number',\n    value: 6\n  },\n  count: {\n    type: 'number',\n    value: 4\n  },\n  type: 'die',\n  mods: [],\n  root: true,\n  label: ''\n}\n")),(0,a.kt)("p",null,"See also: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3d-dice/dice-roller-parser#just-parse-the-value"},"Just parse the value")),(0,a.kt)("h3",{id:"handlererolls"},"handleRerolls"),(0,a.kt)("p",null,"This method accepts an array of dice rolls (generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"parseNotation"),", updated by ",(0,a.kt)("inlineCode",{parentName:"p"},"dice-box"),") and returns a new array of dice objects that need to be re-rolled. Examples of rolls that could generate rerolls include: exploding, penetrating, and compounding rolls (e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"6d6!"),"). Reroll and reroll-once notation is also supported (e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"2d12r1"),")."),(0,a.kt)("h4",{id:"rollresults-input"},"rollResults Input"),(0,a.kt)("p",null,"An example of what the input object should look like. This is what the final results look like from ",(0,a.kt)("inlineCode",{parentName:"p"},"dice-box"),".\nSee also: ",(0,a.kt)("a",{parentName:"p",href:"/docs/usage/objects"},"Dice Box: Common Objects"),"\nExample ",(0,a.kt)("inlineCode",{parentName:"p"},"3d6r1")," (roll 3 six sided dice, reroll dice that resulted in 1)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    qty: 4,\n    sides: 6,\n    mods: [\n      {\n        type: "reroll",\n        target: {\n          type: "target",\n          mod: null,\n          value: {\n            type: "number",\n            value: 1\n          }\n        }\n      }\n    ],\n    rolls: [\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 0,\n        theme: "diceOfRolling",\n        value: 1\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 1,\n        theme: "diceOfRolling",\n        value: 4\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: 2,\n        theme: "diceOfRolling",\n        value: 3\n      },\n      {\n        sides: 6,\n        groupId: 0,\n        rollId: "0.1",\n        theme: "diceOfRolling",\n        value: 2\n      }\n    ],\n    groupId: 0,\n    value: 10\n  }\n]\n')),(0,a.kt)("h4",{id:"returned-dice-object"},"Returned Dice Object:"),(0,a.kt)("p",null,"Any dice that need a reroll are passed back in an array."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The group the reroll target belongs to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rollId"),(0,a.kt)("td",{parentName:"tr",align:null},"int or string"),(0,a.kt)("td",{parentName:"tr",align:null},"The roll id of the die being rerolled. This will be incremented by ",(0,a.kt)("inlineCode",{parentName:"td"},".1")," for every reroll made")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"side"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of sides the reroll die has")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"qty"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of dice to be rolled. This will always be 1 on rerolls but is needed by ",(0,a.kt)("inlineCode",{parentName:"td"},"dice-box"))))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "groupId": 0,\n        "rollId": "2.1",\n        "sides": 6,\n        "qty": 1\n    },\n    {\n        "groupId": 0,\n        "rollId": "3.1",\n        "sides": 6,\n        "qty": 1\n    }\n]\n')),(0,a.kt)("h3",{id:"parsefinalresults"},"parseFinalResults"),(0,a.kt)("p",null,"After all rolls and rerolls have completed, you can pass the results object to ",(0,a.kt)("inlineCode",{parentName:"p"},"parseFinalResults")," to get the final results of the dice roll. This typically happens inside ",(0,a.kt)("inlineCode",{parentName:"p"},"dice-box"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"onRollComplete")," callback method. "),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const results = DRP.parseFinalResults(results)\n")),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"3d6r1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "count": {\n    "type": "number",\n    "value": 3,\n    "success": null,\n    "successes": 0,\n    "failures": 0,\n    "valid": true,\n    "order": 0\n  },\n  "die": {\n    "type": "number",\n    "value": 6,\n    "success": null,\n    "successes": 0,\n    "failures": 0,\n    "valid": true,\n    "order": 0\n  },\n  "rolls": [\n    {\n      "critical": null,\n      "die": 6,\n      "matched": false,\n      "order": 0,\n      "roll": 2,\n      "success": null,\n      "successes": 0,\n      "failures": 0,\n      "type": "roll",\n      "valid": true,\n      "value": 2\n    },\n    {\n      "critical": "failure",\n      "die": 6,\n      "matched": false,\n      "order": 1,\n      "roll": 1,\n      "success": null,\n      "successes": 0,\n      "failures": 0,\n      "type": "roll",\n      "valid": false,\n      "value": 1,\n      "reroll": true\n    },\n    {\n      "critical": "failure",\n      "die": 6,\n      "matched": false,\n      "order": 2,\n      "roll": 1,\n      "success": null,\n      "successes": 0,\n      "failures": 0,\n      "type": "roll",\n      "valid": false,\n      "value": 1,\n      "reroll": true\n    },\n    {\n      "critical": null,\n      "die": 6,\n      "matched": false,\n      "order": 3,\n      "roll": 3,\n      "success": null,\n      "successes": 0,\n      "failures": 0,\n      "type": "roll",\n      "valid": true,\n      "value": 3\n    },\n    {\n      "critical": "failure",\n      "die": 6,\n      "matched": false,\n      "order": 2,\n      "roll": 1,\n      "success": null,\n      "successes": 0,\n      "failures": 0,\n      "type": "roll",\n      "valid": false,\n      "value": 1,\n      "reroll": true\n    },\n    {\n      "critical": null,\n      "die": 6,\n      "matched": false,\n      "order": 5,\n      "roll": 5,\n      "success": null,\n      "successes": 0,\n      "failures": 0,\n      "type": "roll",\n      "valid": true,\n      "value": 5\n    }\n  ],\n  "success": null,\n  "successes": 0,\n  "failures": 0,\n  "type": "die",\n  "valid": true,\n  "value": 10,\n  "order": 0,\n  "matched": false\n}\n')))}u.isMDXComponent=!0}}]);