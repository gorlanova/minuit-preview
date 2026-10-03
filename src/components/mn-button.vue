<template>
  <button
    class="mn-button"
    :class="[variant, { wide, labelless: labelless && !!icon, custom: $slots.default }]"
    :disabled
  >
    <slot>
      <mn-icon v-if="pending" class="mn-button-spinner" icon="spinner" spin />
      <mn-icon v-if="icon" class="mn-button-icon" :icon="icon" />
      <span class="mn-button-label" :class="{ invisible: labelless && !!icon }">{{ label }}</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faSpinner } from "@fortawesome/free-solid-svg-icons";
  import MnIcon from "./mn-icon.vue";

  library.add(faSpinner);

  export type MnButtonVariant = "primary" | "secondary" | "danger" | "outline" | "text" | "inline";

  export interface MnButtonProps {
    label: string | number;
    variant?: MnButtonVariant;
    icon?: string;
    labelless?: boolean;
    wide?: boolean;
    pending?: boolean;
    disabled?: boolean;
  }

  defineOptions({ name: "mn-button" });

  withDefaults(defineProps<MnButtonProps>(), {
    variant: "primary",
  });
</script>

<style scoped>
  :where(.mn-button) {
    position: relative;
    inline-size: fit-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-2);
    background: none;
    border: 0;
  }

  /* ::: variant */

  :where(.mn-button.primary) {
    --mn-button-background: var(--primary-background);
    --mn-button-border: var(--primary-background);
    --mn-button-text: var(--primary-text);
    /* @TODO: hover colors */
    --mn-button-background-hover: var(--primary-background);
    --mn-button-border-hover: var(--primary-background);
  }

  :where(.mn-button.secondary) {
    --mn-button-background: var(--secondary-background);
    --mn-button-border: var(--secondary-background);
    --mn-button-text: var(--secondary-text);
    /* @TODO: hover colors */
    --mn-button-background-hover: var(--secondary-background);
    --mn-button-border-hover: var(--secondary-background);
  }

  :where(.mn-button.danger) {
    --mn-button-background: var(--danger-background);
    --mn-button-border: var(--danger-background);
    --mn-button-text: var(--danger-text);
    /* @TODO: hover colors */
    --mn-button-background-hover: var(--danger-background);
    --mn-button-border-hover: var(--danger-background);
  }

  :where(.mn-button.outline) {
    --mn-button-background: transparent;
    --mn-button-border: var(--app-border);
    --mn-button-text: var(--app-text);
    --mn-button-background-hover: var(--app-background-active);
    --mn-button-border-hover: var(--app-border);
  }

  :where(.mn-button.text) {
    --mn-button-background: transparent;
    --mn-button-border: transparent;
    --mn-button-text: var(--app-text);
    --mn-button-background-hover: var(--app-background-active);
    --mn-button-border-hover: var(--app-background-active);
  }

  :where(.mn-button:not(.inline):not(.custom)) {
    padding: var(--size-0-5) var(--size-2);
    background-color: var(--mn-button-background);
    border: 1px solid var(--mn-button-border);
    border-radius: var(--radius-medium);
    color: var(--mn-button-text);
    font-size: var(--size-3-5);
  }

  :where(.mn-button.inline) {
    padding: 0;
    background-color: transparent;
    border: 0;
    color: var(--app-text);
    font-weight: 600;
    text-decoration: underline;
  }

  /* ::: labelless */

  :where(.mn-button:not(.inline).labelless) {
    inline-size: calc(1lh + var(--size-0-5) * 2 + 1px * 2);
    padding-inline: var(--size-0-5);
  }

  /* ::: wide */

  :where(.mn-button.wide) {
    inline-size: 100%;
  }

  /* ::: pending */

  :where(.mn-button:has(.mn-button-spinner)) {
    pointer-events: none;
    opacity: 0.5;
  }

  :where(.mn-button-spinner) {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    translate: -50% -50%;
  }

  :where([dir="rtl"] .mn-button-spinner) {
    translate: 50% -50%;
  }

  :where(.mn-button:has(.mn-button-spinner) .mn-button-icon),
  :where(.mn-button:has(.mn-button-spinner) .mn-button-label) {
    opacity: 0;
  }

  /* ::: disabled */

  :where(.mn-button:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* ::: hover */

  :where(.mn-button:not(.inline):not(.custom):hover),
  :where(.mn-button:not(.inline):not(.custom):focus-visible) {
    background-color: var(--mn-button-background-hover);
    border: 1px solid var(--mn-button-border-hover);
  }

  :where(.mn-button.inline:hover),
  :where(.mn-button.inline:focus-visible) {
    text-decoration-thickness: 1.2px;
    text-underline-offset: var(--size-0-5);
  }

  /* ::: active */

  :where(.mn-button:active) {
    scale: 0.97;
  }
</style>
