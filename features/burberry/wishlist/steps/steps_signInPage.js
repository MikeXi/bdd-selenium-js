const { Given, When, Then } = require('cucumber');
var assert = require('assert');
var common = require('../../commonpages/common');
var signInPage = require('../pages/signInPage');
const { registerUser } = require('../../../../data/user');
const { Driver } = require('selenium-webdriver/chrome');

var activationLabelDisplayed = 'async function(){await common.elementDisplayed(signInPage.activationLabel).then(function(activeLavel){assert.equal(activeLavel, true);});};'

Then(/^I can see the Sign In page$/, async function () {
    common.elementDisplayed(signInPage.registerCTA).then(function(registerCTAExisted){
      assert.equal(registerCTAExisted, true);
    });
});

Given(/^I am in the Sign In page$/, async function () {
    await common.elementDisplayed(signInPage.registerCTA).then(function(registerCTAExisted){
      assert.equal(registerCTAExisted, true);
    });
});

When(/^I click the Register CTA$/, async function () {
    await driver.findElement(signInPage.registerCTA).click();
    await driver.sleep(1000);
});

Then(/^I input user information$/, async function () {
    await signInPage.registerUser(registerUser);
});

Then(/^I click the Register CTA again$/, async function () {
  await common.scrollHeight('BOTTOM');
  await common.elementClick(signInPage.registerCTAAfter);
});

Then(/^I can see the Thanks for registering message$/, async function () {
    await common.pageLoadCompleted(activationLabelDisplayed);
});

Given(/^I am in the Thanks for registering page$/, async function () {
    await common.pageLoadCompleted(activationLabelDisplayed);
});