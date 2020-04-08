/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const repoUrl = 'https://github.com/tauri-apps/tauri'

const siteConfig = {
  title: 'Tauri Studio', // Title for your website.
  tagline: 'Make smaller, faster, more secure native apps with Rust',
  url: 'https://tauri.studio', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'tauri',
  organizationName: 'Tauri Studio',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: 'about', label: 'About' },
    { doc: 'intro', label: 'Docs' },
    { doc: 'config', label: 'API' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/tauri.png',
  footerIcon: 'img/tauri.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#263239',
    secondaryColor: '#35546a'
  },

  /* Custom fonts for website */
  
  fonts: {
    tauri: [
      "Tauri",
      "sans-serif"
    ],
    // myOtherFont: [
    //   "-apple-system",
    //   "system-ui"
    // ]
  },

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Tauri&display=swap",
  ],
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Tauri Studio.`,

  // This is used to place a note about our sponsor in the footer
  deployedBy: {
    text: `This site is powered by Netlify.`,
    link: 'https://www.netlify.com',
  },

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', '/js/custom.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  twitterUrl: 'https://twitter.com/tauriapps',
  repoUrl,
  discordUrl: 'https://discord.gg/SpmNs4S',
  codeOfConduct: {
    text: 'Code of Conduct',
    link:
      'https://github.com/tauri-apps/tauri/blob/dev/.github/CODE_OF_CONDUCT.md',
  },
}

module.exports = siteConfig
