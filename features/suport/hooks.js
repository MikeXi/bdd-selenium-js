const { setWorldConstructor, setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
const { getDriver } = require('./utils');
var executor = require('../../testrunner/executor');

setDefaultTimeout(300 * 1000);


global.driver = null;

BeforeAll(function(){
      driver = getDriver();
});

AfterAll(function(){
    executor.execute('node index.js');
    return driver.quit();
});

class CustomWorld {
    constructor({attach, parameters}) {
      this.parameters = parameters;
      this.driver = driver;
      this.attach = attach;
    }
};
  
setWorldConstructor(CustomWorld);

