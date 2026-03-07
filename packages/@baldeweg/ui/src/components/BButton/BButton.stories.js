import { fn } from "storybook/test";

import BButton from "./BButton.vue";

export default {
  component: BButton,
  tags: ['alpha'],
  argTypes: {
    design: {
      control: { type: "select" },
      options: [
        "primary",
        "primary_danger",
        "primary_wide",
        "outline",
        "outline_danger",
        "outline_wide",
        "text",
        "text_danger",
      ],
    },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    default: "Send",
    design: "primary",
  },
};

export const Secondary = {
  args: {
    default: "Send",
    design: "primary_danger",
  },
};

export const PrimaryWide = {
  args: {
    default: "Send",
    design: "primary_wide",
  },
};

export const Outline = {
  args: {
    default: "Send",
    design: "outline",
  },
};

export const OutlineDanger = {
  args: {
    default: "Send",
    design: "outline_danger",
  },
};

export const OutlineWide = {
  args: {
    default: "Send",
    design: "outline_wide",
  },
};

export const Text = {
  args: {
    default: "Send",
    design: "text",
  },
};

export const TextDanger = {
  args: {
    default: "Send",
    design: "text_danger",
  },
};
