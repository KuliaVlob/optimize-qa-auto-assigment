const { defineConfig } = require("cypress");

module.exports = defineConfig({
  scrollBehavior: 'center',
  e2e: {
    baseUrl: 'https://www.optimove.com',
  },
});
