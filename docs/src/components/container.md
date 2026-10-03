# Container

<script setup>
  import { MnContainer } from "../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-container size="medium" surface>
    <p>How to use</p>
    <p>The container element</p>
  </mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container size="medium" surface>
    <p>How to use</p>
    <p>The container element</p>
  </mn-container>
</template>
```

  </template>
</mn-docs-demo>

## Slots

The default slot is the container's content. It's laid out as a column by default (see [Flow](#flow) for row/grid layouts).

## Props

For TypeScript, the full prop types are exported as `MnContainerProps`, with the size union as `MnContainerSize` and the flow union as `MnContainerFlow`.

| Name                  | Type    | Options                                      | Default       | Required |
| --------------------- | ------- | -------------------------------------------- | ------------- | -------- |
| [tag](#tag)           | String  | -                                            | div           | -        |
| [size](#size)         | String  | small, medium, large, wide                   | -             | -        |
| [flow](#flow)         | String  | row, row-between, row-end, grid, grid-center | -             | -        |
| [columns](#flow)      | String  | -                                            | 1fr           | -        |
| [gap](#gap)           | String  | -                                            | var(--size-4) | -        |
| [surface](#surface)   | Boolean | -                                            | false         | -        |
| [centered](#centered) | Boolean | -                                            | false         | -        |

### Tag

Which HTML element to render as. Useful for giving a container real document-structure meaning (`section`, `article`, `aside`, ...) instead of a generic `div`.

### Size

Constrains the container's max width, in character units — useful for text-heavy content, where a full-width column hurts readability.

<mn-docs-demo flow="column">
  <mn-container size="small" surface><p>small</p></mn-container>
  <mn-container size="medium" surface><p>medium</p></mn-container>
  <mn-container size="large" surface><p>large</p></mn-container>
  <mn-container size="wide" surface><p>wide</p></mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container size="small" surface><p>small</p></mn-container>
  <mn-container size="medium" surface><p>medium</p></mn-container>
  <mn-container size="large" surface><p>large</p></mn-container>
  <mn-container size="wide" surface><p>wide</p></mn-container>
</template>
```

  </template>
</mn-docs-demo>

### Flow

Switches the layout direction. `row`/`row-between`/`row-end` are flex row layouts (differing in how children are justified); `grid`/`grid-center` are CSS grid layouts, using `columns` to set `grid-template-columns` (defaults to `1fr`, i.e. a single column).

<mn-docs-demo flow="row">
  <mn-container flow="row" surface>
    <span>Item A</span>
    <span>Item B</span>
    <span>Item C</span>
  </mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container flow="row">
    <span>Item A</span>
    <span>Item B</span>
    <span>Item C</span>
  </mn-container>
</template>
```

  </template>
</mn-docs-demo>

### Gap

The gap between children, any valid CSS length. Defaults to `var(--size-4)`.

### Surface

Gives the container a background and padding, so it reads visually as a distinct block rather than plain layout.

### Centered

Centers the container horizontally within its parent (`margin-inline: auto`) — most useful combined with `size` to center a constrained-width block on the page.

<mn-docs-demo flow="row">
  <mn-container size="small" centered surface><p>Centered</p></mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container size="small" centered surface><p>Centered</p></mn-container>
</template>
```

  </template>
</mn-docs-demo>
