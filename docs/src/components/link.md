# Link

<script setup>
  import { MnLink } from "../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-link label="Get started" to="/introduction/getting-started" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Get started" to="/introduction/getting-started" />
</template>
```

  </template>
</mn-docs-demo>

## Slots

Like [Button](./button.md#slots), the default slot replaces the default icon/label rendering entirely. `label` is still required, but once you slot your own content it's unused for rendering — the link's accessible name comes from whatever visible text your slot content contains, so add your own `aria-label` if you slot icon-only content.

## Props

For TypeScript, the full prop types are exported as `MnLinkProps`, with the variant union as `MnLinkVariant`.

| Name                    | Type                     | Options                                           | Default | Required |
| ----------------------- | ------------------------ | ------------------------------------------------- | ------- | -------- |
| [label](#label)         | String, Number           | -                                                 | -       | yes      |
| [to](#to)               | String, RouteLocationRaw | -                                                 | -       | yes      |
| [variant](#variant)     | String                   | primary, secondary, danger, outline, text, inline | primary |          |
| [icon](#icon)           | String                   | -                                                 | -       | -        |
| [labelless](#labelless) | Boolean                  | -                                                 | false   | -        |
| [wide](#wide)           | Boolean                  | -                                                 | false   | -        |

### Label

The link label. Even if you choose to hide it with the `labelless` prop, it is required for accessibility purposes.

### To

Where the link goes. A value that doesn't start with `http` is treated as **internal** and rendered as a Vue Router `RouterLink` (accepts anything `RouterLink`'s own `to` prop accepts — a path string or a route location object). A value starting with `http` is treated as **external**: rendered as a plain `<a>`, with `target="_blank"`, `rel="noopener noreferrer"`, and an external-link icon appended automatically.

<mn-docs-demo flow="row">
  <mn-link label="Internal" to="/introduction/getting-started" />
  <mn-link label="External" to="https://github.com/gorlanova/minuit" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Internal" to="/introduction/getting-started" />
  <mn-link label="External" to="https://github.com/gorlanova/minuit" />
</template>
```

  </template>
</mn-docs-demo>

### Variant

Same variants as [Button](./button.md#variant): `primary`, `secondary`, `danger`, `outline`, `text`, `inline`.

<mn-docs-demo flow="row">
  <mn-link label="Update" to="/" />
  <mn-link label="Update" variant="secondary" to="/" />
  <mn-link label="Update" variant="danger" to="/" />
  <mn-link label="Update" variant="outline" to="/" />
  <mn-link label="Update" variant="text" to="/" />
  <mn-link label="Update" variant="inline" to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Update" to="/" />
  <mn-link label="Update" variant="secondary" to="/" />
  <mn-link label="Update" variant="danger" to="/" />
  <mn-link label="Update" variant="outline" to="/" />
  <mn-link label="Update" variant="text" to="/" />
  <mn-link label="Update" variant="inline" to="/" />
</template>
```

  </template>
</mn-docs-demo>

### Icon

Same format as [Icon](./icon.md#icon): `"{style} {name}"`, e.g. `icon="moon"`.

<mn-docs-demo flow="row">
  <mn-link label="Update" icon="moon" to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Update" icon="moon" to="/" />
</template>
```

  </template>
</mn-docs-demo>

### Labelless

When enabled, the label is visually hidden. Like Button, this only takes effect when paired with an `icon` — without one, there's nothing to fall back to, so the text label stays visible. It also has no effect on the `inline` variant.

<mn-docs-demo flow="row">
  <mn-link label="Update" icon="moon" labelless to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Update" icon="moon" labelless to="/" />
</template>
```

  </template>
</mn-docs-demo>

### Wide

When enabled, the link takes the full width of its container.

<mn-docs-demo flow="row">
  <mn-link label="Update" wide to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Update" wide to="/" />
</template>
```

  </template>
</mn-docs-demo>
