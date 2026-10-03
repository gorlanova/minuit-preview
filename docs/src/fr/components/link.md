# Lien

<script setup>
  import { MnLink } from "../../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-link label="Commencer" to="/fr/introduction/getting-started" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Commencer" to="/introduction/getting-started" />
</template>
```

  </template>
</mn-docs-demo>

## Slots

Comme pour [Bouton](./button.md#slots), le slot par défaut remplace entièrement le rendu icône/libellé par défaut. `label` reste requis, mais une fois que vous fournissez votre propre contenu, elle n'est plus utilisée pour le rendu — le nom accessible du lien provient du texte visible que contient votre slot, donc ajoutez votre propre `aria-label` si vous n'affichez que des icônes.

## Props

En TypeScript, les types complets sont exportés sous `MnLinkProps`, avec l'union de variantes `MnLinkVariant`.

| Nom                     | Type                     | Options                                           | Défaut  | Requis |
| ----------------------- | ------------------------ | ------------------------------------------------- | ------- | ------ |
| [label](#label)         | String, Number           | -                                                 | -       | oui    |
| [to](#to)               | String, RouteLocationRaw | -                                                 | -       | oui    |
| [variant](#variant)     | String                   | primary, secondary, danger, outline, text, inline | primary |        |
| [icon](#icon)           | String                   | -                                                 | -       | -      |
| [labelless](#labelless) | Boolean                  | -                                                 | false   | -      |
| [wide](#wide)           | Boolean                  | -                                                 | false   | -      |

### Label

Le libellé du lien. Même si vous choisissez de le masquer avec la prop `labelless`, il reste requis pour des raisons d'accessibilité.

### To

La destination du lien. Une valeur qui ne commence pas par `http` est considérée comme **interne** et rendue via `RouterLink` de Vue Router (accepte tout ce que la prop `to` de `RouterLink` accepte elle-même — une chaîne de chemin ou un objet de localisation de route). Une valeur commençant par `http` est considérée comme **externe** : rendue comme un simple `<a>`, avec `target="_blank"`, `rel="noopener noreferrer"`, et une icône de lien externe ajoutée automatiquement.

<mn-docs-demo flow="row">
  <mn-link label="Interne" to="/fr/introduction/getting-started" />
  <mn-link label="Externe" to="https://github.com/gorlanova/minuit" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="Interne" to="/introduction/getting-started" />
  <mn-link label="Externe" to="https://github.com/gorlanova/minuit" />
</template>
```

  </template>
</mn-docs-demo>

### Variant

Mêmes variantes que [Bouton](./button.md#variant) : `primary`, `secondary`, `danger`, `outline`, `text`, `inline`.

<mn-docs-demo flow="row">
  <mn-link label="mettre à jour" to="/" />
  <mn-link label="mettre à jour" variant="secondary" to="/" />
  <mn-link label="mettre à jour" variant="danger" to="/" />
  <mn-link label="mettre à jour" variant="outline" to="/" />
  <mn-link label="mettre à jour" variant="text" to="/" />
  <mn-link label="mettre à jour" variant="inline" to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="mettre à jour" to="/" />
  <mn-link label="mettre à jour" variant="secondary" to="/" />
  <mn-link label="mettre à jour" variant="danger" to="/" />
  <mn-link label="mettre à jour" variant="outline" to="/" />
  <mn-link label="mettre à jour" variant="text" to="/" />
  <mn-link label="mettre à jour" variant="inline" to="/" />
</template>
```

  </template>
</mn-docs-demo>

### Icon

Même format que [Icône](./icon.md#icon) : `"{style} {nom}"`, par ex. `icon="moon"`.

<mn-docs-demo flow="row">
  <mn-link label="mettre à jour" icon="moon" to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="mettre à jour" icon="moon" to="/" />
</template>
```

  </template>
</mn-docs-demo>

### Labelless

Une fois activée, le libellé est masqué visuellement. Comme pour Bouton, cette prop n'a d'effet que si vous fournissez aussi une icône — sans elle, il n'y a rien vers quoi se replier, donc le libellé textuel reste visible. Elle n'a également aucun effet avec la variante `inline`.

<mn-docs-demo flow="row">
  <mn-link label="mettre à jour" icon="moon" labelless to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="mettre à jour" icon="moon" labelless to="/" />
</template>
```

  </template>
</mn-docs-demo>

### Wide

Une fois activée, le lien prend toute la largeur de son conteneur.

<mn-docs-demo flow="row">
  <mn-link label="mettre à jour" wide to="/" />

<template #code>

```vue
<script setup>
  import { MnLink } from "minuit";
</script>

<template>
  <mn-link label="mettre à jour" wide to="/" />
</template>
```

  </template>
</mn-docs-demo>
