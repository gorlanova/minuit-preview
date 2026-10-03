import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MnTitle from "./mn-title.vue";

const meta: Meta<typeof MnTitle> = {
  title: "Components/Title",
  component: MnTitle,
  tags: ["autodocs"],
  argTypes: {
    tag: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
    align: { control: "select", options: ["start", "center", "end"] },
    lines: { control: "number" },
  },
  args: {
    tag: "h2",
  },
  render: (args) => ({
    components: { MnTitle },
    setup: () => ({ args }),
    template: `<mn-title v-bind="args">How to use the title element</mn-title>`,
  }),
};

export default meta;
type Story = StoryObj<typeof MnTitle>;

export const Default: Story = {};

export const Levels: Story = {
  render: () => ({
    components: { MnTitle },
    template: `
      <div style="display: grid; gap: 0.5rem;">
        <mn-title tag="h1">Heading level 1</mn-title>
        <mn-title tag="h2">Heading level 2</mn-title>
        <mn-title tag="h3">Heading level 3</mn-title>
        <mn-title tag="h4">Heading level 4</mn-title>
        <mn-title tag="h5">Heading level 5</mn-title>
        <mn-title tag="h6">Heading level 6</mn-title>
      </div>
    `,
  }),
};

export const center: Story = {
  args: { align: "center" },
};

export const lines: Story = {
  args: {
    lines: 1,
  },
  render: (args) => ({
    components: { MnTitle },
    setup: () => ({ args }),
    template: `<mn-title v-bind="args">A very long title that should be truncated after a single line once it wraps beyond the available width</mn-title>`,
  }),
};
