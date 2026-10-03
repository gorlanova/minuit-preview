import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MnContainer from "./mn-container.vue";

const meta: Meta<typeof MnContainer> = {
  title: "Components/Container",
  component: MnContainer,
  tags: ["autodocs"],
  argTypes: {
    tag: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large", "wide"] },
    flow: { control: "select", options: ["row", "row-between", "row-end", "grid", "grid-center"] },
    columns: { control: "text" },
    gap: { control: "text" },
    surface: { control: "boolean" },
    centered: { control: "boolean" },
  },
  args: {
    surface: true,
  },
  render: (args) => ({
    components: { MnContainer },
    setup: () => ({ args }),
    template: `<mn-container v-bind="args"><p>How to use</p><p>The container element</p></mn-container>`,
  }),
};

export default meta;
type Story = StoryObj<typeof MnContainer>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => ({
    components: { MnContainer },
    template: `
      <div style="display: grid; gap: 0.5rem;">
        <mn-container size="small" surface><p>small</p></mn-container>
        <mn-container size="medium" surface><p>medium</p></mn-container>
        <mn-container size="large" surface><p>large</p></mn-container>
        <mn-container size="wide" surface><p>wide</p></mn-container>
      </div>
    `,
  }),
};

export const row: Story = {
  args: { flow: "row" },
  render: (args) => ({
    components: { MnContainer },
    setup: () => ({ args }),
    template: `<mn-container v-bind="args"><span>Item A</span><span>Item B</span><span>Item C</span></mn-container>`,
  }),
};

export const centered: Story = {
  args: { size: "small", centered: true },
};
