import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const getAbsolutePath = value => dirname(fileURLToPath(import.meta.resolve(join(value, 'package.json'))))

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  'stories': [
    '../src/components/*.mdx',
    '../src/**/*.stories.js'
  ],
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook-addon-tag-badges'
  ],
  'framework': {
    'name': getAbsolutePath('@storybook/vue3-vite'),
    'options': {}
  },
  'core': {
    'disableTelemetry': true
  }
};

export default config;
