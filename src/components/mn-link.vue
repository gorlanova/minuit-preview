<template>
  <component
    :is="isExternal ? 'a' : RouterLink"
    class="mn-link"
    :class="[variant, { wide: wide, labelless: labelless && !!icon, custom: $slots.default }]"
    :href="to"
    :to="isExternal ? null : to"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noopener noreferrer' : null"
  >
    <slot>
      <mn-icon v-if="icon" class="mn-link-icon" :icon="icon" />
      <span class="mn-link-label" :class="{ invisible: labelless && !!icon }">{{ label }}</span>
      <mn-icon v-if="isExternal" class="mn-link-icon mn-link-external" icon="fas arrow-up-right-from-square" />
    </slot>
  </component>
</template>

<script setup lang="ts">
  // @TODO: add active and exact-active classes
  import { computed } from "vue";
  import { RouterLink, type RouteLocationRaw } from "vue-router";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
  import MnIcon from "./mn-icon.vue";

  library.add(faArrowUpRightFromSquare);

  export type MnLinkVariant = "primary" | "secondary" | "danger" | "outline" | "text" | "inline";

  export interface MnLinkProps {
    label: string | number;
    to: string | RouteLocationRaw;
    variant?: MnLinkVariant;
    icon?: string;
    labelless?: boolean;
    wide?: boolean;
  }

  defineOptions({ name: "mn-link" });

  const props = withDefaults(defineProps<MnLinkProps>(), {
    variant: "primary",
  });

  const isExternal = computed(() => {
    return typeof props.to === "string" && props.to.startsWith("http");
  });
</script>

<style scoped>
  :where(.mn-link) {
    position: relative;
    inline-size: fit-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-2);
    background: none;
    border: 0;
    text-decoration: none;
  }

  /* ::: variant */

  :where(.mn-link.primary) {
    --mn-link-background: var(--primary-background);
    --mn-link-border: var(--primary-background);
    --mn-link-text: var(--primary-text);
    /* @TODO: hover colors */
    --mn-link-background-hover: var(--primary-background);
    --mn-link-border-hover: var(--primary-background);
  }

  :where(.mn-link.secondary) {
    --mn-link-background: var(--secondary-background);
    --mn-link-border: var(--secondary-background);
    --mn-link-text: var(--secondary-text);
    /* @TODO: hover colors */
    --mn-link-background-hover: var(--secondary-background);
    --mn-link-border-hover: var(--secondary-background);
  }

  :where(.mn-link.danger) {
    --mn-link-background: var(--danger-background);
    --mn-link-border: var(--danger-background);
    --mn-link-text: var(--danger-text);
    /* @TODO: hover colors */
    --mn-link-background-hover: var(--danger-background);
    --mn-link-border-hover: var(--danger-background);
  }

  :where(.mn-link.outline) {
    --mn-link-background: transparent;
    --mn-link-border: var(--app-border);
    --mn-link-text: var(--app-text);
    --mn-link-background-hover: var(--app-background-active);
    --mn-link-border-hover: var(--app-border);
  }

  :where(.mn-link.text) {
    --mn-link-background: transparent;
    --mn-link-border: transparent;
    --mn-link-text: var(--app-text);
    --mn-link-background-hover: var(--app-background-active);
    --mn-link-border-hover: var(--app-background-active);
  }

  :where(.mn-link:not(.inline):not(.custom)) {
    padding: var(--size-0-5) var(--size-2);
    background-color: var(--mn-link-background);
    border: 1px solid var(--mn-link-border);
    border-radius: var(--radius-medium);
    color: var(--mn-link-text);
    font-size: var(--size-3-5);
  }

  :where(.mn-link.inline) {
    padding: 0;
    background-color: transparent;
    border: 0;
    color: var(--app-text);
    font-weight: 600;
    text-decoration: underline;
  }

  /* ::: labelless */

  :where(.mn-link:not(.inline).labelless) {
    inline-size: calc(1lh + var(--size-0-5) * 2 + 1px * 2);
    padding-inline: var(--size-0-5);
  }

  /* ::: wide */

  :where(.mn-link.wide) {
    inline-size: 100%;
  }

  /* ::: external */

  :where(.mn-link-external) {
    font-size: 0.75em;
    margin-inline-start: calc(var(--size-1) * -1);
  }

  /* ::: hover */

  :where(.mn-link:not(.inline):not(.custom):hover),
  :where(.mn-link:not(.inline):not(.custom):focus-visible) {
    background-color: var(--mn-link-background-hover);
    border: 1px solid var(--mn-link-border-hover);
  }

  :where(.mn-link.inline:hover),
  :where(.mn-link.inline:focus-visible) {
    text-decoration-thickness: 1.2px;
    text-underline-offset: var(--size-0-5);
  }

  /* ::: active */

  :where(.mn-link:active) {
    scale: 0.97;
  }

  /* ::: current */

  /* @TODO : check that */
  /* :where(.mn-link.router-link-active) {
    color: blue;
  } */
</style>
