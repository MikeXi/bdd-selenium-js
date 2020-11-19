const { By } = require('selenium-webdriver');
const common = require('./common');
const { url } = require('../../../config/env');

module.exports = {
    storeLocator: By.className('footer_title-image-link'),
    accountIcon: By.className('menu-item user'),
    remindPopup: By.className('banner-container light'),
    remindClose: By.className('close'),
    menus: By.className('nav-level1_label'),
    logo: By.className('header-bar_logo'),

    hoverOnTopMenu: async function(menuName){
        await common.hoverOnElement(driver.findElement(By.linkText(menuName)));
    },

    clickSubMenu: async function(menuName){
        var staleElement = true; 
        while(staleElement){
            try{
                await driver.findElement(By.linkText(menuName)).click();
                staleElement = false;
            } catch(error){
                staleElement = true;
            }
        }    
    },

    closeRemindPopUp: async function(){
        while(true){
            var banner = await driver.findElement(this.remindPopup);
            if (banner){
                var closeIcon =  await banner.findElement(this.remindClose);
                closeIcon.click();
                break;
            }
        }      
    },

    openBurberrySite: async function(){
        var currentUrl = await common.openURL();
        console.log(currentUrl);
        await common.pageLoadCompleted();
        if(currentUrl != url){
            await driver.findElement(this.logo).click();
            await common.pageLoadCompleted();
        }else{
            await this.closeRemindPopUp();
        }

    }
}