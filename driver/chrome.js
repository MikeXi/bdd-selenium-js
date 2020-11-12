const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

module.exports = function(){
    var options = new chrome.Options();
    options.addArguments("--start-maximized");
    var driver = new seleniumWebdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();
    return driver;  
}