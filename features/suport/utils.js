var chromeDriver = require('../../driver/chrome');
var ieDriver = require('../../driver/ie');
var edgeDriver = require('../../driver/edge');
var firefoxDriver = require('../../driver/firefox');
var safariDriver = require('../../driver/safari');

module.exports = {
    randomString: function(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var idvalue ='';
        var n = 8;
        for (var i = 0;i < n; i++) {
           idvalue += arr[Math.floor(Math.random()*52)];
        }
        return idvalue;
    },

    getDriver: function(){
        var driver;
        var browser = process.env.BROWSER;

        switch(browser){
            case('chrome'):
                driver = new chromeDriver();
                break;
            case('ie'):
                driver = new ieDriver();
                break;
            case('edge'):
                driver = new edgeDriver();
                break;
            case('firefox'):
                driver = new firefoxDriver();
                break;
            case('safari'):
                driver = new safariDriver();
                break;
        } 
        return driver;
    }
}
