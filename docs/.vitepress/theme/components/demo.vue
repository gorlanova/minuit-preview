<template>
  <div class="mn-docs-demo">
    <div class="preview vp-raw" :class="[flow]">
      <slot />
    </div>

    <details v-if="$slots.code">
      <summary>View code</summary>

      <slot name="code" />
    </details>
  </div>
</template>

<script setup>
  defineOptions({ name: "mn-docs-demo" });

  defineProps({
    flow: {
      type: String,
      default: "column",
      validator: (v) => ["row", "column"].includes(v),
    },
  });
</script>

<style scoped>
  :where(.mn-docs-demo) {
    margin-block: var(--size-8) var(--size-4);
    border: 1px solid var(--app-border);
    border-radius: var(--size-2);
  }

  :where(.preview) {
    min-height: 200px;
    padding: var(--size-6);
    gap: var(--size-4);
  }

  :where(.preview.row) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  :where(.preview.column) {
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
  }

  :where(summary) {
    width: max-content;
    display: flex;
    margin: 0 auto var(--size-3) !important;
    border: 1px solid var(--app-border);
    border-radius: var(--size-2);
    padding: var(--size-0-5) var(--size-2);
    font-size: var(--size-3-5);
    font-weight: 500;
  }

  :where(summary)::marker {
    display: none;
  }
</style>
