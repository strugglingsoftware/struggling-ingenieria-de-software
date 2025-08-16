// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Shared math plugin configuration
const mathPlugins = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Struggling Software",
  tagline: "Tu guía completa de ingeniería de software",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://strugglingsoftware.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/struggling-ingenieria-de-software",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "strugglingsoftware", // Usually your GitHub org/user name.
  projectName: "struggling-ingenieria-de-software", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          ...mathPlugins,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-GX3PT5HFQT",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP',
      crossorigin: 'anonymous',
    },
  ],
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Struggling Software",
        items: [
          {
            to: "/documentos",
            label: "📚 Todos los Documentos",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "📚 Contenido",
            items: [
              {
                label: "Todos los Documentos",
                to: "/documentos",
              },
            ],
          },
          {
            title: "🌐 Sígueme",
            items: [
              {
                label: "YouTube",
                href: "https://www.youtube.com/@StrugglingSoftware",
              },
              {
                label: "GitHub",
                href: "https://github.com/strugglingsoftware",
              },
            ],
          },
          {
            title: "📧 Contacto",
            items: [
              {
                label: "Canal de YouTube",
                href: "https://www.youtube.com/@StrugglingSoftware",
              },
              {
                label: "Repositorios",
                href: "https://github.com/strugglingsoftware",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Struggling Software. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Colores personalizados para el modo claro
      lightMode: {
        primaryColor: "#29ABE2", // Azul eléctrico para acentos primarios
        secondaryColor: "#ADD8E6", // Azul claro secundario (opcional)
        backgroundColor: "#FFFFFF", // Fondo blanco
        textColor: "#0B132B", // Texto azul oscuro
        accentColor: "#29ABE2", // Otro acento en azul eléctrico
      },
      // Colores personalizados para el modo oscuro
      darkMode: {
        primaryColor: '#60C6EA', // Azul más claro para mejor contraste
        secondaryColor: '#98DCEF', // Azul claro secundario
        backgroundColor: '#1A1A1A', // Fondo gris oscuro neutro
        textColor: '#F5F5F5', // Texto claro
        accentColor: '#7CD1EC', // Acento azul brillante
      },
    }),
};

export default config;
