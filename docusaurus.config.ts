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
    supabaseAnonKey: process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud3Vnb2pjb25pa3d2Y2R1ZWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNjQ1NTcsImV4cCI6MjA2Nzg0MDU1N30.LK-56kaYKjSvRATNc078MNi86h8gsBienh8H-DOMijA',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
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
          to: '/docs/product-training/intro',
          label: 'Product Training',
          position: 'left',
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
              label: 'Blog',
              to: '/blog',
            },
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
