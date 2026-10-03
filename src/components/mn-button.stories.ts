import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MnButton from "./mn-button.vue";

const meta: Meta<typeof MnButton> = {
  title: "Components/Button",
  component: MnButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "outline", "text", "inline"],
    },
    icon: { control: "text" },
    labelless: { control: "boolean" },
    wide: { control: "boolean" },
    pending: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Confirm",
  },
};

export default meta;
type Story = StoryObj<typeof MnButton>;

export const primary: Story = {
  args: { variant: "primary" },
};

export const secondary: Story = {
  args: { variant: "secondary" },
};

export const danger: Story = {
  args: { variant: "danger" },
};

export const outline: Story = {
  args: { variant: "outline" },
};

export const text: Story = {
  args: { variant: "text" },
};

export const inline: Story = {
  args: { variant: "inline", label: "confirm" },
};

export const icon: Story = {
  args: { icon: "fas wand-magic-sparkles" },
};

export const labelless: Story = {
  args: { icon: "fas wand-magic-sparkles", labelless: true },
  parameters: {
    docs: {
      description: {
        story: "Requires an icon to fall back to — without one, labelless is ignored and the text label stays visible.",
      },
    },
  },
};

export const pending: Story = {
  args: { pending: true },
};

export const disabled: Story = {
  args: { disabled: true },
};

export const wide: Story = {
  args: { wide: true },
};
