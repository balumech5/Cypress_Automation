const { defineConfig } = require("cypress");
module.exports = {
  // other configuration options
  defaultCommandTimeout: 10000, // example for other commands timeout
  pageLoadTimeout: 60000 // increase page load timeout to 60 seconds (or more if needed)
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //defaultCommandTimeout: 10000, // example for other commands timeout
      //pageLoadTimeout: 60000 // increase page load timeout to 60 seconds (or more if needed)
      //pageLoadTimeout: 9000 // Example: Increase timeout to 90 seconds
    },
  },
});
