# Overview

Minuit's design system is a small stack of layers, each simpler than the one below it. This page is a map of how they fit together — see [Colors](/design-system/colors) for the palette itself and [Naming conventions](/design-system/naming) for how everything is named.

## The token layers

1. **Primitives** — raw color ramps and a size scale (`--red-500`, `--size-4`), defined once in `src/styles/variables.css`. No meaning attached; nothing in a component reads these directly.
2. **Semantic tokens** — `--app-text`, `--app-background`, `--primary-background`, `--danger-text`, and so on. Generated at runtime by [`generateTheme()`](/introduction/getting-started#set-up-the-theme) from a single primary color, in both a light and a dark variant. This is the layer components actually consume.
3. **Component-scoped tokens** — `--mn-button-background`, `--mn-button-background-hover`. Assigned from the semantic layer once per variant, inside the component's own `<style>` block, so the component's base styles read one indirection instead of branching per variant in every rule.

Changing the whole app's look means changing step 1 (pick a different primary color) — nothing below has to know that happened.

## Low-specificity styles

Every component's CSS rules are wrapped in `:where(...)`, which carries zero specificity. That means a consumer can always override a Minuit style with an equally-simple selector of their own, without reaching for `!important`. Combined with `<style scoped>` on every component, this is also what lets modifier classes stay short and unprefixed (`.primary`, `.wide`) instead of needing a `.mn-button--primary`-style BEM modifier — see [Naming conventions](/design-system/naming#css-classes) for the full rule.

## Accessibility

Every component ships with an automated [axe](https://github.com/dequelabs/axe-core) test as part of its definition of done, not as an afterthought — see each component's own page for the specific ARIA patterns and WCAG criteria it satisfies. Where a choice has accessibility consequences beyond the obvious (see [Naming conventions → Dynamic IDs and ARIA associations](/design-system/naming#dynamic-ids-and-aria-associations) for why `aria-labelledby` is preferred over `aria-label`), it's documented, not just implemented.

## What's next

- [Colors](/design-system/colors) — the full primitive palette, and how it becomes a theme
- [Naming conventions](/design-system/naming) — how every component, class, type, and test is named
- [Components](/components/button) — each component's props, slots, and accessibility notes
