const { setWorldConstructor, setDefaultTimeout, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { getDriver } = require('./utils');
var executor = require('../../testrunner/executor');
const timeOutMilliSeconds = 30 * 1000;
setDefaultTimeout(timeOutMilliSeconds);


global.driver = null;

BeforeAll(function(){
    if(null == driver){
        driver = getDriver();
    }
    global.actions = driver.actions({async: true}); 
    driver.manage().setTimeouts({implicit: (timeOutMilliSeconds), pageLoad: (timeOutMilliSeconds), script: (timeOutMilliSeconds)});
});

AfterAll(function(){
    executor.execute('node index.js');
    driver.quit();
    driver == null;
});

class CustomWorld {
    constructor({attach, parameters}) {
      this.parameters = parameters;
      this.driver = driver;
      this.attach = attach;
    }
};
  
setWorldConstructor(CustomWorld);

