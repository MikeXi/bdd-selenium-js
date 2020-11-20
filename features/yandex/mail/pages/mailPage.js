const { By, Key, until } = require('selenium-webdriver');
var utils = require('../../../suport/utils');

module.exports = {
    randomString: utils.randomString(),

    composeButtonLocator: By.className('mail-ComposeButton-Text'),
    toLocator: By.className('composeYabbles'),
    subjectLocator: By.name('subject'),
    bodyLocator: By.css('div[placeholder="Write something"]'),
    composePopupLocator: By.className('ComposePopup-Content'),
    closeIconLocator: By.className('ControlButton ControlButton_button_close'),
    draftsMenuLocator: By.css('a[data-title="Drafts"]'),
    mailListLocator: By.className('ns-view-container-desc mail-MessagesList js-messages-list'),
    mailItemsLocator: By.className('mail-MessageSnippet-Content'),
    toLabelLocator: By.className('mail-MessageSnippet-FromText'),
    subjectLabelLocator: By.className('mail-MessageSnippet-Item mail-MessageSnippet-Item_subject'),
    bodyLabelLocator: By.className('mail-MessageSnippet-Item mail-MessageSnippet-Item_firstline js-message-snippet-firstline'),
    SendLocator: By.className('control button2 button2_view_default button2_tone_default button2_size_l button2_theme_action button2_pin_circle-circle ComposeControlPanelButton-Button ComposeControlPanelButton-Button_action'),
    backToInboxLinkLocator: By.linkText('Back to "Inbox"'),

    addDraftMail: async function(to, subject, body){
        var subject = subject + ' ' + this.randomString;
        var body = body + ' ' + this.randomString;
        await driver.findElement(this.composeButtonLocator).click();
        var composePopup = await driver.wait(until.elementLocated(this.composePopupLocator));
        await composePopup.findElement(this.toLocator).sendKeys(to);
        var subjectText = await composePopup.findElement(this.subjectLocator)
        await subjectText.click();
        await subjectText.sendKeys(subject);
        await composePopup.findElement(this.bodyLocator).sendKeys(body);
        await composePopup.findElement(this.closeIconLocator).click();
        await driver.sleep(2000);
    },

    findEmail: async function(to, subject, body){
        var subject = subject + ' ' + this.randomString;
        var body = body + ' ' + this.randomString;
        var mailExist = null;

        var mailList = await driver.wait(until.elementLocated(this.mailListLocator));
        var mailItems = await mailList.findElements(this.mailItemsLocator);
        for(var i = 0; i < mailItems.length; i++){
            var toLabel = await mailItems[i].findElement(this.toLabelLocator).getText();
            var subjectLabel = await mailItems[i].findElement(this.subjectLabelLocator).getText();
            var bodyLabel = await mailItems[i].findElement(this.bodyLabelLocator).getText();
            if((toLabel == to) && (subjectLabel == subject)  && (bodyLabel == body)){
                mailExist = mailItems[i];
                break;
            }
        }
        return mailExist;
    },

    sendDraftMail: async function(to, subject, body){
        var mailItem = await this.findEmail(to, subject, body);
        await mailItem.click();
        var sendButon = await driver.wait(until.elementLocated(this.SendLocator));
        await sendButon.click();
        await driver.sleep(2000);
        await driver.findElement(this.backToInboxLinkLocator).click();

    },

    clickMenu: async function(menuName){
        await driver.findElement(By.css('a[data-title="' + menuName + '"]')).click();
        await driver.sleep(2000);
    }

}