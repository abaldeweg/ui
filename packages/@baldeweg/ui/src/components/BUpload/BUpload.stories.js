import BUpload from "./BUpload.vue";

export default {
  component: BUpload,
  tags: ["beta"],
  parameters: {
    docs: {
      description: {
        component:
          'Set the enctype of the parent form to `enctype="multipart/form-data"`.',
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description: "ID attribute for the input element",
    },
    text: {
      control: "text",
      description: "Instructional text displayed in the upload area",
    },
    accept: {
      control: "text",
      description: "File types that the file input should accept",
    },
    modelValue: {
      control: "boolean",
      description: "v-model binding",
    },
    "update:modelValue": {
      action: "update:modelValue",
      description: "Event emitted when a file is selected",
    },
  },
};

export const Default = {
  args: {
    id: "upload",
    text: "Drop a file here or click to upload",
  },
};

export const PDFUpload = {
  args: {
    id: "upload",
    text: "Drop a pdf file here or click to upload",
    accept: "application/pdf",
  },
};
