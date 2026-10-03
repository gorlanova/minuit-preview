<template>
  <component :is="tag" class="mn-container" :class="[size, flow, { surface: surface, centered: centered }]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  export type MnContainerSize = "small" | "medium" | "large" | "wide";
  export type MnContainerFlow = "row" | "row-between" | "row-end" | "grid" | "grid-center";

  export interface MnContainerProps {
    tag?: string;
    size?: MnContainerSize;
    flow?: MnContainerFlow;
    columns?: string;
    gap?: string;
    surface?: boolean;
    centered?: boolean;
  }

  defineOptions({ name: "mn-container" });

  withDefaults(defineProps<MnContainerProps>(), {
    tag: "div",
    columns: "1fr",
    gap: "var(--size-4)",
  });
</script>

<style scoped>
  :where(.mn-container) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: v-bind("gap");
  }

  /* ::: size */

  :where(.mn-container.small) {
    width: min(100%, 50ch);
  }

  :where(.mn-container.medium) {
    width: min(100%, 70ch);
  }

  :where(.mn-container.large) {
    width: min(100%, 90ch);
  }

  :where(.mn-container.wide) {
    width: 100%;
  }

  /* ::: flow */

  :where(.mn-container.row),
  :where(.mn-container.row-between),
  :where(.mn-container.row-end) {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  :where(.mn-container.row-between) {
    justify-content: space-between;
    width: 100%;
  }

  :where(.mn-container.row-end) {
    justify-content: flex-end;
    width: 100%;
  }

  :where(.mn-container.grid),
  :where(.mn-container.grid-center) {
    display: grid;
    grid-template-columns: v-bind("columns");
  }

  :where(.mn-container.grid) {
    align-items: start;
  }

  :where(.mn-container.grid-center) {
    align-items: center;
  }

  /* ::: surface */

  :where(.mn-container.surface) {
    padding: var(--size-4);
    border-radius: var(--radius-medium);
    background-color: var(--app-background-alt);
  }

  /* ::: centered */

  :where(.mn-container.centered) {
    margin-inline: auto;
  }
</style>
