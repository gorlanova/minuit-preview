# Colors

Minuit's color primitives come from [Tailwind CSS](https://tailwindcss.com/docs/colors), plus four additions of our own (`mauve`, `olive`, `mist`, `taupe`) that round out the palette for less saturated, more muted themes. Each hue has the same 11-step scale, from `50` (lightest) to `950` (darkest), defined in `src/styles/variables.css` as `oklch()` values.

<mn-color-swatches />

These are **primitives** — raw color, no meaning attached yet. Nothing in Minuit's components reads `--red-500` directly.

## From primitive to theme

[`generateTheme()`](/introduction/getting-started#set-up-the-theme) picks one primitive color as the primary accent and derives the rest of the palette from it at runtime — semantic tokens like `--app-text`, `--app-background`, `--primary-background`, `--danger-text` — computed in OKLCH so lightness/chroma stay perceptually consistent across hues, with a light and a dark variant for each. Components only ever consume the semantic layer, never the primitives directly:

```js
generateTheme({ color: "blue-500" });
// or a hex value:
generateTheme({ color: "#3b82f6" });
```

Danger, warning, and success tokens are fixed (not derived from the primary color) so they stay visually consistent regardless of which accent color a consumer picks.

See [Design System → Overview](/design-system/overview) for how this token layering fits into the rest of the system.
