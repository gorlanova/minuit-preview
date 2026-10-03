# Aperçu

Le système de design de Minuit est une petite pile de couches, chacune plus simple que celle qui la précède. Cette page cartographie comment elles s'articulent — voir [Couleurs](/fr/design-system/colors) pour la palette elle-même et [Conventions de nommage](/fr/design-system/naming) pour la façon dont tout est nommé.

## Les couches de tokens

1. **Primitives** — des rampes de couleurs brutes et une échelle de tailles (`--red-500`, `--size-4`), définies une seule fois dans `src/styles/variables.css`. Aucune signification n'y est attachée ; rien dans un composant ne les lit directement.
2. **Tokens sémantiques** — `--app-text`, `--app-background`, `--primary-background`, `--danger-text`, etc. Générés à l'exécution par [`generateTheme()`](/fr/introduction/getting-started#configurer-le-theme) à partir d'une seule couleur primaire, en variante claire et sombre. C'est la couche que les composants consomment réellement.
3. **Tokens propres à un composant** — `--mn-button-background`, `--mn-button-background-hover`. Assignés depuis la couche sémantique une fois par variante, à l'intérieur du bloc `<style>` du composant, pour que les styles de base du composant ne fassent qu'une seule indirection plutôt que de brancher par variante dans chaque règle.

Changer l'apparence de toute l'application revient à changer l'étape 1 (choisir une autre couleur primaire) — rien en dessous n'a besoin de le savoir.

## Styles à faible spécificité

Toutes les règles CSS des composants sont enveloppées dans `:where(...)`, qui a une spécificité nulle. Cela veut dire qu'un consommateur peut toujours surcharger un style Minuit avec un sélecteur tout aussi simple, sans recourir à `!important`. Combiné à `<style scoped>` sur chaque composant, c'est aussi ce qui permet aux classes de modificateur de rester courtes et non préfixées (`.primary`, `.wide`) plutôt que d'exiger un modificateur façon BEM du type `.mn-button--primary` — voir [Conventions de nommage](/fr/design-system/naming#classes-css) pour la règle complète.

## Accessibilité

Chaque composant est livré avec un test [axe](https://github.com/dequelabs/axe-core) automatisé faisant partie de sa définition de "terminé", pas comme une réflexion après coup — voir la page de chaque composant pour les patterns ARIA spécifiques et les critères WCAG qu'il satisfait. Quand un choix a des conséquences d'accessibilité non évidentes (voir [Conventions de nommage → Identifiants dynamiques et associations ARIA](/fr/design-system/naming#identifiants-dynamiques-et-associations-aria) pour comprendre pourquoi `aria-labelledby` est préféré à `aria-label`), c'est documenté, pas seulement implémenté.

## Pour aller plus loin

- [Couleurs](/fr/design-system/colors) — la palette primitive complète, et comment elle devient un thème
- [Conventions de nommage](/fr/design-system/naming) — comment chaque composant, classe, type et test est nommé
- [Composants](/fr/components/button) — les props, slots et notes d'accessibilité de chaque composant
