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
          label: 'Getting Started',
          position: 'left',
          activeBaseRegex: '^/docs/(?!product-training|technical-cutlines)',
        },
        {
          type: 'dropdown',
          label: 'Training',
          position: 'left',
          items: [
            {
              label: 'Introduction',
              to: '/docs/product-training/intro',
            },
            {
              label: 'Processors',
              to: '/docs/product-training/processors',
            },
            {
              label: 'Memory',
              to: '/docs/product-training/memory',
            },
            {
              label: 'GPU',
              to: '/docs/product-training/gpu',
            },
            {
              label: 'Drives',
              to: '/docs/product-training/drives',
            },
            {
              label: 'Storage',
              to: '/docs/product-training/storage',
            },
            {
              label: 'Laptops & Desktops',
              to: '/docs/product-training/laptops-desktops',
            },
            {
              label: 'Servers',
              to: '/docs/product-training/servers',
            },
            {
              label: 'Networking',
              to: '/docs/product-training/networking',
            },
            {
              label: 'Cards',
              to: '/docs/product-training/cards',
            },
            {
              label: 'Phones',
              to: '/docs/product-training/phones',
            },
            {
              label: 'Tablets',
              to: '/docs/product-training/tablets',
            },
            {
              label: 'IT Glossary',
              to: '/it-glossary',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Sales',
          position: 'left',
          items: [
            {
              label: 'Coming Soon',
              to: '#',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Processing',
          position: 'left',
          items: [
            {
              label: 'Overview',
              to: '/docs/processing',
            },
            {
              label: 'Work Instructions',
              to: '/docs/work-instructions/intro',
            },
            {
              label: 'Nomenclature',
              to: '/nomenclature',
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
          title: 'Training',
          items: [
            {
              label: 'Product Training',
              to: '/docs/product-training/intro',
            },
            {
              label: 'IT Glossary',
              to: '/it-glossary',
            },
            {
              label: 'Technical Cutlines',
              to: '/docs/technical-cutlines',
            },
          ],
        },
        {
          title: 'Processing',
          items: [
            {
              label: 'Work Instructions',
              to: '/docs/work-instructions/intro',
            },
            {
              label: 'Safety Procedures',
              to: '/docs/work-instructions/safety-procedures',
            },
            {
              label: 'Equipment Setup',
              to: '/docs/work-instructions/equipment-setup-example',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Processing Guide',
              to: '/docs/processing',
            },
            {
              label: 'Nomenclature',
              to: '/nomenclature',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExitTech. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
