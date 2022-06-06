/* eslint-disable no-undef */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:5050',
  },
  component: {
    setupNodeEvents() {},
    specPattern: 'src/**/__tests__/*.cy.{js,ts,jsx,tsx}',
  },
})
