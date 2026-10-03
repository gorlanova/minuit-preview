import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MnIcon from "./mn-icon.vue";

const meta: Meta<typeof MnIcon> = {
  title: "Components/Icon",
  component: MnIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text" },
    color: { control: "select", options: ["primary", "secondary", "success", "warning", "danger"] },
    label: { control: "text" },
  },
  args: {
    icon: "fas wand-magic-sparkles",
  },
};

export default meta;
type Story = StoryObj<typeof MnIcon>;

export const Default: Story = {};

export const Decorative: Story = {
  args: { icon: "fas wand-magic-sparkles" },
  parameters: {
    docs: {
      description: {
        story: "No `label` — the icon is hidden from assistive tech (`aria-hidden`) because it's purely decorative.",
      },
    },
  },
};

export const label: Story = {
  args: { icon: "fas circle-exclamation", label: "Warning" },
  parameters: {
    docs: {
      description: {
        story:
          "With a `label`, the icon gets an accessible name via `aria-labelledby` pointing at a visually hidden text node — not `aria-label`, so the name stays reachable by browser page-translation tools (which only translate visible text, not attribute values).",
      },
    },
  },
};

export const Colors: Story = {
  render: () => ({
    components: { MnIcon },
    template: `
      <div style="display: flex; gap: 1rem; font-size: 1.5rem;">
        <mn-icon icon="moon" color="primary" />
        <mn-icon icon="moon" color="secondary" />
        <mn-icon icon="moon" color="success" />
        <mn-icon icon="moon" color="warning" />
        <mn-icon icon="moon" color="danger" />
      </div>
    `,
  }),
};

export const rtl: Story = {
  args: { icon: "fas arrow-up-right-from-square -rtl" },
  render: (args) => ({
    components: { MnIcon },
    setup: () => ({ args }),
    template: `<div dir="rtl"><mn-icon v-bind="args" /></div>`,
  }),
};
