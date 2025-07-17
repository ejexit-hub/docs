import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ExitTech Wiki',
  tagline: 'Technical Knowledge Base',
  favicon: 'img/logo-exit-technologies.png',

  // Custom fields for environment variables
  customFields: {
    supabaseUrl: process.env.REACT_APP_SUPABASE_URL || 'https://gnwugojconikwvcduegl.supabase.co',
    supabaseAnonKey: process.env.REACT_APP_SUPABASE_ANON_KEY || '',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://exit-product-training.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: false, // Disable sidebar globally
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/logo.svg',
    navbar: {
      title: 'Wiki',
      logo: {
        alt: 'ExitTech Logo',
        src: 'img/logo-exit-technologies.png',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
          activeBaseRegex: '^/docs/(?!product-training|technical-cutlines)',
        },
        {
          type: 'dropdown',
          label: 'Product Training',
          position: 'left',
          to: '/docs/product-training/intro',
          items: [
            {
              label: 'Introduction',
              to: '/docs/product-training/intro',
            },
            {
              label: 'Cards',
              to: '/docs/product-training/cards',
            },
            {
              label: 'Drives',
              to: '/docs/product-training/drives',
            },
            {
              label: 'GPU',
              to: '/docs/product-training/gpu',
            },
            {
              label: 'Laptops & Desktops',
              to: '/docs/product-training/laptops-desktops',
            },
            {
              label: 'Memory',
              to: '/docs/product-training/memory',
            },
            {
              label: 'Networking',
              to: '/docs/product-training/networking',
            },
            {
              label: 'Phones',
              to: '/docs/product-training/phones',
            },
            {
              label: 'Processors',
              to: '/docs/product-training/processors',
            },
            {
              label: 'Servers',
              to: '/docs/product-training/servers',
            },
            {
              label: 'Storage',
              to: '/docs/product-training/storage',
            },
            {
              label: 'Tablets',
              to: '/docs/product-training/tablets',
            },
          ],
        },
        {
          to: '/docs/technical-cutlines',
          label: 'Technical Cutlines',
          'aria-label': 'View the live Technical Cutlines Google Sheet',
          position: 'left',
        },
        // GitHub button removed; search bar will appear on the right
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
