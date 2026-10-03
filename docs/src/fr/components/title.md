# Titre

<script setup>
  import { MnTitle } from "../../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-title tag="h2">Comment utiliser l'élément titre</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h2">Comment utiliser l'élément titre</mn-title>
</template>
```

  </template>
</mn-docs-demo>

## Slots

Le slot par défaut est le contenu du titre.

## Props

En TypeScript, les types complets sont exportés sous `MnTitleProps`, avec l'union de niveaux de titre `MnTitleTag` et l'union d'alignement `MnTitleAlign`.

| Nom             | Type   | Options                | Défaut | Requis |
| --------------- | ------ | ---------------------- | ------ | ------ |
| [tag](#tag)     | String | h1, h2, h3, h4, h5, h6 | -      | oui    |
| [align](#align) | String | start, center, end     | -      | -      |
| [lines](#lines) | Number | -                      | -      | -      |

### Tag

Le niveau de titre à afficher. Requis, et n'a délibérément pas de valeur par défaut — le niveau d'un titre est une décision de structure du document que seule la page qui l'utilise peut prendre correctement ; une valeur par défaut comme `h2` produirait silencieusement une hiérarchie de titres cassée dès qu'on oublierait de la surcharger.

<mn-docs-demo flow="column">
  <mn-title tag="h1">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h2">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h3">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h4">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h5">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h6">Comment utiliser l'élément titre</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h1">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h2">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h3">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h4">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h5">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h6">Comment utiliser l'élément titre</mn-title>
</template>
```

  </template>
</mn-docs-demo>

### Align

<mn-docs-demo flow="column">
  <mn-title tag="h2" align="start">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h2" align="center">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h2" align="end">Comment utiliser l'élément titre</mn-title>

<template #code>

```vue
<script setup>
  import { MnTitle } from "minuit";
</script>

<template>
  <mn-title tag="h2" align="start">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h2" align="center">Comment utiliser l'élément titre</mn-title>
  <mn-title tag="h2" align="end">Comment utiliser l'élément titre</mn-title>
</template>
```

  </template>
</mn-docs-demo>

### Lines

Tronque le titre à un nombre de lignes fixe, avec des points de suspension, une fois qu'il déborde. Même comportement que [Texte → Lines](./text.md#lines).

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
