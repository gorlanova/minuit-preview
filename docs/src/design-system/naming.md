# Naming conventions

Minuit follows a small set of naming rules consistently across every component. They're written down here so a new component can be added without re-deriving the pattern from scratch, and so contributors don't have to guess.

## Components

A component exists in three matching forms, always kebab-case with an `mn-` prefix at the file and registration level, and `Mn` + PascalCase where it's a JS/TS identifier:

| Form                              | Example                        |
| --------------------------------- | ------------------------------ |
| File                              | `src/components/mn-button.vue` |
| Registered name (`defineOptions`) | `"mn-button"`                  |
| Exported identifier (`index.ts`)  | `MnButton`                     |

## TypeScript types

Every exported type is prefixed `Mn`, matching the component identifier rather than staying bare — this avoids collisions with another library's own `ButtonProps` when Minuit is imported alongside other UI kits.

- Props interface: `Mn{Component}Props` — e.g. `MnButtonProps`, `MnIconProps`
- Enum-like unions: `Mn{Component}{Facet}` — e.g. `MnButtonVariant`, `MnTextAlign`, `MnIconColor`, `MnContainerFlow`

**Rule for choosing prop types:** a prop with a closed, meaningful set of values gets its own named exported union type (and a matching Storybook `select` control). A prop that's free-form or pass-through stays a plain `string`/`number`. Compare `variant?: MnButtonVariant` (closed set: primary/secondary/danger/outline/text/inline) against `icon?: string` (open-ended, any Font Awesome icon string) in the same component.

## CSS classes

Block/element naming is BEM-_ish_ but not full BEM:

- Block: `mn-{component}` — e.g. `.mn-button`
- Element: `mn-{component}-{element}` — e.g. `.mn-button-icon`, `.mn-button-label`, `.mn-button-spinner`
- Modifier: a **bare, unprefixed** word applied via `:class="[variant, { wide, disabled }]"` — e.g. `.primary`, `.wide`, `.labelless`

Modifiers don't need a `--modifier` BEM suffix or a component prefix, because every component uses `<style scoped>` — Vue's scoped-CSS attribute already prevents `.primary` in `mn-button` colliding with `.primary` in `mn-icon`. Don't add manual prefixing to modifier classes; the scoping does that job already. All rules are wrapped in `:where(...)` for zero specificity, so consumer styles can always override without `!important`.

## CSS custom properties

- Primitive tokens (`src/styles/variables.css`): raw color ramps and the size scale — `--red-500`, `--size-4`. No semantic meaning.
- Semantic tokens: generated at runtime by `generateTheme()` from the primitives — `--app-text`, `--primary-background`, `--danger-text`. These are the tokens components consume.
- Component-scoped tokens: `--mn-{component}-{property}[-{state}]` — e.g. `--mn-button-background`, `--mn-button-background-hover`. These live inside the component's own `<style>` block, are assigned from the semantic tokens per variant, and let a single set of base rules (in `:where(.mn-button:not(...))`) read one indirection layer instead of branching per variant.

## Dynamic IDs and ARIA associations

Every component instance that needs to associate an element with a description, error, or label uses one `useId()` call per instance, then suffixes it per purpose:

```ts
const mnId = useId();
```

```html
<span :aria-labelledby="label ? `${mnId}-label` : undefined">
  <!-- the actual icon/content -->
  <span :id="`${mnId}-label`" class="invisible">{{ label }}</span>
</span>
```

Standard suffixes: `-label`, and (for future form-style components) `-description`, `-error`. Always `${mnId}-<purpose>`, never the bare id — this keeps every id a component instance generates traceable to what it's for, and avoids collisions when a page renders many instances of the same component.

Prefer this over `aria-label` for any name/description that should be visible page text (even if visually hidden via `.invisible`): browser page-translation tools translate visible text nodes, not attribute values, so `aria-label` content silently stays in its original language while the rest of a translated page changes — a real inconsistency for a library that ships its own i18n. Reserve `aria-label` for cases where there's genuinely no sensible visible text to point to.

## Tests

- File: `mn-{component}.spec.ts`, colocated with the component
- `describe("mn-{component}", ...)` — exact kebab-case component name
- `it(...)` titles: present-tense behavior descriptions ("renders the label"), not "should" phrasing
- Every component has at least one test titled `"has no automatically detectable accessibility violations, <state>"` — reuse that exact phrasing so it's greppable across the suite
- Interactive elements (buttons, links) get a keyboard-focus test (`.focus()` then assert `document.activeElement`) and, where relevant, a disabled-excludes-focus/click test. Don't write a test asserting a `keydown` on Enter/Space fires a click — verified empirically that jsdom doesn't simulate that native browser default action for `<button>`/`<a>`, so the test would either always fail or (worse) pass vacuously depending on how it's written. Using the real native element is what guarantees that behavior in an actual browser; there's nothing to unit-test beyond confirming the right tag is rendered.

## Storybook

Stories are read as much as clicked through — the sidebar should mirror the source, not paraphrase it.

- `title: "Components/{PascalName}"` — the component's semantic name, e.g. `"Components/Button"`, not the `Mn`-prefixed export identifier. The `Mn` prefix exists to avoid collisions in code (import statements, type names); it doesn't carry its weight in a sidebar where "Components" is already the disambiguating context.
- Story exports mirror the specific prop or value they demonstrate, not an invented label:
  - A boolean flag demoed alone → the prop name itself: `export const labelless`, `export const wide`, `export const disabled`.
  - An enum prop's value → the value itself: `export const primary`, `export const outline`. A hyphenated value becomes camelCase (`"row-between"` → `export const rowBetween`) since `-` isn't valid in a bare identifier.
  - Any other single prop demoed alone (string/number) → the prop name: `export const icon`, `export const lines`.
  - A story that doesn't map to one specific prop/value — a baseline, or several values shown side by side for comparison — keeps a short descriptive PascalCase name: `Default`, `Levels`, `Colors`, `Sizes`. `Default` specifically is a fixed exception (`default` is a reserved word, so it can't be the literal export name anyway).
- `argTypes` keys mirror prop names verbatim; a prop typed with a named union gets `control: "select"` with matching `options`.

The point: reading `variant="primary"` or `labelless` in a component's source should tell you exactly which Storybook story to open, with no translation step.
