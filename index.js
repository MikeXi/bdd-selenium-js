'use strict';

let  reporter = require('cucumber-html-reporter');
let { jsonFile, output } = require('./config/report');
let { env } = require('./config/env');
var browser = process.env.BROWSER;

var options = {
        theme: 'bootstrap',
        jsonFile: jsonFile,
        output: output,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        storeScreenshots: true,
        screenshotsDirectory: 'screenshots',
        metadata: {
            "Test Environment": env.toUpperCase(),
            "Browser": browser.toUpperCase(),
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
