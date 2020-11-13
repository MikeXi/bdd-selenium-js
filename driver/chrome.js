const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

module.exports = function(){
    var options = new chrome.Options();
    options.addArguments("--start-maximized");
    var driver = new seleniumWebdriver.Builder().withCapabilities({
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
            args: ['start-maximized', 'disable-extensions']
        },
        path: chromedriver.path
    }).build();
    driver.manage().window().maximize();

    return driver;  
}