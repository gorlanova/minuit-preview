// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import { createRouter, createMemoryHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "../../../src/tools/icons";
import "./style.css";
import "../../../src/styles/index.css";
import { generateTheme } from "../../../src/tools/theme";
import MnDocsDemo from "./components/demo.vue";
import MnColorSwatches from "./components/color-swatches.vue";

library.add(icons);

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    if (typeof document !== "undefined") generateTheme();
    app.component("mn-docs-demo", MnDocsDemo);
    app.component("mn-color-swatches", MnColorSwatches);

    // MnLink renders a vue-router RouterLink for internal `to` values, which needs a real router
    // instance injected — VitePress has its own separate client-side router for page navigation,
    // it doesn't provide vue-router. Without this, every live MnLink demo throws during SSR
    // render (silently — docs:build doesn't fail on it, it just produces broken pre-rendered
    // HTML for those pages). This one only needs to exist, not navigate anywhere real.
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/:pathMatch(.*)*", component: { render: () => null } }],
    });
    app.use(router);
  },
};
