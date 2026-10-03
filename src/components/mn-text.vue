<template>
  <p class="mn-text" :class="[align, { ellipsis: lines, small, large, muted, bold, italic, balanced }]">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
  export type MnTextAlign = "start" | "center" | "end";

  export interface MnTextProps {
    align?: MnTextAlign;
    lines?: number;
    small?: boolean;
    large?: boolean;
    muted?: boolean;
    bold?: boolean;
    italic?: boolean;
    balanced?: boolean;
  }

  defineOptions({ name: "mn-text" });

  defineProps<MnTextProps>();
</script>

<style scoped>
  :where(.mn-text) {
    font-size: var(--size-4);
    white-space: pre-line;
    overflow-wrap: break-word;
  }

  /* ::: align */

  :where(.mn-text.start) {
    text-align: start;
  }

  :where(.mn-text.center) {
    text-align: center;
  }

  :where(.mn-text.end) {
    text-align: end;
  }

  /* ::: lines */

  :where(.mn-text.ellipsis) {
    line-clamp: v-bind("lines");
    -webkit-line-clamp: v-bind("lines");
  }

  /* ::: small */

  :where(.mn-text.small) {
    font-size: var(--size-3-5);
  }

  /* ::: large */

  :where(.mn-text.large) {
    font-size: var(--size-5);
  }

  /* ::: muted */

  :where(.mn-text.muted) {
    color: var(--app-text-muted);
  }

  /* ::: bold */

  :where(.mn-text.bold) {
    font-weight: 600;
  }

  /* ::: italic */

  :where(.mn-text.italic) {
    font-style: italic;
  }

  /* ::: balanced */

  :where(.mn-text.balanced) {
    text-wrap: balance;
  }
</style>
