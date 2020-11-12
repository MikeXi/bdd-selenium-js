const seleniumWebdriver = require('selenium-webdriver');
const iedriver = require('iedriver');
const ie = require('selenium-webdriver/ie');

module.exports = function(){
    var options = new ie.Options();
    options.addArguments("ignoreZoomSetting");
    options.addArguments("ignoreProtectedModeSettings");
    var driver = new seleniumWebdriver.Builder().forBrowser('ie').setIeOptions(options).build();
    return driver; 
}