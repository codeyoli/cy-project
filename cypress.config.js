const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1200,
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return cloudPlugin(on, config);
    },
  },
});
