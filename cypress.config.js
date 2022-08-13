
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl": "https://practicetestautomation.com",
    "pageLoadTimeOut": 90000,

    "env": {
      "username": "student",
      "passward": "Password123"
    }

  }

});
