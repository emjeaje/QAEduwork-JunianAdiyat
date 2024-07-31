const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents (on, config) {
  await preprocessor.addCucumberPreprocessorPlugin (on, config);
  on ("file: preprocessor", browserify.default (config));
  return config;
}

// module.exports = defineConfig({
//   video: false,
//   defaultCommandTimeout: 5000,
//   pageLoadTimeout: 10000, 
//   e2e: {
//     specPattern: "**/*.feature", 
//     supportFile: false,
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     }
//   },
// });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
 specPattern: "**/*.feature",
  },
  videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'report-cypress',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
})