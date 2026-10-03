import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MnLink from "./mn-link.vue";

const meta: Meta<typeof MnLink> = {
  title: "Components/Link",
  component: MnLink,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    to: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "outline", "text", "inline"],
    },
    icon: { control: "text" },
    labelless: { control: "boolean" },
    wide: { control: "boolean" },
  },
  args: {
    label: "About",
    to: "/about",
  },
};

export default meta;
type Story = StoryObj<typeof MnLink>;

export const Default: Story = {};

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
  args: { variant: "inline", label: "about" },
};

export const external: Story = {
  args: { label: "Minuit on GitHub", to: "https://github.com/gorlanova/minuit" },
  parameters: {
    docs: {
      description: {
        story:
          'A `to` value starting with `http` is treated as external: renders a plain `<a>` with `target="_blank"` and an external-link icon.',
      },
    },
  },
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

export const wide: Story = {
  args: { wide: true },
};
