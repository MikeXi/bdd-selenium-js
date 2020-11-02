const { setWorldConstructor } = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(30 * 1000);

var {AfterAll, BeforeAll} = require('cucumber');

global.driver;

BeforeAll(function(){
    var options = new chrome.Options();
    options.addArguments("--start-maximized");
    driver = new seleniumWebdriver.Builder().forBrowser("chrome").setChromeOptions(options).build();
});

var executor = require('../../testrunner/executor');

AfterAll(function(){
    executor.execute('node index.js');
    return driver.quit();
});

class CustomWorld {
    constructor({attach}) {
      // this.driver = driver;
      this.attach = attach;
    }
  };
  
setWorldConstructor(CustomWorld);

