# Couleurs

Les couleurs primitives de Minuit viennent de [Tailwind CSS](https://tailwindcss.com/docs/colors), avec quatre ajouts maison (`mauve`, `olive`, `mist`, `taupe`) qui complètent la palette pour des thèmes moins saturés, plus doux. Chaque teinte a la même échelle en 11 crans, de `50` (le plus clair) à `950` (le plus foncé), définie dans `src/styles/variables.css` en valeurs `oklch()`.

<mn-color-swatches />

Ce sont des **primitives** — de la couleur brute, sans signification attachée pour l'instant. Rien dans les composants de Minuit ne lit `--red-500` directement.

## De la primitive au thème

[`generateTheme()`](/fr/introduction/getting-started#configurer-le-theme) choisit une couleur primitive comme accent principal et en dérive le reste de la palette à l'exécution — des tokens sémantiques comme `--app-text`, `--app-background`, `--primary-background`, `--danger-text` — calculés en OKLCH pour que la clarté/chroma restent perceptuellement cohérentes d'une teinte à l'autre, avec une variante claire et une variante sombre pour chacun. Les composants ne consomment jamais que la couche sémantique, jamais les primitives directement :

```js
generateTheme({ color: "blue-500" });
// ou une valeur hexadécimale :
generateTheme({ color: "#3b82f6" });
```

Les tokens danger, warning et success sont fixes (non dérivés de la couleur primaire) pour rester visuellement cohérents quelle que soit la couleur d'accent choisie.

Voir [Système de design → Aperçu](/fr/design-system/overview) pour comprendre comment cette organisation en couches s'intègre au reste du système.
