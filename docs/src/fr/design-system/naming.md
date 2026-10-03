# Conventions de nommage

Minuit suit un petit ensemble de règles de nommage appliquées de façon cohérente à travers tous les composants. Elles sont écrites ici pour qu'un nouveau composant puisse être ajouté sans redécouvrir le pattern à chaque fois, et pour que les contributeurs n'aient pas à deviner.

## Composants

Un composant existe sous trois formes qui se correspondent, toujours en kebab-case avec un préfixe `mn-` au niveau du fichier et de l'enregistrement, et en `Mn` + PascalCase en tant qu'identifiant JS/TS :

| Forme                            | Exemple                        |
| -------------------------------- | ------------------------------ |
| Fichier                          | `src/components/mn-button.vue` |
| Nom enregistré (`defineOptions`) | `"mn-button"`                  |
| Identifiant exporté (`index.ts`) | `MnButton`                     |

## Types TypeScript

Chaque type exporté est préfixé par `Mn`, pour correspondre à l'identifiant du composant plutôt que de rester nu — cela évite les collisions avec le `ButtonProps` d'une autre librairie quand Minuit est importé aux côtés d'autres kits d'interface.

- Interface de props : `Mn{Composant}Props` — par ex. `MnButtonProps`, `MnIconProps`
- Unions type énumération : `Mn{Composant}{Aspect}` — par ex. `MnButtonVariant`, `MnTextAlign`, `MnIconColor`, `MnContainerFlow`

**Règle de choix du type de prop :** une prop avec un ensemble de valeurs fermé et significatif obtient son propre type union exporté et nommé (et un contrôle Storybook `select` correspondant). Une prop libre ou simplement transmise reste un `string`/`number` simple. Comparez `variant?: MnButtonVariant` (ensemble fermé : primary/secondary/danger/outline/text/inline) à `icon?: string` (ouvert, n'importe quelle chaîne d'icône Font Awesome) dans le même composant.

## Classes CSS

Le nommage bloc/élément est BEM-_esque_ mais pas du BEM complet :

- Bloc : `mn-{composant}` — par ex. `.mn-button`
- Élément : `mn-{composant}-{élément}` — par ex. `.mn-button-icon`, `.mn-button-label`, `.mn-button-spinner`
- Modificateur : un mot **nu, non préfixé**, appliqué via `:class="[variant, { wide, disabled }]"` — par ex. `.primary`, `.wide`, `.labelless`

Les modificateurs n'ont pas besoin d'un suffixe BEM en `--modificateur` ni d'un préfixe de composant, car chaque composant utilise `<style scoped>` — l'attribut de portée CSS de Vue empêche déjà `.primary` dans `mn-button` d'entrer en collision avec `.primary` dans `mn-icon`. N'ajoutez pas de préfixe manuel aux classes de modificateur ; la portée s'en charge déjà. Toutes les règles sont enveloppées dans `:where(...)` pour une spécificité nulle, afin que les styles d'un consommateur puissent toujours surcharger sans `!important`.

## Propriétés CSS personnalisées

- Tokens primitifs (`src/styles/variables.css`) : rampes de couleurs brutes et échelle de tailles — `--red-500`, `--size-4`. Aucune signification sémantique.
- Tokens sémantiques : générés à l'exécution par `generateTheme()` à partir des primitives — `--app-text`, `--primary-background`, `--danger-text`. Ce sont les tokens que les composants consomment.
- Tokens propres à un composant : `--mn-{composant}-{propriété}[-{état}]` — par ex. `--mn-button-background`, `--mn-button-background-hover`. Ils vivent à l'intérieur du bloc `<style>` du composant, sont assignés depuis la couche sémantique par variante, et permettent à un seul jeu de règles de base (dans `:where(.mn-button:not(...))`) de ne lire qu'une seule indirection plutôt que de brancher par variante dans chaque règle.

## Identifiants dynamiques et associations ARIA

Chaque instance de composant qui doit associer un élément à une description, une erreur ou un label utilise un appel à `useId()` par instance, puis lui ajoute un suffixe selon son usage :

```ts
const mnId = useId();
```

