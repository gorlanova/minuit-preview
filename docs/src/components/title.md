# Title

<script setup>
  import { MnTitle } from "../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-title tag="h2">How to use the title element</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h2">How to use the title element</mn-title>
</template>
```

  </template>
</mn-docs-demo>

## Slots

The default slot is the title content.

## Props

For TypeScript, the full prop types are exported as `MnTitleProps`, with the heading-level union as `MnTitleTag` and the alignment union as `MnTitleAlign`.

| Name            | Type   | Options                | Default | Required |
| --------------- | ------ | ---------------------- | ------- | -------- |
| [tag](#tag)     | String | h1, h2, h3, h4, h5, h6 | -       | yes      |
| [align](#align) | String | start, center, end     | -       | -        |
| [lines](#lines) | Number | -                      | -       | -        |

### Tag

Which heading level to render. Required, and deliberately has no default — a heading's level is a document-structure decision only the page using it can make correctly; defaulting to, say, `h2` would silently produce a broken heading hierarchy the moment someone forgets to override it.

<mn-docs-demo flow="column">
  <mn-title tag="h1">How to use the title element</mn-title>
  <mn-title tag="h2">How to use the title element</mn-title>
  <mn-title tag="h3">How to use the title element</mn-title>
  <mn-title tag="h4">How to use the title element</mn-title>
  <mn-title tag="h5">How to use the title element</mn-title>
  <mn-title tag="h6">How to use the title element</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h1">How to use the title element</mn-title>
  <mn-title tag="h2">How to use the title element</mn-title>
  <mn-title tag="h3">How to use the title element</mn-title>
  <mn-title tag="h4">How to use the title element</mn-title>
  <mn-title tag="h5">How to use the title element</mn-title>
  <mn-title tag="h6">How to use the title element</mn-title>
</template>
```

  </template>
</mn-docs-demo>

### Align

<mn-docs-demo flow="column">
  <mn-title tag="h2" align="start">How to use the title element</mn-title>
  <mn-title tag="h2" align="center">How to use the title element</mn-title>
  <mn-title tag="h2" align="end">How to use the title element</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h2" align="start">How to use the title element</mn-title>
  <mn-title tag="h2" align="center">How to use the title element</mn-title>
  <mn-title tag="h2" align="end">How to use the title element</mn-title>
</template>
```

  </template>
</mn-docs-demo>

### Lines

Truncates the title to a fixed number of lines, with an ellipsis, once it overflows. Same behavior as [Text → Lines](./text.md#lines).

<mn-docs-demo flow="row">
  <mn-title tag="h2" :lines="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt consequatur exercitationem, adipisci debitis commodi suscipit eligendi nulla?</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h2" :lines="1"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt consequatur exercitationem, adipisci debitis
    commodi suscipit eligendi nulla?</mn-title
  >
</template>
```

  </template>
</mn-docs-demo>
