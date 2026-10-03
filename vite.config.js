import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    // bundles the components' CSS into the JS and injects it at runtime, so importing from
    // "minuit" applies styles with no separate `import "minuit/css"` step — SSR/worker-safe by
    // the plugin's own design (guards on typeof document), and inert during `vite dev` (it only
    // hooks into Rollup's production bundle-generation step, which the dev server doesn't use)
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: "./tsconfig.json",
      include: ["index.ts", "src/**/*.ts", "src/**/*.vue"],
      exclude: [
        "src/**/*.spec.ts",
        "src/**/*.stories.ts",
        "src/tools/testing/**",
        "src/pages/**",
        "src/App.vue",
        "src/main.js",
      ],
      outDir: "dist/client",
      rollupTypes: false,
    }),
  ],
  server: {
    open: "./",
  },
  build: {
    copyPublicDir: false,
    lib: {
      name: "minuit",
      entry: "./index.ts",
      formats: ["es"],
    },
    rolldownOptions: {
      // externalize deps that shouldn't be bundled into your library
      external: ["vue", "vue-router"],
      output: {
        // global variables to use in the UMD build for externalized deps
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
      },
    },
  },
});
