// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const footerConfig = require('literacy-site-theme/footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Environmental Systems Literacy',
  tagline: 'A free, open 18-week curriculum that teaches ages 8–12 how planetary systems work and where human infrastructure fits into them',
  favicon: 'img/favicon.ico',

  url: 'https://literacy-for-kids.github.io',
  baseUrl: '/environmental_system_literacy/',

  organizationName: 'literacy-for-kids',
  projectName: 'environmental_system_literacy',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['literacy-site-theme'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/literacy-for-kids/environmental_system_literacy/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'Environmental Systems Literacy',
        logo: {
          alt: 'Environmental Systems Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {
            type: 'dropdown',
            label: 'Literacy for Kids',
            position: 'left',
            items: [
              {label: 'Hub', href: hub.href},
              ...curricula.map((c) => ({
                label: c.label.replace(' Literacy', ''),
                href: c.href,
              })),
            ],
          },
          {
            href: 'https://github.com/literacy-for-kids/environmental_system_literacy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
