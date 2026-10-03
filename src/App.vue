<template>
  <main>
    <!-- ::: sidebar -->
    <aside class="column">
      <img :src="logo" alt="Minuit Logo" height="30" />
      <h1 class="invisible">Minuit</h1>

      <nav aria-labelledby="components-header">
        <span id="components-header" class="nav-header">Components</span>
        <ul>
          <li><mn-link to="#button" label="Button" variant="text" /></li>
          <li><mn-link to="#container" label="Container" variant="text" /></li>
          <li><mn-link to="#icon" label="Icon" variant="text" /></li>
          <li><mn-link to="#link" label="Link" variant="text" /></li>
          <li><mn-link to="#text" label="Text" variant="text" /></li>
          <li><mn-link to="#title" label="Title" variant="text" /></li>
        </ul>
      </nav>

      <div class="column">
        <div class="row-2">
          <mn-button
            :label="theme.mode === 'dark' ? 'toggle light mode' : 'toggle dark mode'"
            :icon="theme.mode === 'dark' ? 'sun' : 'moon'"
            variant="outline"
            wide
            labelless
            @click="toggleMode"
          />
          <select id="theme" aria-label="theme" autocomplete="off" @change="(e) => updateTheme(e.target.value)">
            <option value="default">Default</option>
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="cute">Cute</option>
          </select>
        </div>
        <form action="" class="column" @submit.prevent>
          <label for="color">accent color</label>
          <input id="color" v-model="theme.color" type="text" autocomplete="off" />
          <div class="row-2">
            <mn-button label="generate" variant="outline" wide @click="updateTheme(theme.color)" />
            <mn-button label="reset" variant="outline" wide @click="resetTheme" />
          </div>
        </form>
      </div>
    </aside>

    <RouterView />
  </main>
</template>

<script setup>
  import { computed } from "vue";
  import { useMinuit } from "../index.ts";
  import { defaultThemeOptions } from "./tools/theme.ts";
  import { MnButton, MnLink } from "../index.ts";
  import logoLight from "./assets/minuit-light.svg";
  import logoDark from "./assets/minuit-dark.svg";

  const theme = useMinuit();

  const logo = computed(() => (theme.mode === "dark" ? logoDark : logoLight));

  // ::: presets

  const themes = {
    default: {
      color: "blue-200",
      fontBody: "system-ui, sans-serif",
      fontTitle: "monospace",
      radius: "soft",
    },
    modern: {
      color: "rose-800",
      fontBody: "system-ui, sans-serif",
      fontTitle: "Graphik, sans-serif",
      radius: "soft",
    },
    classic: {
      color: "olive-600",
      fontBody: "system-ui, sans-serif",
      fontTitle: "Canela, serif",
      radius: "sharp",
    },
    cute: {
      color: "yellow-300",
      fontBody: "system-ui, sans-serif",
      fontTitle: "Academy Engraved LET, sans-serif",
      radius: "soft",
    },
  };

  function updateTheme(v) {
    if (Object.keys(themes).includes(v)) {
      Object.assign(theme, themes[v]);
    } else {
      theme.color = v;
    }
  }

  function resetTheme() {
    Object.assign(theme, defaultThemeOptions);
  }

  function toggleMode() {
    theme.mode = theme.mode === "dark" ? "light" : "dark";
  }
</script>

<style scoped>
  /* ::: tools */

  .column {
    display: grid;
    align-content: start;
    gap: 0.5rem;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }

  .row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  :global(body) {
    font-family: var(--font-body);
  }

  /* ::: page */

  main {
    background-color: var(--app-background);
    color: var(--app-text);
    display: grid;
    grid-template-columns: auto 1fr;
  }

  aside.column {
    padding: 1rem;
    background-color: var(--sidebar-background);
    color: var(--sidebar-text);
    block-size: 100dvh;
    position: sticky;
    inset-block-start: 0;
    border-inline-end: 1px solid var(--sidebar-border);
    grid-template-rows: auto auto 1fr auto;
    gap: var(--size-6);
  }

  aside nav {
    overflow-y: auto;
  }

  aside .nav-header {
    font-size: var(--size-3);
    color: var(--app-text-muted);
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    margin-block-end: var(--size-2);
  }

  aside ul {
    padding-inline-start: var(--size-1);
    border-inline-start: 1px solid var(--app-border);
    display: grid;
    gap: 0.25rem;
  }
</style>
