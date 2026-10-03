<template>
  <FontAwesomeIcon
    class="fa-fw mn-icon"
    :class="[color, { rtl: iconData.isRtl }]"
    :icon="[iconData.style, iconData.name]"
    aria-hidden="!label"
    title="label || null"
  />
</template>

<script setup lang="ts">
  // https://fontawesome.com/docs
  // A single wrapping element (not FontAwesomeIcon itself) is the component root, so there's one
  // predictable node for consumers to style (transform, etc.), ref, or pass attrs/class to —
  // Vue only auto-forwards attrs to a single root, and a two-root (fragment) component makes
  // that ambiguous. The accessible name still needs a real, visually-hidden text node (not
  // aria-label: attribute values aren't picked up by the browser's page-translation tools, only
  // visible text nodes are) — Font Awesome 7 dropped the `title`/slot mechanism that used to
  // make this possible directly on the icon itself, so the hidden text now lives as a sibling
  // inside this wrapper instead, associated via aria-labelledby.
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { computed } from "vue";

  export type MnIconColor = "primary" | "secondary" | "success" | "warning" | "danger";

  export interface MnIconProps {
    icon: string;
    color?: MnIconColor;
    label?: string;
  }

  defineOptions({ name: "mn-icon" });

  const props = defineProps<MnIconProps>();

  const iconData = computed(() => {
    // split the icon string
    const array = props.icon.split(" ");

    // if the last part is "-rtl", it's a rtl icon
    const isRtl = array.at(-1) === "-rtl";

    // remove the last part if it's "-rtl" to have the icon details only
    if (isRtl) array.pop();

    // list of available styles in fontawesome
    const styles = [
      "fas",
      "far",
      "fal",
      "fat",
      "fab",
      "fad",
      "fadr",
      "fadl",
      "fadt",
      "fass",
      "fasr",
      "fasl",
      "fast",
      "fasds",
      "fasdr",
      "fasdl",
      "fasdt",
    ];

    // if there are two parts, the first is the style and the second the name, otherwise it's a solid icon with the name only
    const style = array.length === 2 && styles.includes(array[0]) ? array[0] : "fas";
    const name = array.length === 2 ? array[1] : array[0];

    return { style, name, isRtl };
  });
</script>

<style scoped>
  :where(.mn-icon) {
    display: inline-flex;
    padding-block: 0.25rem;
    color: inherit;
  }

  /* ::: color */

  :where(.mn-icon.primary) {
    color: var(--primary-background);
  }

  :where(.mn-icon.secondary) {
    color: var(--secondary-background);
  }

  :where(.mn-icon.success) {
    color: var(--success-text);
  }

  :where(.mn-icon.warning) {
    color: var(--warning-text);
  }

  :where(.mn-icon.danger) {
    color: var(--danger-text);
  }

  /* ::: rtl */

  :where([dir="rtl"] .mn-icon.rtl) {
    scale: -1 1;
  }
</style>
