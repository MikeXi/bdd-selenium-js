const seleniumWebdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const firefoxdriver = require('geckodriver');

module.exports = function(){
    var options = new firefox.Options();
    var driver = new seleniumWebdriver.Builder().forBrowser("firefox").setFirefoxOptions(options).build();
    return driver;  
}