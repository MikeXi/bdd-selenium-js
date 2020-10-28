var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'report/cucumber_report.json',
        output: 'report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Test Environment": "QA",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);