const { By } = require('selenium-webdriver');
const { elementsLocated } = require('selenium-webdriver/lib/until');
const common = require('../../commonpages/common');

module.exports = {
    signInCTA: By.className('button_input'),
    registerCTA: By.className('show-signup-button'),
    registerCTAAfter: By.className('sign-up_button button_input'),
    registerPanelLocator: By.className('my-account-sign-up-section'),
    genderRadioButton: By.className('radio-option_label'),
    lastNameText: By.css('input[name="last_name"]'),
    firstNameText: By.css('input[name="first_name"]'),
    emailText: By.css('input[name="email"]'),
    phoneText: By.css('input[name="phone"]'),
    passwordText: By.css('input[name="password"]'),
    subscriptionCheck: By.className('checkbox-option_fake-input'),
    activationLabel: By.className('my-account-activation-reminder-label'),

    registerUser: async function(user){
        let registerPanel = await driver.findElement(this.registerPanelLocator);
        let gender = user.gender.toUpperCase();
        await this.genderSelect(gender);
        await registerPanel.findElement(this.lastNameText).sendKeys(user.lastName);
        await registerPanel.findElement(this.firstNameText).sendKeys(user.firstName);
        await registerPanel.findElement(this.emailText).sendKeys(user.email);
        await registerPanel.findElement(this.phoneText).sendKeys(user.phone);
        await registerPanel.findElement(this.passwordText).sendKeys(user.password);
        if(user.subscription == true){
            await registerPanel.findElement(this.subscriptionCheck).click();
        }
    },

    genderSelect: async function(gender){
        await driver.findElements(this.genderRadioButton).then(function(genders){
            genders.forEach(function(child){
                child.getText().then(async function(genderValue){
                    if (genderValue == gender){
                        await child.click();
                    }
                })
            });
                
        });
    }
}