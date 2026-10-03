# Bouton

<script setup>
  import { MnButton } from "../../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" />

<template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" />
</template>
```

  </template>
</mn-docs-demo>

## Slots

Par défaut, le bouton affiche pour vous son `icon` et son `label`. Passez du contenu dans le slot par défaut pour remplacer entièrement ce rendu — utile quand vous avez besoin d'icônes des deux côtés, ou de toute disposition que les props `icon`/`label` seules ne peuvent pas exprimer :

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" variant="text">
    <mn-icon icon="moon" color="primary" />
    <span>Disposition personnalisée</span>
    <mn-icon icon="moon" color="primary" />
  </mn-button>

<template #code>

```vue
<script setup>
  import { MnButton, MnIcon } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" variant="text">
    <mn-icon icon="moon" color="primary" />
    <span>Disposition personnalisée</span>
    <mn-icon icon="moon" color="primary" />
  </mn-button>
</template>
```

  </template>
</mn-docs-demo>

`label` reste une prop requise même en utilisant le slot, mais notez qu'elle cesse d'avoir un effet dès que vous le faites : elle n'est rendue que dans le contenu _par défaut_ du slot, donc une fois que vous fournissez le vôtre, `label` n'est pas utilisé et le nom accessible du bouton provient entièrement du texte visible que contient votre contenu. Si vous n'affichez que des icônes sans texte visible, ajoutez votre propre `aria-label` — il se propage jusqu'au `<button>` sous-jacent comme n'importe quel autre attribut.

Une fois que vous passez du contenu dans le slot, le bouton perd aussi son fond/bordure/padding par défaut (la classe modificatrice `custom`), pour que vous stylisiez une page blanche plutôt que de lutter contre l'apparence par défaut.

## Props

En TypeScript, les types complets sont exportés sous `MnButtonProps`, avec l'union de variantes `MnButtonVariant`.

| Nom                     | Type           | Options                                           | Défaut  | Requis |
| ----------------------- | -------------- | ------------------------------------------------- | ------- | ------ |
| [label](#label)         | String, Number | -                                                 | -       | oui    |
| [variant](#variant)     | String         | primary, secondary, danger, outline, text, inline | primary |        |
| [icon](#icon)           | String         | -                                                 | -       | -      |
| [labelless](#labelless) | Boolean        | -                                                 | false   | -      |
| [wide](#wide)           | Boolean        | -                                                 | false   | -      |
| [pending](#pending)     | Boolean        | -                                                 | false   | -      |
| [disabled](#disabled)   | Boolean        | -                                                 | false   | -      |

### Label

Le libellé du bouton. Même si vous choisissez de le masquer avec la prop `labelless`, il reste requis pour des raisons d'accessibilité.

### Variant

La variante du bouton peut être l'une des suivantes :

- `primary` : fond couleur d'accent, pour les actions principales (par défaut)
- `secondary` : fond neutre discret, pour les actions secondaires
- `danger` : fond rouge, pour les actions destructrices
- `outline` : bordure neutre discrète, pour les actions moins prioritaires
- `text` : fond transparent, pour les actions répétées ou discrètes
- `inline` : un style de bouton en ligne, pour se fondre dans un contenu textuel

<mn-docs-demo flow="row">
    <mn-button label="mettre à jour" />
    <mn-button label="mettre à jour" variant="secondary" />
    <mn-button label="mettre à jour" variant="danger" />
    <mn-button label="mettre à jour" variant="outline" />
    <mn-button label="mettre à jour" variant="text" />
    <mn-button label="mettre à jour" variant="inline" />

<template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" />
  <mn-button label="mettre à jour" variant="secondary" />
  <mn-button label="mettre à jour" variant="danger" />
  <mn-button label="mettre à jour" variant="outline" />
  <mn-button label="mettre à jour" variant="text" />
  <mn-button label="mettre à jour" variant="inline" />
</template>
```

  </template>
</mn-docs-demo>

### Icon

L'icône du bouton. Elle a la même structure que le [composant Icône](./icon.md#icon) :

- le style de l'icône (optionnel, `fas` par défaut pour les icônes solid)
- le nom de l'icône (requis)
- le suffixe `-rtl` pour les icônes à retourner dans les contextes droite-à-gauche (optionnel)

:::info Remarque d'usage
Ce composant utilise Font Awesome en interne. Vous devez l'installer dans votre projet, et configurer votre clé de licence si vous souhaitez utiliser les icônes pro.

[Font Awesome](https://fontawesome.com/)<br>
[Font Awesome - Utiliser une clé de licence pour les icônes pro](https://fontawesome.com/docs/web/setup/packages#set-up-npm-token-for-a-specific-project)
:::

:::tip Remarque d'accessibilité
Certaines icônes doivent être retournées dans les contextes droite-à-gauche.

[Google - Icônes et mode RTL](https://developers.google.com/fonts/docs/material_icons#icons_in_rtl)<br>
[Google - Quelles icônes retourner en mode RTL](https://developers.google.com/fonts/docs/material_icons#which_icons_should_be_mirrored_for_rtl)
:::

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" icon="moon" />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" icon="moon" />
</template>
```

  </template>
</mn-docs-demo>

### Labelless

Une fois activée, le libellé est masqué visuellement. Cette prop n'a d'effet que si vous fournissez aussi une icône, et n'a aucun effet avec la variante `inline`.

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" icon="moon" labelless />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" icon="moon" labelless />
</template>
```

  </template>
</mn-docs-demo>

### Wide

Une fois activée, le bouton prend toute la largeur de son conteneur.

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" wide />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" wide />
</template>
```

  </template>
</mn-docs-demo>

### Pending

Une fois activée, le bouton affiche un indicateur de chargement et devient inutilisable.

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" pending />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" pending />
</template>
```

  </template>
</mn-docs-demo>

### Disabled

Une fois activée, le bouton devient inutilisable.

<mn-docs-demo flow="row">
  <mn-button label="mettre à jour" disabled />
  <template #code>

```vue
<script setup>
  import { MnButton } from "minuit";
</script>

<template>
  <mn-button label="mettre à jour" disabled />
</template>
```

  </template>
</mn-docs-demo>
