const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');
var accountPage = require('../pages/accountPage');
var loginPage = require('../../login/pages/loginPage');

When(/^I Logout from Yandex mail$/, async function () {
    await accountPage.logout();
});

Then(/^I can see the login Page$/, async function () {
    var welcomePageDisplayed = await driver.findElement(loginPage.welcomePageLocator).isDisplayed();
    assert.equal(welcomePageDisplayed, true);
});

