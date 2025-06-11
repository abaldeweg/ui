import { fn } from "storybook/test";

import BButton from "./BButton.vue";

export default {
  component: BButton,
  tags: ['alpha'],
  argTypes: {
    design: {
      control: { type: "select" },
      options: ["primary", "primary_danger", "primary_wide"],
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
