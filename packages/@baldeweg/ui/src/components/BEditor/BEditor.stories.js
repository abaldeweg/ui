import BEditor from './BEditor.vue'

export default {
  title: 'Components/BEditor',
  component: BEditor,
  argTypes: {
    modelValue: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    label: { control: 'text' },
    hideLabel: { control: 'boolean' },
    help: { control: 'text' },
    language: {
      control: 'select',
      options: ['json', 'css', 'html', 'typescript', 'javascript'],
    },
  },
}

const Template = (args) => ({
  components: { BEditor },
  setup() {
    return { args }
  },
  template: '<BEditor v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  modelValue: '{\n\t"key": "value"\n}',
  name: 'editor',
  id: 'editor',
  label: 'JSON Editor',
  language: 'json',
  help: 'This is a help text',
}

export const HTMLEditor = Template.bind({})
HTMLEditor.args = {
  modelValue: '<section>\n\t<h1>Test</h1>\n</section>',
  name: 'htmlEditor',
  id: 'htmlEditor',
  label: 'HTML Editor',
  language: 'html',
}

export const CSSEditor = Template.bind({})
CSSEditor.args = {
  modelValue: 'body {\n\tmargin: 0;\n\tpadding: 0;\n}',
  name: 'cssEditor',
  id: 'cssEditor',
  label: 'CSS Editor',
  language: 'css',
}

export const HiddenLabel = Template.bind({})
HiddenLabel.args = {
  ...Default.args,
  hideLabel: true,
}

export const HiddenHelpline = Template.bind({})
HiddenHelpline.args = {
  ...Default.args,
  help: undefined,
}
