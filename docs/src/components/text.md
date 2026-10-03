# Text

<script setup>
  import { MnText } from "../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-text>How to use the text element</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text>How to use the text element</mn-text>
</template>
```

  </template>
</mn-docs-demo>

## Slots

The default slot is the text content — `MnText` renders a `<p>`, so it accepts inline content the way any paragraph would.

## Props

For TypeScript, the full prop types are exported as `MnTextProps`, with the alignment union as `MnTextAlign`.

| Name                  | Type    | Options            | Default | Required |
| --------------------- | ------- | ------------------ | ------- | -------- |
| [align](#align)       | String  | start, center, end | -       | -        |
| [lines](#lines)       | Number  | -                  | -       | -        |
| [small](#size)        | Boolean | -                  | false   | -        |
| [large](#size)        | Boolean | -                  | false   | -        |
| [muted](#muted)       | Boolean | -                  | false   | -        |
| [bold](#bold)         | Boolean | -                  | false   | -        |
| [italic](#italic)     | Boolean | -                  | false   | -        |
| [balanced](#balanced) | Boolean | -                  | false   | -        |

### Align

Text alignment.

<mn-docs-demo flow="column">
  <mn-text align="start">How to use the text element</mn-text>
  <mn-text align="center">How to use the text element</mn-text>
  <mn-text align="end">How to use the text element</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text align="start">How to use the text element</mn-text>
  <mn-text align="center">How to use the text element</mn-text>
  <mn-text align="end">How to use the text element</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Lines

Truncates the text to a fixed number of lines, with an ellipsis, once it overflows.

<mn-docs-demo flow="row">
  <mn-text :lines="2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam nihil adipisci optio possimus, voluptates quibusdam impedit est esse id dolores blanditiis, quidem illo inventore explicabo?</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text :lines="2"
    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam nihil
    adipisci optio possimus, voluptates quibusdam impedit est esse id dolores blanditiis, quidem illo inventore
    explicabo?</mn-text
  >
</template>
```

  </template>
</mn-docs-demo>

### Size

`small` and `large` adjust the font size relative to the default.

<mn-docs-demo flow="column">
  <mn-text small>How to use the text element</mn-text>
  <mn-text>How to use the text element</mn-text>
  <mn-text large>How to use the text element</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text small>How to use the text element</mn-text>
  <mn-text>How to use the text element</mn-text>
  <mn-text large>How to use the text element</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Muted

Applies the muted text color, for less important content.

<mn-docs-demo flow="row">
  <mn-text muted>How to use the text element</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text muted>How to use the text element</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Bold

<mn-docs-demo flow="row">
  <mn-text bold>How to use the text element</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text bold>How to use the text element</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Italic

<mn-docs-demo flow="row">
  <mn-text italic>How to use the text element</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text italic>How to use the text element</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Balanced

Applies `text-wrap: balance`, so wrapped lines end up more even in length — best for short headings/text blocks, not long paragraphs.

<mn-docs-demo flow="row">
  <mn-text balanced>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam nihil adipisci optio possimus.</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text balanced
    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam nihil
    adipisci optio possimus.</mn-text
  >
</template>
```

  </template>
</mn-docs-demo>
