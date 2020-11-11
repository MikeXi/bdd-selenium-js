'use strict';

var executor = require('./executor');
var { jsonFile }= require('../config/report');
var cmd;

if(process.argv.length == 3){
    var tag = process.argv[2];
    cmd = '.\\node_modules\\.bin\\cucumber-js --tags @' + tag + ' -f json:' + jsonFile;
}
else{
    cmd = '.\\node_modules\\.bin\\cucumber-js -f json:' + jsonFile;
}

executor.createResultFolder();
executor.execute(cmd);