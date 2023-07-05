const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/commands.js',
    video: false,
    browser: 'chrome',
    baseUrl: 'http://localhost:3000',
  },
})
