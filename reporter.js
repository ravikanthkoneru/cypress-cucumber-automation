const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");

const generateReport = () => {
    report.generate({
      jsonDir: "./report/cucumber-json",
      reportPath: "./report/",
      metadata: {
        browser: {
          name: "Chrome",
          version: "124",
        },
        device: "Local Test Machine",
        platform: {
          name: "Windows",
          version: "11",
        },
      },
      disableLog: true,
      pageTitle: "Execution Cucumber Html Report",
      openReportInBrowser: true,
      displayDuration: true,
    });
  };

  generateReport();