"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=l,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:3},o="Methods",i={unversionedId:"usage/methods",id:"usage/methods",title:"Methods",description:"Promised based rolls",source:"@site/docs/usage/methods.md",sourceDirName:"usage",slug:"/usage/methods",permalink:"/docs/usage/methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/methods.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Common Objects",permalink:"/docs/usage/objects"},next:{title:"Callbacks",permalink:"/docs/usage/callbacks"}},p={},d=[{value:"Promised based rolls",id:"promised-based-rolls",level:2},{value:"Roll",id:"roll",level:2},{value:"Example",id:"example",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Add",id:"add",level:2},{value:"Example",id:"example-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Reroll",id:"reroll",level:2},{value:"Example",id:"example-2",level:3},{value:"Arguments",id:"arguments-2",level:3},{value:"Options",id:"options-1",level:3},{value:"Remove",id:"remove",level:2},{value:"Example",id:"example-3",level:3},{value:"Arguments",id:"arguments-3",level:3},{value:"Clear",id:"clear",level:2},{value:"Hide",id:"hide",level:2},{value:"Show",id:"show",level:2},{value:"Get Roll Results",id:"get-roll-results",level:2},{value:"Update Config",id:"update-config",level:2}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"methods"},"Methods"),(0,l.kt)("h2",{id:"promised-based-rolls"},"Promised based rolls"),(0,l.kt)("p",null,"The methods ",(0,l.kt)("inlineCode",{parentName:"p"},".roll()"),",",(0,l.kt)("inlineCode",{parentName:"p"},".add()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".reroll()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".remove()")," are all methods that return a promise containing the results of the dice rolled by the callee. So it is possible to write ",(0,l.kt)("inlineCode",{parentName:"p"},"diceBox.roll('4d6').then(results => console.log(results))"),". Results can also be retrieved from the ",(0,l.kt)("inlineCode",{parentName:"p"},"onRollComplete")," callback event or by using the ",(0,l.kt)("inlineCode",{parentName:"p"},".getRollResults()")," method (not a promise)."),(0,l.kt)("h2",{id:"roll"},"Roll"),(0,l.kt)("p",null,"A roll will clear current dice and start a new roll. Returns a promise with an array of ",(0,l.kt)("em",{parentName:"p"},"die results")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"roll(notation:mixed, options = {theme:string, newStartPoint:boolean})\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.roll('2d20',{theme:'rust'})\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notation"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," array ","|"," notation object ","|"," array of notation objects"),(0,l.kt)("td",{parentName:"tr",align:null},"n\\a"),(0,l.kt)("td",{parentName:"tr",align:null},"See notation description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"see options"),(0,l.kt)("td",{parentName:"tr",align:null},"options that can be set with each roll")))),(0,l.kt)("admonition",{title:"Notation",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The notation argument can accept the following roll formats"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"simple string notation described as 'number of dice' + 'd' + 'number of sides on the die'. e.g.: ",(0,l.kt)("inlineCode",{parentName:"li"},"5d6")," rolls five six-sided dice."),(0,l.kt)("li",{parentName:"ol"},"an array of string notation. e.g.: ",(0,l.kt)("inlineCode",{parentName:"li"},"['2d10','2d6']")),(0,l.kt)("li",{parentName:"ol"},"a Roll Object as described above. e.g.:",(0,l.kt)("inlineCode",{parentName:"li"},"{qty: 5, sides: 10}")),(0,l.kt)("li",{parentName:"ol"},"an array of Roll Objects. e.g.:",(0,l.kt)("inlineCode",{parentName:"li"},"[{qty: 2, sides: 10},{qty: 1, sides: 6}]")," |"),(0,l.kt)("li",{parentName:"ol"},"a mixed array of Roll Objects and string notation. e.g.:",(0,l.kt)("inlineCode",{parentName:"li"},"[{qty: 2, sides: 10},'2d8']")))),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"theme"),(0,l.kt)("td",{parentName:"tr",align:null},"string - optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"the systemName of a theme for the roll. This value will override theme values that appear in the notation object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newStartPoint"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean - optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"will toss the collection of dice in from a new point along the edge of the box")))),(0,l.kt)("admonition",{title:"Themes",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Themes can be specified in four different places. On the config object at initialization, as an options parameter when using ",(0,l.kt)("inlineCode",{parentName:"p"},".roll()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".add()"),", as specified in a ",(0,l.kt)("em",{parentName:"p"},"roll object")," and as specified in a ",(0,l.kt)("em",{parentName:"p"},"die result object"),". Themes are applied in the order of ",(0,l.kt)("em",{parentName:"p"},"options parameter")," first, ",(0,l.kt)("em",{parentName:"p"},"roll object")," or ",(0,l.kt)("em",{parentName:"p"},"die result object")," second and box ",(0,l.kt)("em",{parentName:"p"},"config option")," third. The ",(0,l.kt)("em",{parentName:"p"},"roll object")," and ",(0,l.kt)("em",{parentName:"p"},"die result object")," are processed at the same level.")),(0,l.kt)("h2",{id:"add"},"Add"),(0,l.kt)("p",null,"This method will add the specified notation to the current roll in a new roll group. Returns a promise with an array of ",(0,l.kt)("em",{parentName:"p"},"die results")," for the dice that were added."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"add(notation:mixed, options = {theme:string, newStartPoint:boolean})\n")),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.add([{qty: 2, sides: 8},'1d6'],{newStartPoint: false})\n")),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notation"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," array ","|"," notation object ","|"," array of notation objects"),(0,l.kt)("td",{parentName:"tr",align:null},"n\\a"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as ",(0,l.kt)("inlineCode",{parentName:"td"},"roll")," notation description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"see ",(0,l.kt)("inlineCode",{parentName:"td"},"roll")," options"),(0,l.kt)("td",{parentName:"tr",align:null},"options that can be set with each roll")))),(0,l.kt)("h2",{id:"reroll"},"Reroll"),(0,l.kt)("p",null,"This method will reroll a die. Returns a promise with an array of die results for the dice that were rerolled. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"reroll(notation:mixed, options = {remove:boolean, newStartPoint:boolean})\n")),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.reroll({groupId: 0,rollId: 2})\n")),(0,l.kt)("h3",{id:"arguments-2"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notation"),(0,l.kt)("td",{parentName:"tr",align:null},"notation object ","|"," array of notation objects"),(0,l.kt)("td",{parentName:"tr",align:null},"n\\a"),(0,l.kt)("td",{parentName:"tr",align:null},"See notation note below. Valid notation includes objects returned from ",(0,l.kt)("inlineCode",{parentName:"td"},"roll")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"add")," promises.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"see options"),(0,l.kt)("td",{parentName:"tr",align:null},"options that can be set with each roll")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("strong",{parentName:"p"},"notation")," argument here requires an roll object or an array of roll objects identifying the roll group ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," and die ",(0,l.kt)("inlineCode",{parentName:"p"},"rollId")," you wish to reroll. Die result objects from previous rolls are valid arguments and can be passed in to trigger a reroll.")),(0,l.kt)("h3",{id:"options-1"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean - optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"indicates the die being rerolled should be removed from the scene")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newStartPoint"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean - optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"will toss the collection of dice in from a new point along the edge of the box")))),(0,l.kt)("h2",{id:"remove"},"Remove"),(0,l.kt)("p",null,"Remove dice from the scene. Returns a promise with an array of die results for the dice that were removed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"remove(notation:mixed)\n")),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.remove({groupId: 0,rollId: 2})\n")),(0,l.kt)("h3",{id:"arguments-3"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notation"),(0,l.kt)("td",{parentName:"tr",align:null},"notation object ","|"," array of notation objects"),(0,l.kt)("td",{parentName:"tr",align:null},"n\\a"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as ",(0,l.kt)("inlineCode",{parentName:"td"},"reroll")," notation description")))),(0,l.kt)("h2",{id:"clear"},"Clear"),(0,l.kt)("p",null,"This will clear all dice from the scene."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.clear()\n")),(0,l.kt)("h2",{id:"hide"},"Hide"),(0,l.kt)("p",null,"This will hide the canvas element that the Dice-Box is rendered to."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.hide()\n")),(0,l.kt)("h2",{id:"show"},"Show"),(0,l.kt)("p",null,"This will show the canvas element that the Dice-Box is rendered to."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.show()\n")),(0,l.kt)("h2",{id:"get-roll-results"},"Get Roll Results"),(0,l.kt)("p",null,"Get the results of all the dice in the scene at anytime. However, if dice are still rolling they will not have a value yet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.getRollResults() // returns an array of roll result objects\n")),(0,l.kt)("h2",{id:"update-config"},"Update Config"),(0,l.kt)("p",null,"Use this method to update any of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/config#configuration-options"},"config settings"),". Most settings will be applied immediately, but theme/dice color changes will only take effect before or after a roll."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.updateConfig({configObject})\n")))}m.isMDXComponent=!0}}]);