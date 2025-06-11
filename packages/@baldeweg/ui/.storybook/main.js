import { join, dirname } from 'path'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

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
