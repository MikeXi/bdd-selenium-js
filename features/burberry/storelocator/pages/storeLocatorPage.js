const { By, until, Key } = require('selenium-webdriver');
var common = require('../../commonpages/common');

module.exports = {
    storeLocatorTitle: By.className('title-bar_title'),
    provinceSelect: By.className('search-box_selector search-box_selector-states'),
    citySelect: By.className('search-box_selector search-box_selector-cities'),
    searchButton: By.className('search-box_search-cta'),
    searchResult: By.className('store-list_city'),
    storeCard: By.className('store'),
    storName: By.className('store_name'),
    storeAddress: By.className('store_address'),
    storePhone: By.className('store_phone'),
    storeDetailsCTA: By.className('store_boutique-link'),
    storeDetailsLink: By.className('store_details'),
    storeOpenHours: By.className('store_opening-time_title'),

    searchStore: async function(province, city){
        await driver.sleep(2000);
        await common.selectOption(this.provinceSelect, province.toUpperCase());
        await driver.sleep(2000);
        await common.selectOption(this.citySelect, city);
        await driver.sleep(2000);
        await driver.findElement(this.searchButton).click();
        await driver.sleep(2000);
    },

    getSearchedStores: async function(){
        return await common.waitUntilElementLocated(this.searchResult).getText();
    },

    getStoreInfo: async function(field){
        await driver.findElement(this.storeCard).click();
        switch(field.toUpperCase()){
            case 'NAME':
                return await driver.findElement(this.storName).getText();
            case 'ADDRESS':
                return await driver.findElement(this.storeAddress).getText();
            case 'PHONE':
                return await driver.findElement(this.storePhone).getText();
            case 'OPENHOURS':
                return await driver.findElement(this.storeOpenHours).getText();
            case 'DETAILS':
                return await driver.findElement(this.storeDetailsCTA).getText();
            default:
                console.log('Can not find the field: ' + field);        
        }
    }
}