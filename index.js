'use strict';

var  reporter = require('cucumber-html-reporter');
var report = require('./config/report');
var jsonFile = report.jsonFile;
var output = report.output;

var options = {
        theme: 'bootstrap',
        jsonFile: jsonFile,
        output: output,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        storeScreenshots: true,
        screenshotsDirectory: 'screenshots',
        metadata: {
            "Test Environment": "QA",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
