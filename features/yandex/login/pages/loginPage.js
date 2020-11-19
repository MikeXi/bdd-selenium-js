let { url, userName, password } = require('../../../../config/env');
const { By, Key, until } = require('selenium-webdriver');
var mailPage = require('../../mail/pages/mailPage');

module.exports = {
    welcomePageLocator: By.className('passp-auth-screen passp-welcome-page'),
    buttonsLocator: By.className('HeadBanner-ButtonsWrapper'),
    loginButtonLocator: By.xpath('/html/body/div[1]/div/div[2]/div/div/div[4]/a[2]'),
    userNameTextLocator: By.name('login'),
    passworeTextLocator: By.name('passwd'),

    openURL: async function(){
        await driver.get(url);
    },

    login: async function(){
        var buttons = await driver.findElement(this.buttonsLocator);
        var loginButton = await buttons.findElement(this.loginButtonLocator).click();
        await driver.wait(until.elementLocated(this.userNameTextLocator)).sendKeys(userName);
        try{
            await actions.keyDown(Key.ENTER).perform();
        }catch(error){
        }
        await driver.wait(until.elementLocated(this.passworeTextLocator)).sendKeys(password);
        try{
            await actions.keyDown(Key.ENTER).perform();
        }catch(error){
        }
    },

    getPageTitle: async function(){
        await driver.wait(until.elementLocated(mailPage.composeButtonLocator));
        return await driver.getTitle();
    }
}