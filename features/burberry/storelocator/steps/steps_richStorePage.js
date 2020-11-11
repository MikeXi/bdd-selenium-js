const { By } = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');
var richStorePage = require('../pages/richStorePage');
var common = require('../../commonpages/common');
var assert = require('assert');


Then(/^I can see the Rich Store page with ([^"]+) and store information$/, async function (nameMatch) {
    await common.switchTab(1);
    await driver.sleep(20000);
    await common.elementDisplayed(By.css("img[alt='" + nameMatch + "']")).then(function(isDisplayed){
        assert.equal(isDisplayed, true);
    });
    await driver.findElement(richStorePage.contactTitle).getText().then(function(title){
        assert.equal(title, '联系方式');
    });
    await richStorePage.getStoreDetails('phone').then(function(phone){
        assert.equal(phone, '+86 21 5243 9005');
    });
    driver.close();
    await common.switchTab(0);
  });