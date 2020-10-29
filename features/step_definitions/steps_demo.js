const { Given, When, Then } = require('cucumber');
var assert = require('assert');

Given(/^I have visited the Selenium official web page$/, function () {
    this.driver.get('https://www.selenium.dev');
  });

When(/^There is a title on the page as "([^"]+)"$/, async function(titleMatch) {
    await this.driver.getTitle()
      .then(function (title){
        assert.equal(title, titleMatch);
      })
  });

Then(/^I should be able to click Search in the sidebar$/, async function () {
    await this.driver.findElement({ name: 'search' }).click();
    this.driver.findElement({ name: 'search' }).sendKeys('test');
  });

Given(/^I have visited the Selenium$/, function () {
    assert.equal(1,1);
  });