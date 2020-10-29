'use strict';

var  reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_report.html',
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