```html
<span :aria-labelledby="label ? `${mnId}-label` : undefined">
  <!-- l'icône / le contenu réel -->
  <span :id="`${mnId}-label`" class="invisible">{{ label }}</span>
</span>
```

Suffixes standards : `-label`, et (pour de futurs composants de type formulaire) `-description`, `-error`. Toujours `${mnId}-<usage>`, jamais l'identifiant nu — cela garde chaque identifiant généré par une instance de composant traçable jusqu'à son rôle, et évite les collisions quand une page affiche plusieurs instances du même composant.

Préférez cette approche à `aria-label` pour tout nom/description qui devrait être du texte visible de la page (même visuellement masqué via `.invisible`) : les outils de traduction du navigateur traduisent les nœuds de texte visibles, pas les valeurs d'attributs — le contenu d'un `aria-label` reste donc silencieusement dans sa langue d'origine pendant que le reste d'une page traduite change, une vraie incohérence pour une librairie qui propose sa propre internationalisation. Réservez `aria-label` aux cas où il n'existe vraiment aucun texte visible sensé à pointer.

## Tests

- Fichier : `mn-{composant}.spec.ts`, à côté du composant
- `describe("mn-{composant}", ...)` — le nom exact du composant en kebab-case
- Titres des `it(...)` : des descriptions de comportement au présent ("renders the label"), pas de formulation en "should"
- Chaque composant a au moins un test intitulé `"has no automatically detectable accessibility violations, <état>"` — réutilisez exactement cette formulation pour qu'elle soit repérable (`grep`) dans toute la suite de tests
- Les éléments interactifs (boutons, liens) ont un test de focus clavier (`.focus()` puis vérification de `document.activeElement`) et, le cas échéant, un test confirmant que l'état désactivé exclut le focus/le clic. N'écrivez pas de test qui vérifie qu'un `keydown` sur Entrée/Espace déclenche un clic : il est vérifié empiriquement que jsdom ne simule pas cette action par défaut du navigateur pour `<button>`/`<a>`, donc un tel test échouerait toujours, ou pire, passerait de façon illusoire selon la façon dont il est écrit. Utiliser le véritable élément natif est justement ce qui garantit ce comportement dans un vrai navigateur ; il n'y a rien d'autre à tester unitairement que la présence de la bonne balise.

## Storybook

Les stories se lisent autant qu'elles se cliquent — la barre latérale doit refléter le code source, pas le paraphraser.

- `title: "Components/{NomPascal}"` — le nom sémantique du composant, par ex. `"Components/Button"`, pas l'identifiant d'export préfixé par `Mn`. Le préfixe `Mn` existe pour éviter les collisions dans le code (instructions d'import, noms de types) ; il ne se justifie plus dans une barre latérale où "Components" fournit déjà le contexte de désambiguïsation.
- Les exports de story reflètent la prop ou la valeur précise qu'ils démontrent, jamais un nom inventé :
  - Un booléen démontré seul → le nom de la prop lui-même : `export const labelless`, `export const wide`, `export const disabled`.
  - La valeur d'une prop énumérée → la valeur elle-même : `export const primary`, `export const outline`. Une valeur avec trait d'union devient du camelCase (`"row-between"` → `export const rowBetween`) puisque `-` n'est pas valide dans un identifiant nu.
  - Toute autre prop démontrée seule (string/number) → le nom de la prop : `export const icon`, `export const lines`.
  - Une story qui ne correspond pas à une prop/valeur précise — une base, ou plusieurs valeurs montrées côte à côte pour comparaison — garde un nom court et descriptif en PascalCase : `Default`, `Levels`, `Colors`, `Sizes`. `Default` est une exception fixe (`default` est un mot réservé, il ne pourrait de toute façon pas être l'identifiant d'export littéral).
- Les clés d'`argTypes` reflètent les noms de props mot pour mot ; une prop typée avec une union nommée obtient un `control: "select"` avec les `options` correspondantes.

L'idée : lire `variant="primary"` ou `labelless` dans le code source d'un composant doit indiquer exactement quelle story ouvrir dans Storybook, sans étape de traduction.
