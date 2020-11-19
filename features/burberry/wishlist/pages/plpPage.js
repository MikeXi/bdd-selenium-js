const { By } = require('selenium-webdriver');

module.exports = {
    breadcrumbLocator: By.className('breadcrumb_item breadcrumb_item-label'),
    wishListIcon: By.className('product_wishlist_icon has-xlabel'),
    favoriteItems: By.className('favorite-items'),
    favoriteCote: By.css('a[href="/animalia-print-silk-scarf-detail-cotton-car-coat-p45645911"]'),

    addToWishList: async function(productName){
        var product = await driver.findElement(By.css('div[data-product-name="' + productName + '"]'));
        await product.findElement(this.wishListIcon).click();
        await driver.sleep(6000);
    },

    findFavoritesInMyAccountDropdown: async function(favoriteItem){
        var product = await driver.findElement(By.linkText(favoriteItem));
        var itemhref = await product.getAttribute('href');
        var splitedItem = itemhref.split('?')
        var itempart = splitedItem[0].split('/');
        var favorites =  await driver.findElement(this.favoriteItems);
        return await favorites.findElement(By.css('a[href="/' + itempart[3] + '"]')).isDisplayed();
    }
}