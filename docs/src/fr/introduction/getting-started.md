# Commencer

## Installation

@TODO

## Configurer le plugin

`app.use(minuit(options))` configure le thème et le mode en une seule étape — appelez-le une fois, là où votre application démarre :

```js
import { createApp } from "vue";
import { minuit } from "minuit";
import App from "./App.vue";

createApp(App)
  .use(
    minuit({
      mode: "dark", // "light" | "dark"
      color: "blue-500", // n'importe quelle couleur Tailwind, ou une valeur hexadécimale comme "#3b82f6"
      radius: "soft", // "sharp" | "soft"
      fontBody: "system-ui, sans-serif",
      fontTitle: "monospace",
    }),
  )
  .mount("#app");
```

`minuit()` ne fait que configurer le thème/mode global — il **n'enregistre pas** les composants. Chaque option est optionnelle ; appelez-le sans argument (ou ignorez-le complètement) pour garder les valeurs par défaut.

Les styles des composants sont intégrés au JS du package et s'appliquent automatiquement dès que vous importez quoi que ce soit depuis `minuit` — pas de fichier CSS séparé ni d'étape d'import supplémentaire.

## Réagir aux changements — `useMinuit()`

Les options passées à `minuit()` deviennent une instance réactive, injectée dans tous les composants descendants. Construire un bouton de bascule de mode ou un sélecteur de thème revient à muter cette instance directement — le thème se réapplique automatiquement, sans avoir à rappeler `generateTheme()` vous-même :

```vue
<script setup>
  import { useMinuit } from "minuit";

  const theme = useMinuit();

  function toggleMode() {
    theme.mode = theme.mode === "dark" ? "light" : "dark";
  }
</script>

<template>
  <button @click="toggleMode">Basculer le mode</button>
</template>
```

`useMinuit()` lève une exception si elle est appelée sans que `app.use(minuit())` ait été exécuté au préalable — même logique que `useRoute()` en dehors d'une application où le routeur est installé.

## Importer les composants dont vous avez besoin

Les composants restent des imports nommés explicites, comme n'importe quel autre composant — c'est ce qui garde un composant inutilisé complètement hors de votre bundle, plutôt que de l'expédier que vous l'utilisiez ou non.

```vue
<script setup>
  import { MnButton, MnText } from "minuit";
</script>

<template>
  <mn-text>Bienvenue</mn-text>
  <mn-button label="Confirmer" variant="primary" />
</template>
```

## Le thème sans le plugin

Si vous préférez ne pas utiliser `app.use()` — configurations rendues côté serveur, ou applications qui doivent l'appeler conditionnellement — `minuit()` n'est qu'un fin wrapper autour de `generateTheme()`, que vous pouvez appeler directement à la place :

```js
import { generateTheme } from "minuit";

generateTheme({ color: "blue-500", radius: "soft", fontBody: "system-ui, sans-serif", fontTitle: "monospace" });
```

Cela ne fait que définir le thème — contrairement à l'option `mode` du plugin, cela ne positionne pas `data-theme` pour vous.

Voir [Système de design → Couleurs](/fr/design-system/colors) pour la palette complète à partir de laquelle ceci est généré, et [Système de design → Aperçu](/fr/design-system/overview) pour comprendre comment les couches de tokens s'articulent.

## Icônes

Les composants qui acceptent une prop `icon` (`MnButton`, `MnLink`, `MnIcon` lui-même) prennent une chaîne Font Awesome : `"{style} {nom}"`, par ex. `icon="moon"`. Sans préfixe de style, l'icône est solid (`fas`) par défaut aussi. Minuit enregistre les icônes qu'il utilise en interne dès que vous importez depuis la librairie ; voir [Composants → Icône](/fr/components/icon) pour le format complet, y compris les icônes droite-à-gauche.

## Ensuite

- Parcourir les [composants](/fr/components/button)
- Lire les [conventions de nommage](/fr/design-system/naming) si vous contribuez au projet
