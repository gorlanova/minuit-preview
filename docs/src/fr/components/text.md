# Texte

<script setup>
  import { MnText } from "../../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-text>Comment utiliser l'élément texte</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text>Comment utiliser l'élément texte</mn-text>
</template>
```

  </template>
</mn-docs-demo>

## Slots

Le slot par défaut est le contenu textuel — `MnText` affiche un `<p>`, il accepte donc du contenu en ligne comme n'importe quel paragraphe.

## Props

En TypeScript, les types complets sont exportés sous `MnTextProps`, avec l'union d'alignement `MnTextAlign`.

| Nom                   | Type    | Options            | Défaut | Requis |
| --------------------- | ------- | ------------------ | ------ | ------ |
| [align](#align)       | String  | start, center, end | -      | -      |
| [lines](#lines)       | Number  | -                  | -      | -      |
| [small](#taille)      | Boolean | -                  | false  | -      |
| [large](#taille)      | Boolean | -                  | false  | -      |
| [muted](#muted)       | Boolean | -                  | false  | -      |
| [bold](#bold)         | Boolean | -                  | false  | -      |
| [italic](#italic)     | Boolean | -                  | false  | -      |
| [balanced](#balanced) | Boolean | -                  | false  | -      |

### Align

Alignement du texte.

<mn-docs-demo flow="column">
  <mn-text align="start">Comment utiliser l'élément texte</mn-text>
  <mn-text align="center">Comment utiliser l'élément texte</mn-text>
  <mn-text align="end">Comment utiliser l'élément texte</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text align="start">Comment utiliser l'élément texte</mn-text>
  <mn-text align="center">Comment utiliser l'élément texte</mn-text>
  <mn-text align="end">Comment utiliser l'élément texte</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Lines

Tronque le texte à un nombre de lignes fixe, avec des points de suspension, une fois qu'il déborde.

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

### Taille

`small` et `large` ajustent la taille de police par rapport à la valeur par défaut.

<mn-docs-demo flow="column">
  <mn-text small>Comment utiliser l'élément texte</mn-text>
  <mn-text>Comment utiliser l'élément texte</mn-text>
  <mn-text large>Comment utiliser l'élément texte</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text small>Comment utiliser l'élément texte</mn-text>
  <mn-text>Comment utiliser l'élément texte</mn-text>
  <mn-text large>Comment utiliser l'élément texte</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Muted

Applique la couleur de texte atténuée, pour le contenu moins important.

<mn-docs-demo flow="row">
  <mn-text muted>Comment utiliser l'élément texte</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text muted>Comment utiliser l'élément texte</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Bold

<mn-docs-demo flow="row">
  <mn-text bold>Comment utiliser l'élément texte</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text bold>Comment utiliser l'élément texte</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Italic

<mn-docs-demo flow="row">
  <mn-text italic>Comment utiliser l'élément texte</mn-text>

<template #code>

```vue
<script setup>
  import { MnText } from "minuit";
</script>

<template>
  <mn-text italic>Comment utiliser l'élément texte</mn-text>
</template>
```

  </template>
</mn-docs-demo>

### Balanced

Applique `text-wrap: balance`, pour que les lignes qui passent à la ligne suivante aient une longueur plus régulière — idéal pour des titres ou de courts blocs de texte, pas pour de longs paragraphes.

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
