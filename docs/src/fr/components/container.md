# Conteneur

<script setup>
  import { MnContainer } from "../../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-container size="medium" surface>
    <p>Comment utiliser</p>
    <p>L'élément conteneur</p>
  </mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container size="medium" surface>
    <p>Comment utiliser</p>
    <p>L'élément conteneur</p>
  </mn-container>
</template>
```

  </template>
</mn-docs-demo>

## Slots

Le slot par défaut est le contenu du conteneur. Il est disposé en colonne par défaut (voir [Flow](#flow) pour les dispositions en ligne ou en grille).

## Props

En TypeScript, les types complets sont exportés sous `MnContainerProps`, avec l'union de tailles `MnContainerSize` et l'union de dispositions `MnContainerFlow`.

| Nom                   | Type    | Options                                      | Défaut        | Requis |
| --------------------- | ------- | -------------------------------------------- | ------------- | ------ |
| [tag](#tag)           | String  | -                                            | div           | -      |
| [size](#size)         | String  | small, medium, large, wide                   | -             | -      |
| [flow](#flow)         | String  | row, row-between, row-end, grid, grid-center | -             | -      |
| [columns](#flow)      | String  | -                                            | 1fr           | -      |
| [gap](#gap)           | String  | -                                            | var(--size-4) | -      |
| [surface](#surface)   | Boolean | -                                            | false         | -      |
| [centered](#centered) | Boolean | -                                            | false         | -      |

### Tag

Quel élément HTML afficher. Utile pour donner à un conteneur une vraie signification structurelle (`section`, `article`, `aside`, ...) plutôt qu'un `div` générique.

### Size

Contraint la largeur maximale du conteneur, en unités de caractères — utile pour du contenu textuel dense, où une colonne pleine largeur nuit à la lisibilité.

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

Change la direction de la disposition. `row`/`row-between`/`row-end` sont des dispositions flex en ligne (qui diffèrent par la façon dont les enfants sont justifiés) ; `grid`/`grid-center` sont des dispositions CSS grid, utilisant `columns` pour définir `grid-template-columns` (par défaut `1fr`, soit une seule colonne).

<mn-docs-demo flow="row">
  <mn-container flow="row" surface>
    <span>Élément A</span>
    <span>Élément B</span>
    <span>Élément C</span>
  </mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container flow="row">
    <span>Élément A</span>
    <span>Élément B</span>
    <span>Élément C</span>
  </mn-container>
</template>
```

  </template>
</mn-docs-demo>

### Gap

L'espacement entre les enfants, n'importe quelle longueur CSS valide. Par défaut `var(--size-4)`.

### Surface

Donne au conteneur un fond et un padding, pour qu'il se distingue visuellement comme un bloc plutôt qu'une simple mise en page.

### Centered

Centre le conteneur horizontalement dans son parent (`margin-inline: auto`) — surtout utile combiné avec `size` pour centrer un bloc de largeur contrainte sur la page.

<mn-docs-demo flow="row">
  <mn-container size="small" centered surface><p>Centré</p></mn-container>

<template #code>

```vue
<script setup>
  import { MnContainer } from "minuit";
</script>

<template>
  <mn-container size="small" centered surface><p>Centré</p></mn-container>
</template>
```

  </template>
</mn-docs-demo>
