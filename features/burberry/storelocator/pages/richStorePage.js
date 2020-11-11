const { By, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/edge');
var common = require('../../commonpages/common');

module.exports = {
    contactTitle: By.className('contact_title'),
    storeDetailsName: By.className('store-details_name'),
    storeDetailsAddress: By.className('store-details_address'),
    storeDetailsPhone: By.className('store-details_phone'),
    storeDetailsOpenHours: By.className('store-details_opening-times'),

    storeDisplayed: async function(name){
        return await driver.findElement(By.css('img[alt="' + name + '"]')).isDisplayed();
    },

    getStoreDetails: async function(field){
        switch(field.toUpperCase()){
            case 'NAME':
                return await driver.findElement(this.storeDetailsName).getText();
            case 'ADDRESS':
                return await driver.findElement(this.storeDetailsAddress).getText();
            case 'PHONE':
                return await driver.findElement(this.storeDetailsPhone).getText();
            case 'OPENHOURS':
                return await driver.findElement(this.storeDetailsOpenHours).getText();
            default:
                console.log('Can not find the field: ' + field);        
        }
    }
}