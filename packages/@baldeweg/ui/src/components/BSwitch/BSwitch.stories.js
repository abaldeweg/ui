import BSwitch from "./BSwitch.vue";

export default {
  component: BSwitch,
  tags: ["beta"],
  argTypes: {
    modelValue: { control: "boolean" },
    label: { control: "text" },
  },
};

export const Default = {
  args: {
    modelValue: true,
    label: "Label",
  },
};
