// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "netMeter",
  tagline:
    "Unleash the potential of NEXTLab netMeter, your all-in-one solution for testing network conditions.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nextlab-ai.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docusaurus/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nextlab-ai", // Usually your GitHub org/user name.
  projectName: "nextlab-ai.github.io", // Usually your repo name.

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
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: false, // 사이드바를 숨기는 기능
          autoCollapseCategories: false, // 특정 요소를 확장하면 그 외 요소들은 축소됨.
        },
      },
      navbar: {
        hideOnScroll: true, // 사용자가 아래로 스크롤 시 메뉴바를 숨길지 여부를 설정합니다.
        title: "netMeter",
        logo: {
          alt: "netMeter Logo",
          src: "img/logo.png",
          href: "/docs/intro",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "netmeterSidebar",
            position: "left",
            label: "User Manual",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Products",
            items: [
              {
                label: "netMeter",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "NEXTLab Global Website",
                href: "https://www.nextlab.ai/en/",
              },
              {
                label: "Contact Sales",
                href: "mailto:sales@nextlab.co.kr",
              },
              {
                label: "Contact Support",
                href: "mailto:support-netmeter@nextlab.co.kr",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NEXTLab`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
};

export default config;
