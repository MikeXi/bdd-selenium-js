const { By } = require('selenium-webdriver');

module.exports = {
    userLocator: By.className('user-pic user-pic_has-plus_ user-account__pic'),
    logoutLocator: By.css('a[aria-label="Log out"]'),
    
    logout: async function(){
        await driver.findElement(this.userLocator).click();
        await driver.findElement(this.logoutLocator).click();
    },

}