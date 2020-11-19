const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');
var loginPage = require('../../login/pages/loginPage');
var mailPage = require('../pages/mailPage');

Given(/^I am logged in Yandex mail$/, async function () {
    await mailPage.clickMenu('Inbox');
    var title = await loginPage.getPageTitle();
    assert.equal(title, 'Inbox — Yandex.Mail');
});

When(/^I add Draft mail with ([^"]+), ([^"]+), ([^"]+)$/, async function (to, subject, body) {
    await mailPage.addDraftMail(to, subject, body);
});

Then(/^I can find the mail in ([^"]+) box with ([^"]+), ([^"]+), ([^"]+)$/, async function (menuName, to, subject, body) {
    await mailPage.clickMenu(menuName);
    var mailExist = await mailPage.findEmail(to, subject, body);
    var mailDisplayed = await mailExist.isDisplayed();
    assert.equal(mailDisplayed, true);
});

Given(/^I am in ([^"]+) box$/, async function (menuName) {
    await mailPage.clickMenu(menuName);
});

When(/^I send the Draft mail with ([^"]+), ([^"]+), ([^"]+)$/, async function (to, subject, body) {
    await mailPage.sendDraftMail(to, subject, body);
});

Then(/^I can find the sent mail in ([^"]+) box with ([^"]+), ([^"]+), ([^"]+)$/, async function (menuName, to, subject, body) {
    await mailPage.clickMenu(menuName);
    var mailExist = await mailPage.findEmail(to, subject, body);
    var mailDisplayed = await mailExist.isDisplayed();
    assert.equal(mailDisplayed, true);
});