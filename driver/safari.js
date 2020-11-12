const seleniumWebdriver = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');
const safaridriver = require('wdio-safaridriver-service');

module.exports = function(){
    var options = new safari.Options();
    var driver = new seleniumWebdriver.Builder().forBrowser("safari").setSafariOptions(options).build();
    return driver;  
}