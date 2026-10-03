import "./styles/index.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { minuit } from "../index.ts";

// ::: app

const app = createApp(App);

// ::: icons

library.add(faMoon, faSun, faWandMagicSparkles);

// ::: router

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

// ::: launch

app.use(minuit());
app.use(router);
app.mount("#app");
