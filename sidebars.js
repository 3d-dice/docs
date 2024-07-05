/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Usage',
      items: [{
        type: 'autogenerated',
        dirName: 'usage'
      }]
    },
    // 'themes',
    {
      type: 'category',
      label: 'Themes',
      items: [{
        type: 'autogenerated',
        dirName: 'themes'
      }]
    },
    // {
    //   type: 'autogenerated',
    //   dirName: 'addons'
    // }
    {
      type: 'category',
      label: 'Addons',
      // link: {type: 'doc', id: 'addons/addonsIndex'},
      items: [{
        type: 'autogenerated',
        dirName: 'addons'
      }],
    }
  ],
  // changelog: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'changelog'
  //   }
  // ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
