# Icône

<script setup>
  import { MnIcon } from "../../../../index.ts";
</script>

<mn-docs-demo flow="row">
  <mn-icon icon="moon" />

<template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" />
</template>
```

  </template>
</mn-docs-demo>

Par défaut, une icône est purement décorative et masquée aux technologies d'assistance (`aria-hidden`). Passez un `label` pour lui donner un nom accessible — voir [Label](#label) ci-dessous.

## Props

En TypeScript, les types complets sont exportés sous `MnIconProps`, avec l'union de couleurs `MnIconColor`.

| Nom             | Type    | Options                                      | Défaut | Requis |
| --------------- | ------- | -------------------------------------------- | ------ | ------ |
| [icon](#icon)   | String  | -                                            | -      | oui    |
| [color](#color) | String  | primary, secondary, success, warning, danger | -      | -      |
| [label](#label) | String  | -                                            | -      | -      |

### Icon

L'icône à afficher. Elle a la structure suivante :

- le style de l'icône (optionnel, `fas` par défaut pour les icônes solid)
- le nom de l'icône (requis)
- le suffixe `-rtl` pour les icônes à retourner dans les contextes droite-à-gauche (optionnel)

:::info Remarque d'usage
Ce composant utilise Font Awesome en interne. Vous devez l'installer dans votre projet, et configurer votre clé de licence si vous souhaitez utiliser les icônes pro.

Minuit n'enregistre que les deux icônes dont ses propres composants ont besoin en interne (l'indicateur de chargement du bouton, la flèche de lien externe) — pas un ensemble plus large pour un usage général. Enregistrez vous-même les icônes que vous utilisez dans vos propres `<mn-icon>`, via `library.add()` de Font Awesome, comme dans n'importe quelle application Vue :

```js
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleExclamation);
```

[Font Awesome](https://fontawesome.com/)<br>
[Font Awesome - Utiliser une clé de licence pour les icônes pro](https://fontawesome.com/docs/web/setup/packages#set-up-npm-token-for-a-specific-project)

Vous pouvez animer l'icône avec des attributs spécifiques

[Font Awesome - Animer les icônes](https://fontawesome.com/docs/web/use-with/vue/style#animate-icons)
:::

:::tip Remarque d'accessibilité
Certaines icônes doivent être retournées dans les contextes droite-à-gauche.

[Google - Icônes et mode RTL](https://developers.google.com/fonts/docs/material_icons#icons_in_rtl)<br>
[Google - Quelles icônes retourner en mode RTL](https://developers.google.com/fonts/docs/material_icons#which_icons_should_be_mirrored_for_rtl)
:::

<mn-docs-demo flow="row">
  <mn-icon icon="moon" />
  <template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" />
</template>
```

  </template>
</mn-docs-demo>

### Color

La couleur de l'icône peut être l'une des suivantes :

- `primary` : la couleur primaire, pour les icônes décoratives
- `secondary` : la couleur secondaire, pour les états désactivés
- `success` : la couleur de succès, pour les états de réussite
- `warning` : la couleur d'avertissement, pour les états d'alerte
- `danger` : la couleur de danger, pour les états d'erreur ou les actions destructrices

<mn-docs-demo flow="row">
  <mn-icon icon="moon" color="primary" />
  <mn-icon icon="moon" color="secondary" />
  <mn-icon icon="moon" color="success" />
  <mn-icon icon="moon" color="warning" />
  <mn-icon icon="moon" color="danger" />

<template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" color="primary" />
  <mn-icon icon="moon" color="secondary" />
  <mn-icon icon="moon" color="success" />
  <mn-icon icon="moon" color="warning" />
  <mn-icon icon="moon" color="danger" />
</template>
```

  </template>
</mn-docs-demo>

### Label

Donne à l'icône un nom accessible. Implémenté via `aria-labelledby` pointant vers un vrai nœud de texte visuellement masqué — pas `aria-label` — pour que le nom reste accessible aux outils de traduction du navigateur, qui ne traduisent que les nœuds de texte visibles, pas les valeurs d'attributs.

<mn-docs-demo flow="row">
  <mn-icon icon="moon" label="Nuit" />

<template #code>

```vue
<script setup>
  import { MnIcon } from "minuit";
</script>

<template>
  <mn-icon icon="moon" label="Nuit" />
</template>
```

  </template>
</mn-docs-demo>
