import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3-vite";
import { createRouter, createMemoryHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "../src/tools/icons";
import "../src/styles/index.css";
import { generateTheme } from "../src/tools/theme";

library.add(icons);
generateTheme();

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/:pathMatch(.*)*", component: { template: "<div />" } }],
});

setup((app) => {
  app.use(router);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
