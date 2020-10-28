const { setWorldConstructor } = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(30 * 1000);

var {AfterAll, BeforeAll} = require('cucumber');

var driver;

BeforeAll(function(){
    var options = new chrome.Options();
    options.addArguments("--start-maximized");
    driver = new seleniumWebdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();
});

AfterAll(function(){
    return driver.quit();
});

class CustomWorld {
    constructor() {
      this.driver = driver;
    }
  }
  
setWorldConstructor(CustomWorld);