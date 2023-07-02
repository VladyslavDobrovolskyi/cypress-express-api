const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    video : false,
    browser:'chrome',
    baseUrl:'http://172.29.192.187:3000'
  },
});
