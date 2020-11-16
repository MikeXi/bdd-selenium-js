let { url, userName, password } = require('../../../config/env');

module.exports = {
    openURL: async function(){
        await driver.get(url);
    },

    login: async function(){
        await driver.findElement({name: 'UserName'}).sendKeys(userName);
        await driver.findElement({name: 'Password'}).sendKeys(password);
        await driver.findElement({name: 'Login'}).click();
    },

    getPageTitle: function(){
        return driver.getTitle();
    }
}