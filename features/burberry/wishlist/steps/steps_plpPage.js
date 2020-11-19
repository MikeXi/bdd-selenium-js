const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');
var common = require('../../commonpages/common');
var homePage = require('../../commonpages/homePage');
const plpPage = require('../pages/plpPage');

Then(/^I can see the ([^"]+) page opens$/, async function (plp) {
    await common.waitUntilElementLocated(plpPage.breadcrumbLocator).getText().then(function(label){
        assert.equal(label.toUpperCase(), plp.toUpperCase());
    });
});

Given(/^I find the ([^"]+) page opens$/, async function (plp) {
    await common.waitUntilElementLocated(plpPage.breadcrumbLocator).getText().then(function(label){
        assert.equal(label.toUpperCase(), plp.toUpperCase());
    });
});

When(/^I click the heart icon on the ([^"]+) card$/, async function (product) {
    await common.scrollHeight(300);
    await plpPage.addToWishList(product);
});

When(/^I hover on the account icon$/, async function () {
    await common.scrollHeight(0);
    await common.hoverOnElement(driver.findElement(homePage.accountIcon));
});

Then(/^I can see the ([^"]+) on the My Account dropdown$/, async function (favoriteItem) {
    await plpPage.findFavoritesInMyAccountDropdown(favoriteItem).then(function(addedToFavorite){
        assert.equal(addedToFavorite, true);
    })
});