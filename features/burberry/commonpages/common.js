const { By, until } = require('selenium-webdriver');
const { url } = require('../../../config/env');

module.exports = {
    openURL: async function(){
        var currentUrl = await driver.getCurrentUrl();
        if (!currentUrl.includes(url)){
            await driver.get(url);
        }
        return await driver.getCurrentUrl();
    },

    pageLoadCompleted: async function(){
        await driver.executeScript('window.onload = function(){setTimeout(function(){console.log("Page is loaded");},5000)}');
    },

    waitUntilElementLocated: function(elementLocator){
        return driver.wait(until.elementLocated(elementLocator));
    },

    elementDisplayed: async function(elementLocator){
        return await driver.findElement(elementLocator).isDisplayed();
    },

    highlightElement: function(element){
        driver.executeScript('arguments[0].setAttribute("style", arguments[1]);', element, 'border: 2px solid red;');
    },

    elementClick: async function(elementLocator){
        let element = await this.waitUntilElementLocated(elementLocator);
        this.highlightElement(element);
        element.click();
    },

    footerElementClick: async function(elementLocator){
        await this.scrollHeight('BOTTOM');
        await this.waitUntilElementLocated(elementLocator).click();
    },

    hoverOnElement: async function(element){
        await driver.actions().move({x: 0, y: 0, origin: element}).perform();
    },

    selectOption: async function(selector, item){
        var selectList = this.waitUntilElementLocated(selector);
        await selectList.click();
        await selectList.findElement(By.css("option[value='" + item + "']")).click();
        await driver.sleep(1000);

    },

    switchTab: async function(handle){
        var windowHandles = await driver.getAllWindowHandles();
        console.log("START switch handle..........................");
        await driver.switchTo().window(windowHandles[handle]);
        console.log('after: ' + await driver.getWindowHandle());
    },

    scrollHeight: async function(height){
        if (height == 'BOTTOM'){
            await driver.executeScript('window.scrollTo(0,document.body.scrollHeight);');
        }
        else{
            await driver.executeScript('window.scrollTo(0,arguments[0]);', height);
        }      
    }

}