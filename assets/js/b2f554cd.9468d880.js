"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"version-1","metadata":{"permalink":"/blog/version-1","editUrl":"https://github.com/3d-dice/docs/blog/2022-06-08-version-1.md","source":"@site/blog/2022-06-08-version-1.md","title":"Version 1 Release","description":"Big announcement. Version 1.0 has been released! The \\"last few things\\" took longer than expected. I really wanted to rework how themes were handled internally so different dice models could be used. I dug into supporting \\"levels of detail\\", \\"HD textures\\", \\"mobile textures\\" and many other things involved with over-engineering an idea. I\'m happy with what I settled on which accomplishes the original goal of supporting different dice models.","date":"2022-06-08T00:00:00.000Z","formattedDate":"June 8, 2022","tags":[{"label":"chat","permalink":"/blog/tags/chat"}],"readingTime":2.805,"truncated":false,"authors":[{"name":"Frank Ali","title":"Front-End Developer","url":"https://github.com/frankieali","imageURL":"https://github.com/frankieali.png","key":"frankieali"}],"frontMatter":{"slug":"version-1","title":"Version 1 Release","authors":["frankieali"],"tags":["chat"]},"nextItem":{"title":"Future Features","permalink":"/blog/future-features"}},"content":"Big announcement. __Version 1.0 has been released!__ The \\"last few things\\" took longer than expected. I really wanted to rework how themes were handled internally so different dice models could be used. I dug into supporting \\"levels of detail\\", \\"HD textures\\", \\"mobile textures\\" and many other things involved with over-engineering an idea. I\'m happy with what I settled on which accomplishes the original goal of supporting different dice models. \\n\\nNow, [@3d-dice/dice-box](https://github.com/3d-dice/dice-box) only ships with the \'default\' dice theme. All other themes I\'ve develop have been moved into their own project at [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes). This way, users can grab the themes they want and simply drop them into their themes folder. I even made a few custom color themes that really utilize the alpha channel in the diffuse texture. I was able to crete both color configurable textures that had a gritty overlay with the numbers. Check out the [Rust](https://github.com/3d-dice/dice-themes/tree/main/themes/rust) and [Rock](https://github.com/3d-dice/dice-themes/tree/main/themes/rock) themes if you\'re interested.\\n\\nOne of the hangups in my \\"last few things\\" was discovering that the dice models I had purchased from [Sketchfab](https://sketchfab.com/search?q=dice&type=models) and [CG Trader](https://www.cgtrader.com/3d-models?keywords=dice) had royalty free licenses, but redistribution was not allowed. Finding good license free game dice was a problem. Thankfully, I had been collaborating with the dev team at [Quest Portal](https://questportal.com/). They recently implemented `dice-box` into their virtual table top platform. This was a great experience and helped to really test the project\'s overall viability and production readiness. More on that in another post. Anyway, the team at Quest Portal was kind enough to help me out with procuring some license free game dice models. They are now the \'default\' set. The default set will soon have a couple of bonus dice, including a `d2` a `fate` die and a `d6` with pips. However, while I was waiting on those dice to be produced, I decided to learn how to make my own dice set as well. I really wanted to show off the ability to use wildly different dice models in the project.\\n\\n![Dice models in Blender](/img/diceModels-mat-wireframe.jpg)\\n\\nI learned soo much about [Blender](https://www.blender.org/). Thank goodness for YouTube. While it was a struggle, I was finally able to create two sets of 3D dice models. One is the \\"smooth\\" set and the other is the \\"gemstone\\" set. Carving the numbers out of the faces and then generating proper normal maps was a real struggle. After that the struggle continued as I attempted to create smooth low-poly assets, but I finally made it across the finish line. What we have now are two CC0 dice model assets.\\n\\n![Gemstone models in Blender](/img/gemstone-wireframe.jpg)\\n\\n### Some other great features in 1.0\\n - New config option for illumination level\\n - New config option for shadow transparency\\n - A truly random auto-generated fallback for non-standard/unsupported dice such as `d5`\\n - New config option to suspend the 3D animation and just get the random numbers (using the new random auto-generated fallback)\\n - Support for `fate` dice\\n - Improved error catching and error messages\\n - Multiple other bug fixes\\n\\nIn order to avoid a wall of text, I\'m going to wrap up here. There are many other new features that came with version 1.0. [BabylonJS](https://www.babylonjs.com/) finally did hit version 5.0. Yay! So this release will benefit from all the performance improvements in Babylon as well. I hope other devs find this project useful and that I\'m able to continue to developing useful features."},{"id":"future-features","metadata":{"permalink":"/blog/future-features","editUrl":"https://github.com/3d-dice/docs/blog/2022-06-02-future-features.md","source":"@site/blog/2022-06-02-future-features.md","title":"Future Features","description":"This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this \\"side project\\" of mine. I\'m going to leave some of those ideas here for future me.","date":"2022-06-02T00:00:00.000Z","formattedDate":"June 2, 2022","tags":[{"label":"chat","permalink":"/blog/tags/chat"}],"readingTime":2.66,"truncated":false,"authors":[{"name":"Frank Ali","title":"Front-End Developer","url":"https://github.com/frankieali","imageURL":"https://github.com/frankieali.png","key":"frankieali"}],"frontMatter":{"slug":"future-features","title":"Future Features","authors":["frankieali"],"tags":["chat"]},"prevItem":{"title":"Version 1 Release","permalink":"/blog/version-1"},"nextItem":{"title":"My Pandemic Project is Almost Ready","permalink":"/blog/first-blog-post"}},"content":"This is kind of like my own feature request post. There are a bunch of things that I still want to accomplish with this \\"side project\\" of mine. I\'m going to leave some of those ideas here for future me.\\n\\n1. I just discovered [Rapier.rs](https://rapier.rs/). This is a new physics engine built using [Rust](https://www.rust-lang.org/) (and also documented using [Docusaurus](https://docusaurus.io/) which this site uses as well). This looks like an amazing physics engine and something I certainly want to try. [AmmoJS](https://github.com/kripken/ammo.js/) has been great, but development on the Bullet physics engine has slowed down and I think Rapier will be a quality successor. Check out this [comparison on YouTube](https://www.youtube.com/watch?v=SOFUgOkuHW8). Right now, the only bottleneck I get during playback is from the Bullet physics simulation at around 400 dice which still isn\'t bad.\\n\\n2. I would love to implement the sounds of dice rolling. I\'ve been looking at other projects such as [Dice So Nice](https://gitlab.com/riccisi/foundryvtt-dice-so-nice) and BabylonJS\'s own physics imposter implementation to see how I could implement the `onCollideEvent` to trigger sounds. Then there might even be different sound packages similar to Dice So Nice\\n\\n3. Special Effects. The great thing about having a 3D engine and digital dice is that the sky is the limit when it comes to effects. I would love to see exploding dice actually explode. I would like to see some sort of effect when critical roles are triggered. I\'d also like to try to implement animated materials, such as water, or even animated dice, like clockwork steampunk dice with moving gears. Take a look at the [Pride dice set from D&D Beyond](https://www.dndbeyond.com/claim/dice/pride?icid_medium=ddb&icid_source=article&icid_campaign=dice-true-color&icid_content=claim-true-color). They get the idea.\\n\\n4. An easy one to do would be to implement some simple post-processing in BabylonJS, such as motion blur, anti-aliasing, or other fun effects\\n\\n5. On the \\"very near future\\" list is creating the [Genesys Dice](https://www.fantasyflightgames.com/en/news/2017/6/27/genesys/) set. The new theme system in version 1.0 allows for rolling and identifying dice beyond their number type. So creating the Genesys set should be a good test for the theme system\'s flexibility. It will probably involve creating a new parser that I\'m hoping to do as a true \\"plug-in\\". Soon to be followed by [Legend of the Five Rings](https://www.fantasyflightgames.com/en/legend-of-the-five-rings-roleplaying-game/) which I also enjoy playing.\\n\\n6. Also on the \\"very near future\\" list is an \\"additional dice\\" theme. I\'ve got a set in the works that includes `d2`, `d14`, `d16`, `d18`, `d20`, `d24`, and `d30`. The modeling is almost complete. I still have to UV map everything which will be tricky. I really need to write a tutorial on how I make my themes from scratch.\\n\\n7. I\'d like to make a few more UI modules as well, such as:\\n    - __last \\"x\\" rolls__ - records the last few notations\\n    - __theme picker__ - an easy interface for switching up themes and theme color\\n    - __quick dice picker__ - similar to the dice table on Roll20\\n    - __die roll distribution__ - roll results are saved to the browsers IndexedDB and processed to produce distribution graphs\\n    - __favorite rolls__ - save a few frequently used notations\\n    - __notation builder__ - a simple touch based ui to build complex notation\\n\\nWell, that\'s it for now. Wish me luck."},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/3d-dice/docs/blog/2022-03-18-first-blog-post.md","source":"@site/blog/2022-03-18-first-blog-post.md","title":"My Pandemic Project is Almost Ready","description":"It\'s been almost 2 years since I started digging into what it would take to build a fantastic dice roller that anyone could use in their own JavaScript projects. I\'ve spend many hours optimizing this project so it would be both flexible and performant. I\'m hopeful that it will gain traction and live up to expectations.","date":"2022-03-18T00:00:00.000Z","formattedDate":"March 18, 2022","tags":[{"label":"chat","permalink":"/blog/tags/chat"}],"readingTime":0.46,"truncated":false,"authors":[{"name":"Frank Ali","title":"Front-End Developer","url":"https://github.com/frankieali","imageURL":"https://github.com/frankieali.png","key":"frankieali"}],"frontMatter":{"slug":"first-blog-post","title":"My Pandemic Project is Almost Ready","authors":["frankieali"],"tags":["chat"]},"prevItem":{"title":"Future Features","permalink":"/blog/future-features"}},"content":"It\'s been almost 2 years since I started digging into what it would take to build a fantastic dice roller that *anyone* could use in their own JavaScript projects. I\'ve spend many hours optimizing this project so it would be both flexible and performant. I\'m hopeful that it will gain traction and live up to expectations.\\n\\nI have some more exciting features in que before hitting the version 1.0 switch. I\'m also waiting on [BabylonJS](https://www.babylonjs.com/) to hit [version 5](https://forum.babylonjs.com/t/babylon-js-5-is-coming/26750) this Spring.\\n\\nThis site will continue to be updated along the way.\\n\\nCheers!"}]}')}}]);