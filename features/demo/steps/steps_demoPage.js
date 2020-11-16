const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');
var demoPage = require('../pages/demoPage');

Given(/^I navigate to the login page$/, async function () {
    await demoPage.openURL();
});

Given(/^I am in login page$/, function () {
    console.log('I am in login page');
});

When(/^I input correct username and password$/, async function () {
    await demoPage.login();
});

Then(/^I can see the title ([^"]+)$/, async function (titleMatch) {
    await demoPage.getPageTitle().then(function(title){
        assert.equal(title, titleMatch);
    })
});

