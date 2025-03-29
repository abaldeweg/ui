import { fn } from "@storybook/test";

import BButton from "./BButton.vue";

export default {
  title: "Components/Button",
  component: BButton,
  tags: ["autodocs"],
  argTypes: {
    design: {
      control: { type: "select" },
      options: ["primary", "primary_danger", "primary_wide"],
    },
    ripple: { control: {type: "boolean"} },
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
