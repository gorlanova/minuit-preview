import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MnText from "./mn-text.vue";

const meta: Meta<typeof MnText> = {
  title: "Components/Text",
  component: MnText,
  tags: ["autodocs"],
  argTypes: {
    align: { control: "select", options: ["start", "center", "end"] },
    lines: { control: "number" },
    small: { control: "boolean" },
    large: { control: "boolean" },
    muted: { control: "boolean" },
    bold: { control: "boolean" },
    italic: { control: "boolean" },
    balanced: { control: "boolean" },
  },
  render: (args) => ({
    components: { MnText },
    setup: () => ({ args }),
    template: `<mn-text v-bind="args">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum tempora molestias pariatur, repellat aliquam nihil adipisci optio possimus.</mn-text>`,
  }),
};

export default meta;
type Story = StoryObj<typeof MnText>;

export const Default: Story = {};

export const small: Story = {
  args: { small: true },
};

export const large: Story = {
  args: { large: true },
};

export const muted: Story = {
  args: { muted: true },
};

export const bold: Story = {
  args: { bold: true },
};

export const italic: Story = {
  args: { italic: true },
};

export const lines: Story = {
  args: { lines: 2 },
};
