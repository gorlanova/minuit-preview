import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import vueEslintConfigPrettier from "@vue/eslint-config-prettier";
import globals from "globals";

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,ts,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: [
      "**/dist/**",
      "**/dist-ssr/**",
      "**/storybook-static/**",
      "**/docs/.vitepress/cache/**",
      "**/docs/.vitepress/dist/**",
      "**/.void/**",
      "**/.wrangler/**",
      "**/*.d.ts",
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    rules: {
      // registered component names are deliberately kebab-case, matching the custom element tag
      // itself (mn-button.vue -> "mn-button" -> <mn-button>) — see naming.md
      "vue/component-definition-name-casing": ["warn", "kebab-case"],
      // type-based defineProps<T>() props are TS-optional (?:) on purpose; forcing a runtime
      // default fights the "genuinely absent, not defaulted" case (e.g. icon?: string)
      "vue/require-default-prop": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    // the library components (src/components/**) are TS by default via vueTsConfigs.recommended;
    // the demo app and VitePress theme are deliberately plain JS, not part of the typed library
    name: "demo-app/plain-js",
    files: ["src/App.vue", "src/pages/**/*.vue", "docs/.vitepress/theme/components/*.vue"],
    rules: {
      "vue/block-lang": "off",
    },
  },
  {
    // test files legitimately inline several throwaway `{ template: "..." }` component objects
    // per file (e.g. as createApp() fixtures) — that's not the multi-component-authoring pattern
    // this rule exists to catch
    name: "tests/inline-fixture-components",
    files: ["**/*.spec.ts"],
    rules: {
      "vue/one-component-per-file": "off",
    },
  },
  vueEslintConfigPrettier,
);
