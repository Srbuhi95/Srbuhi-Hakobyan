const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {
  baseUrl: "https://coinstats.app", // Replace with the actual base URL of your application
  integrationFolder: "cypress/integration", // Folder where your test files are located
};