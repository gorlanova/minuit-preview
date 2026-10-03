<template>
  <div class="mn-color-swatches">
    <div v-for="hue in hues" :key="hue" class="mn-color-row">
      <span class="mn-color-row-label">{{ hue }}</span>
      <div class="mn-color-row-swatches">
        <div
          v-for="shade in shades"
          :key="shade"
          class="mn-color-swatch"
          :style="{ backgroundColor: `var(--${hue}-${shade})` }"
        >
          <span class="invisible">{{ hue }}-{{ shade }}</span>
          <span class="mn-color-swatch-shade" aria-hidden="true">{{ shade }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineOptions({ name: "mn-color-swatches" });

  // mirrors src/styles/variables.css — 22 standard Tailwind hues plus 4 Minuit additions
  // (mauve, olive, mist, taupe), each with the same 11-step shade scale
  const hues = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "mauve",
    "olive",
    "mist",
    "taupe",
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>

<style scoped>
  .mn-color-swatches {
    display: grid;
    gap: 0.5rem;
    margin-block: 1.5rem;
  }

  .mn-color-row {
    display: grid;
    grid-template-columns: 5rem 1fr;
    align-items: center;
    gap: 0.75rem;
  }

  .mn-color-row-label {
    font-size: 0.8rem;
    font-family: var(--vp-font-family-mono);
    color: var(--vp-c-text-2);
  }

  .mn-color-row-swatches {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 0.25rem;
  }

  .mn-color-swatch {
    position: relative;
    aspect-ratio: 1;
    border-radius: 6px;
    border: 1px solid var(--vp-c-divider);
  }

  .mn-color-swatch-shade {
    position: absolute;
    inset-block-end: 2px;
    inset-inline-start: 4px;
    font-size: 0.6rem;
    font-family: var(--vp-font-family-mono);
    color: rgb(0 0 0 / 45%);
    mix-blend-mode: difference;
    filter: invert(1) grayscale(1) contrast(2);
  }
</style>
