import BSpinner from "./BSpinner.vue";

export default {
  component: BSpinner,
  tags: ["beta"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["s", "m", "l"],
      description: "Controls the size of the spinner",
    },
  },
};

export const Default = {
  args: {
    size: "l",
  },
};

export const SizeM = {
  args: {
    size: "m",
  },
};

export const SizeS = {
  args: {
    size: "s",
  },
};
