const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');
var loginPage = require('../pages/loginPage');

Given(/^I navigate to the Yandex Mail login page$/, async function () {
    await loginPage.openURL();
});

When(/^I input the correct username and password$/, async function () {
    await loginPage.login();
});

Then(/^I can see the Yandex Mail title as ([^"]+)$/, async function (titleMatch) {
    var title = await loginPage.getPageTitle();
    assert.equal(title, titleMatch);
});

