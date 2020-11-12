const seleniumWebdriver = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const edgedriver = require('edgedriver');

module.exports = function(){
    // const edgePaths = installDriver();
    var options = new edge.Options();
    // options.setEdgeChromium(true);
    // options.setBinaryPath(edgePaths.browserPath);
    var driver = new seleniumWebdriver.Builder().forBrowser("MicrosoftEdge").setEdgeOptions(options).build();
    return driver;  
}