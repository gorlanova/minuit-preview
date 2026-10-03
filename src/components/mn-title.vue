<template>
  <component :is="tag" class="mn-title" :class="[align, { ellipsis: lines }]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  export type MnTitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  export type MnTitleAlign = "start" | "center" | "end";

  export interface MnTitleProps {
    tag: MnTitleTag;
    align?: MnTitleAlign;
    lines?: number;
  }

  defineOptions({ name: "mn-title" });

  defineProps<MnTitleProps>();
</script>

<style scoped>
  :where(.mn-title) {
    white-space: pre-line;
    overflow-wrap: break-word;
    font-family: var(--font-title);
  }

  /* ::: align */

  :where(.mn-title.start) {
    text-align: start;
  }

  :where(.mn-title.center) {
    text-align: center;
  }

  :where(.mn-title.end) {
    text-align: end;
  }

  /* ::: lines */

  :where(.mn-title.ellipsis) {
    line-clamp: v-bind("lines");
    -webkit-line-clamp: v-bind("lines");
  }
</style>
