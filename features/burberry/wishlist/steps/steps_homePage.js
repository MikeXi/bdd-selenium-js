const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');
var common = require('../../commonpages/common');
var homePage = require('../../commonpages/homePage');
const { Driver } = require('selenium-webdriver/chrome');

Given(/^I open Burberry Site$/, async function () {
    await homePage.openBurberrySite();
});

When(/^I click the Store Locator link in footer$/, async function () {
    await common.footerElementClick(homePage.storeLocator);
});

When(/^I click the Sign In CTA$/, async function () {
    await driver.findElement(homePage.accountIcon).click();
    await common.pageLoadCompleted();
});

When(/^I hover on one menu ([^"]+)$/, async function (menu) {
    await homePage.hoverOnTopMenu(menu);
});

When(/^I click the ([^"]+) page link$/, async function (plp) {
    await homePage.clickSubMenu(plp);
    await common.pageLoadCompleted();
  });