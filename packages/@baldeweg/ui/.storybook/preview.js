import { setup } from '@storybook/vue3-vite';
import BApp from '../src/components/BApp/BApp.vue';
import { registerPlugins } from '../src/plugins/index.js';

setup((app) => {
  registerPlugins(app);
})

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
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#292929' },
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
  (story, context) => {
    setTimeout(() => {
      document.body.setAttribute('data-theme', 'light');
      if (context.globals.backgrounds?.value === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
      }
    }, 100);
    return story();
  },
];

export default preview;
