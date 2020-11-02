var env = require('../../config/env');
var url = env.url;
var userName = env.userName;
var password = env.password;

module.exports = {
    openURL: function(){
        driver.get(url);
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