# Get started

## Install

@TODO

## Set up the plugin

`app.use(minuit(options))` wires up theming and mode in one step — call it once, wherever your app starts:

```js
import { createApp } from "vue";
import { minuit } from "minuit";
import App from "./App.vue";

createApp(App)
  .use(
    minuit({
      mode: "dark", // "light" | "dark"
      color: "blue-500", // any Tailwind color, or a hex value like "#3b82f6"
      radius: "soft", // "sharp" | "soft"
      fontBody: "system-ui, sans-serif",
      fontTitle: "monospace",
    }),
  )
  .mount("#app");
```

`minuit()` only sets up global theme/mode — it does **not** register components. Every option is optional; call it with no arguments (or skip it entirely) to keep the defaults.

Component styles are bundled into the package's JS and apply automatically as soon as you import anything from `minuit` — there's no separate CSS file or import step.

## Reacting to changes — `useMinuit()`

The options you pass to `minuit()` become a live, reactive instance, injected into every descendant component. Building a mode toggle or a theme picker means mutating it directly — the theme re-applies automatically, no need to call `generateTheme()` yourself:

```vue
<script setup>
  import { useMinuit } from "minuit";

  const theme = useMinuit();

  function toggleMode() {
    theme.mode = theme.mode === "dark" ? "light" : "dark";
  }
</script>

<template>
  <button @click="toggleMode">Toggle mode</button>
</template>
```

`useMinuit()` throws if called without `app.use(minuit())` having run first — same as calling `useRoute()` outside a router-installed app.

## Import the components you need

Components stay explicit named imports, the same way you'd import any other component — this is what keeps an unused component out of your bundle entirely rather than shipping it whether you use it or not.

```vue
<script setup>
  import { MnButton, MnText } from "minuit";
</script>

<template>
  <mn-text>Welcome</mn-text>
  <mn-button label="Confirm" variant="primary" />
</template>
```

## Theming without the plugin

If you'd rather not use `app.use()` — server-rendered setups, or apps that need to call it conditionally — `minuit()` is a thin wrapper around `generateTheme()`, which you can call directly instead:

```js
import { generateTheme } from "minuit";

generateTheme({ color: "blue-500", radius: "soft", fontBody: "system-ui, sans-serif", fontTitle: "monospace" });
```

This only sets the theme — it won't set `data-theme` for you the way passing `mode` to the plugin does.

See [Design System → Colors](/design-system/colors) for the full palette this generates from, and [Design System → Overview](/design-system/overview) for how the token layers fit together.

## Icons

Components that accept an `icon` prop (`MnButton`, `MnLink`, `MnIcon` itself) take a Font Awesome string: `"{style} {name}"`, e.g. `icon="moon"`. Omit the style prefix and it defaults to solid (`fas`) too. Minuit registers the icons it uses internally when you import from it; see [Components → Icon](/components/icon) for the full format, including right-to-left icons.

## Next

- Browse the [components](/components/button)
- Read the [naming conventions](/design-system/naming) if you're contributing
