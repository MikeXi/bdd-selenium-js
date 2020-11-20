'use strict';

var executor = require('./executor');
var { jsonFile }= require('../config/report');

var argv = require('minimist')(process.argv.slice(2));
var user = argv.u.split(':')
var userName = user[0];
var password = user[1];

var cmd;
var features = 'features/yandex/login features/yandex/mail features/yandex/account';
var parameters = ' --world-parameters "{\\\"userName\\\":\\\"' + userName +'\\\",\\\"password\\\":\\\"' + password + '\\\"}"'

if(argv.t !== undefined){
    var tag = argv.t;
    cmd = '.\\node_modules\\.bin\\cucumber-js ' + features + ' --tags @' + tag + ' -f json:' + jsonFile + parameters;
}
else{
    cmd = '.\\node_modules\\.bin\\cucumber-js ' + features + ' -f json:' + jsonFile + parameters;
}

executor.createResultFolder();
executor.execute(cmd);
