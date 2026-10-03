# Icon

<script setup>
  import { MnIcon } from "../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-icon icon="moon" />

<template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" />
</template>
```

  </template>
</mn-docs-demo>

By default an icon is purely decorative and hidden from assistive technology (`aria-hidden`). Pass a `label` to give it an accessible name — see [Label](#label) below.

## Props

For TypeScript, the full prop types are exported as `MnIconProps`, with the color union as `MnIconColor`.

| Name            | Type    | Options                                      | Default | Required |
| --------------- | ------- | -------------------------------------------- | ------- | -------- |
| [icon](#icon)   | String  | -                                            | -       | yes      |
| [color](#color) | String  | primary, secondary, success, warning, danger | -       | -        |
| [label](#label) | String  | -                                            | -       | -        |

### Icon

The icon to display. It has the following structure:

- the icon style (optional, default to `fas` for solid icons)
- the icon name (required)
- the `-rtl` suffix for icons that should be flipped in right-to-left contexts (optional)

:::info Usage notice
This component uses Font Awesome under the hood. You need to install it in your project, and set up your license key if you want to use pro icons.

Minuit only registers the two icons its own components need internally (the button pending spinner, the link external-icon indicator) — not a broader set for general use. Register whatever icons you use in your own `<mn-icon>` calls yourself, via Font Awesome's `library.add()`, the same way you would in any Vue app:

```js
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleExclamation);
```

[Font Awesome](https://fontawesome.com/)<br>
[Font Awesome - Using a license key for pro icons](https://fontawesome.com/docs/web/setup/packages#set-up-npm-token-for-a-specific-project)

You can animate the icon with specific attributes

[Font Awesome - Animating icons](https://fontawesome.com/docs/web/use-with/vue/style#animate-icons)
:::

:::tip Accessibility notice
Some icons need to be mirrored in right-to-left contexts.

[Google - Icons and RTL mode](https://developers.google.com/fonts/docs/material_icons#icons_in_rtl)<br>
[Google - Which icons should be mirrored in RTL mode](https://developers.google.com/fonts/docs/material_icons#which_icons_should_be_mirrored_for_rtl)
:::

<mn-docs-demo flow="row">
  <mn-icon icon="moon" />
  <template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" />
</template>
```

  </template>
</mn-docs-demo>

### Color

The icon color can be one of the following:

- `primary`: the primary color, good for decorative icons
- `secondary`: the secondary color, good for disabled states
- `success`: the success color, good for success states
- `warning`: the warning color, good for warning states
- `danger`: the danger color, good for error states or destructive actions

<mn-docs-demo flow="row">
  <mn-icon icon="moon" color="primary" />
  <mn-icon icon="moon" color="secondary" />
  <mn-icon icon="moon" color="success" />
  <mn-icon icon="moon" color="warning" />
  <mn-icon icon="moon" color="danger" />

<template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" color="primary" />
  <mn-icon icon="moon" color="secondary" />
  <mn-icon icon="moon" color="success" />
  <mn-icon icon="moon" color="warning" />
  <mn-icon icon="moon" color="danger" />
</template>
```

  </template>
</mn-docs-demo>

### Label

Gives the icon an accessible name. Implemented as `aria-labelledby` pointing at a real, visually-hidden text node — not `aria-label` — so the name stays reachable by browser page-translation tools, which only translate visible text nodes, not attribute values.

<mn-docs-demo flow="row">
  <mn-icon icon="moon" label="Night" />
<template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" label="Night" />
</template>
```

  </template>
</mn-docs-demo>
