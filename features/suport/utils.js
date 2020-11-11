module.exports = {
    randomString: function(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var idvalue ='';
        var n = 8;
        for (var i = 0;i < n; i++) {
           idvalue += arr[Math.floor(Math.random()*52)];
        }
        return idvalue;
    }
}
