const { Given, When, Then } = require('@cucumber/cucumber');
var storeLocatorPage = require('../pages/storeLocatorPage');
var common = require('../../commonpages/common');
var assert = require('assert');
var storeLocatePageLoaded = 'window.onload = function(){ common.waitUntilElementLocated(storeLocatorPage.storeLocatorTitle).getText().then(function(title){assert.equal(title, "店铺方位");});}';

Then(/^I can see the Store Locator page$/, async function () {
    await driver.executeScript(storeLocatePageLoaded);
});

Given(/^I am in Store Locator page$/, async function () {
    await common.waitUntilElementLocated(storeLocatorPage.storeLocatorTitle).getText().then(function(title){
        assert.equal(title, '店铺方位');
    })
});

When(/^I search stores with ([^"]+) and ([^"]+)$/, async function (province, city) {
    await storeLocatorPage.searchStore(province,city);
});

Then(/^I can see the ([^"]+) with correct store information$/, async function (searchedStoresMatch) {
    await storeLocatorPage.getSearchedStores().then(function(searchedStores){
        assert.equal(searchedStores, searchedStoresMatch);
    });
    await storeLocatorPage.getStoreInfo('name').then(function(name){
        assert.equal(name, '上海静安嘉里中心旗舰店');
    });
    await storeLocatorPage.getStoreInfo('phone').then(function(phone){
        assert.equal(phone, '+86 21 5243 9005');
    });
    await storeLocatorPage.getStoreInfo('openHours').then(function(openHours){
        assert.equal(openHours, '营业时间：');
    });
});

Given(/^I have searched out the stores$/, async function () {
    await storeLocatorPage.getStoreInfo('details').then(function(details){
        assert.equal(details, '查看店铺详情');
    });
});

When(/^I click the See Store Information CTA on one store card$/, async function () {
    await driver.findElement(storeLocatorPage.storeDetailsCTA).click();
});