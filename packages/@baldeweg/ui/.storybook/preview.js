import BApp from '../src/components/BApp/BApp.vue';

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#292929' },
        light: { name: 'Light', value: '#ffffff' },
      }
    },
  },
  tags: ['autodocs'],
};

export const decorators = [
  (story) => ({
    components: { story, BApp },
    template: '<BApp><story /></BApp>',
  }),
];

export default preview;
