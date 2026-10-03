# Button

<script setup>
  import { MnButton } from "../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-button label="update" />

<template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" />
</template>
```

  </template>
</mn-docs-demo>

## Slots

By default, the button renders its `icon` and `label` for you. Pass content into the default slot to replace that entirely — useful when you need icons on both sides, or any layout the `icon`/`label` props alone can't express:

<mn-docs-demo flow="row">
  <mn-button label="update" variant="text">
    <mn-icon icon="moon" color="primary" />
    <span>Custom layout</span>
    <mn-icon icon="moon" color="primary" />
  </mn-button>

<template #code>

```vue
<script setup>
  import { MnButton, MnIcon } from "minuit";
</script>

<template>
  <mn-button label="update" variant="text">
    <mn-icon icon="moon" color="primary" />
    <span>Custom layout</span>
    <mn-icon icon="moon" color="primary" />
  </mn-button>
</template>
```

  </template>
</mn-docs-demo>

`label` is still a required prop when slotting, but note it stops doing anything once you do: it only ever renders as part of the _default_ slot content, so once you supply your own, `label` is unused and the button's accessible name comes entirely from whatever visible text your slot content contains. If you slot icon-only content with no visible text, add your own `aria-label` — it falls through to the underlying `<button>` like any other attribute.

Once you pass slot content, the button also drops its default background/border/padding (the `custom` modifier class), so you're styling on a clean slate rather than fighting the default look.

## Props

For TypeScript, the full prop types are exported as `MnButtonProps`, with the variant union as `MnButtonVariant`.

| Name                    | Type           | Options                                           | Default | Required |
| ----------------------- | -------------- | ------------------------------------------------- | ------- | -------- |
| [label](#label)         | String, Number | -                                                 | -       | yes      |
| [variant](#variant)     | String         | primary, secondary, danger, outline, text, inline | primary |          |
| [icon](#icon)           | String         | -                                                 | -       | -        |
| [labelless](#labelless) | Boolean        | -                                                 | false   | -        |
| [wide](#wide)           | Boolean        | -                                                 | false   | -        |
| [pending](#pending)     | Boolean        | -                                                 | false   | -        |
| [disabled](#disabled)   | Boolean        | -                                                 | false   | -        |

### Label

The button label. Even if you choose to hide it with the `labelless` prop, it is required for accessibility purposes.

### Variant

The button variant can be one of the following:

- `primary`: accent color background, good for primary actions (default)
- `secondary`: muted neutral background, good for secondary actions
- `danger`: red background, good for destructive actions
- `outline`: muted neutral border, good for less prominent actions
- `text`: transparent background, good for repeated or discreet actions
- `inline`: an inline button style, good to blend with text content

<mn-docs-demo flow="row">
    <mn-button label="update" />
    <mn-button label="update" variant="secondary" />
    <mn-button label="update" variant="danger" />
    <mn-button label="update" variant="outline" />
    <mn-button label="update" variant="text" />
    <mn-button label="update" variant="inline" />

<template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" />
  <mn-button label="update" variant="secondary" />
  <mn-button label="update" variant="danger" />
  <mn-button label="update" variant="outline" />
  <mn-button label="update" variant="text" />
  <mn-button label="update" variant="inline" />
</template>
```

  </template>
</mn-docs-demo>

### Icon

The button icon. It has the same structure as the [Icon component](./icon.md#icon):

- the icon style (optional, default to `fas` for solid icons)
- the icon name (required)
- the `-rtl` suffix for icons that should be flipped in right-to-left contexts (optional)

:::info Usage notice
This component uses Font Awesome under the hood. You need to install it in your project, and set up your license key if you want to use pro icons.

[Font Awesome](https://fontawesome.com/)<br>
[Font Awesome - Using a license key for pro icons](https://fontawesome.com/docs/web/setup/packages#set-up-npm-token-for-a-specific-project)
:::

:::tip Accessibility notice
Some icons need to be mirrored in right-to-left contexts.

[Google - Icons and RTL mode](https://developers.google.com/fonts/docs/material_icons#icons_in_rtl)<br>
[Google - Which icons should be mirrored in RTL mode](https://developers.google.com/fonts/docs/material_icons#which_icons_should_be_mirrored_for_rtl)
:::

<mn-docs-demo flow="row">
  <mn-button label="update" icon="moon" />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" icon="moon" />
</template>
```

  </template>
</mn-docs-demo>

### Labelless

When enabled, the label is visually hidden. This prop does not work if you do not provide an icon, or if you use the `inline` variant.

<mn-docs-demo flow="row">
  <mn-button label="update" icon="moon" labelless />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" icon="moon" labelless />
</template>
```

  </template>
</mn-docs-demo>

### Wide

When enabled, the button takes the full width of its container.

<mn-docs-demo flow="row">
  <mn-button label="update" wide />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" wide />
</template>
```

  </template>
</mn-docs-demo>

### Pending

When enabled, the button shows a spinning loader and is not usable.

<mn-docs-demo flow="row">
  <mn-button label="update" pending />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" pending />
</template>
```

  </template>
</mn-docs-demo>

### Disabled

When enabled, the button is not usable.

<mn-docs-demo flow="row">
  <mn-button label="update" disabled />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="update" disabled />
</template>
```

  </template>
</mn-docs-demo>
