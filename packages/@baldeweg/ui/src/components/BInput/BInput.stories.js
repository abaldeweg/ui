import BInput from "./BInput.vue";

export default {
  title: "Components/BInput",
  component: BInput,
  tags: ["beta"],
  parameters: {
    docs: {
      description: {
        component:
          "Not applicable to checkbox and radio. Additional attributes are passed to the underlying input element. For types refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes.",
      },
    },
  },
  argTypes: {
    modelValue: { control: "text" },
    type: {
      control: "select",
      options: [
        "date",
        "color",
        "datetime-local",
        "email",
        "month",
        "number",
        "password",
        "range",
        "search",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
    },
    name: { control: "text" },
    id: { control: "text" },
    label: { control: "text" },
    help: { control: "text" },
    hideLabel: { control: "boolean" },
    "update:modelValue": { action: "updated" },
  },
};

export const Default = {
  args: {
    type: "text",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Date = {
  args: {
    type: "date",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Color = {
  args: {
    type: "color",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Datetime = {
  args: {
    type: "datetime-local",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Email = {
  args: {
    type: "email",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Month = {
  args: {
    type: "month",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Number = {
  args: {
    type: "number",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Password = {
  args: {
    type: "password",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Range = {
  args: {
    type: "range",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Search = {
  args: {
    type: "search",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Tel = {
  args: {
    type: "tel",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Time = {
  args: {
    type: "time",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const URL = {
  args: {
    type: "url",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const Week = {
  args: {
    type: "week",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: false,
  },
};

export const HiddenLabel = {
  args: {
    type: "text",
    name: "input",
    id: "input",
    label: "Label",
    help: "This is a help text",
    hideLabel: true,
  },
};

export const WithoutHelpline = {
  args: {
    type: "text",
    name: "input",
    id: "input",
    label: "Label",
    help: "",
    hideLabel: false,
  },
};
