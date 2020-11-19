'use strict';

var executor = require('./executor');
var { jsonFile }= require('../config/report');
var argv = require('minimist')(process.argv.slice(2));
global.userName = argv.u;
global.password = argv.p;

var cmd;
var features = 'features/yandex/login features/yandex/mail features/yandex/account';

if(argv.t !== undefined){
    var tag = argv.t;
    cmd = '.\\node_modules\\.bin\\cucumber-js ' + features + ' --tags @' + tag + ' -f json:' + jsonFile;
}
else{
    cmd = '.\\node_modules\\.bin\\cucumber-js -f json:' + jsonFile;
}

executor.createResultFolder();
executor.execute(cmd);
