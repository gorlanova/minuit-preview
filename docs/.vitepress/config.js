import { defineConfig } from "vitepress";

const componentsEn = [
  { text: "Button", link: "/components/button" },
  { text: "Container", link: "/components/container" },
  { text: "Icon", link: "/components/icon" },
  { text: "Link", link: "/components/link" },
  { text: "Text", link: "/components/text" },
  { text: "Title", link: "/components/title" },
];

const componentsFr = [
  { text: "Bouton", link: "/fr/components/button" },
  { text: "Conteneur", link: "/fr/components/container" },
  { text: "Icône", link: "/fr/components/icon" },
  { text: "Lien", link: "/fr/components/link" },
  { text: "Texte", link: "/fr/components/text" },
  { text: "Titre", link: "/fr/components/title" },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minuit",
  description: "Minimal UI kit for Vue 3",
  head: [["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }]],
  cleanUrls: true,
  srcDir: "./src",

  locales: {
    root: {
      label: "English",
      lang: "en",
      description: "Minimal UI kit for Vue 3",
      themeConfig: {
        nav: [
          { text: "Get started", link: "/introduction/getting-started" },
          { text: "Design System", link: "/design-system/overview" },
          { text: "Components", link: "/components/button" },
        ],
        sidebar: [
          {
            text: "Introduction",
            items: [
              { text: "Get started", link: "/introduction/getting-started" },
              { text: "Why Minuit", link: "/introduction/why-minuit" },
            ],
          },
          {
            text: "Design System",
            items: [
              { text: "Overview", link: "/design-system/overview" },
              { text: "Colors", link: "/design-system/colors" },
              { text: "Naming conventions", link: "/design-system/naming" },
            ],
          },
          { text: "Components", items: componentsEn },
        ],
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      description: "Kit d'interface minimal pour Vue 3",
      themeConfig: {
        nav: [
          { text: "Commencer", link: "/fr/introduction/getting-started" },
          { text: "Système de design", link: "/fr/design-system/overview" },
          { text: "Composants", link: "/fr/components/button" },
        ],
        sidebar: [
          {
            text: "Introduction",
            items: [
              { text: "Commencer", link: "/fr/introduction/getting-started" },
              { text: "Pourquoi Minuit", link: "/fr/introduction/why-minuit" },
            ],
          },
          {
            text: "Système de design",
            items: [
              { text: "Aperçu", link: "/fr/design-system/overview" },
              { text: "Couleurs", link: "/fr/design-system/colors" },
              { text: "Conventions de nommage", link: "/fr/design-system/naming" },
            ],
          },
          { text: "Composants", items: componentsFr },
        ],
      },
    },
  },

  themeConfig: {
    logo: { light: "/minuit-light.svg", dark: "/minuit-dark.svg", alt: "Minuit" },
    search: {
      provider: "local",
      options: {
        locales: {
          fr: {
            translations: {
              button: { buttonText: "Rechercher", buttonAriaLabel: "Rechercher" },
              modal: {
                noResultsText: "Aucun résultat pour",
                resetButtonTitle: "Réinitialiser la recherche",
                footer: { selectText: "sélectionner", navigateText: "naviguer", closeText: "fermer" },
              },
            },
          },
        },
      },
    },
    outline: { level: "deep" },
    externalLinkIcon: true,
    siteTitle: false,

    // ::: FOOTER
    footer: {
      message:
        "Released under the <a href='https://github.com/vuejs/vitepress/blob/main/LICENSE' target='_blank'>MIT License</a>",
      copyright: "Copyright © 2026-present - Nina G.",
    },
  },
});
