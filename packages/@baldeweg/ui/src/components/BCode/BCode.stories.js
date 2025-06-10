import BCode from "./BCode.vue";

export default {
  component: BCode,
  tags: ["beta"],
  argTypes: {
    default: {
      control: "text",
      description: "The content to be displayed inside the code block",
    },
  },
};

export const Default = {
  args: {
    default: 'const example = "test";\nconsole.log(example);',
  },
};
