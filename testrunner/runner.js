'use strict';

var executor = require('./executor');
var { jsonFile }= require('../config/report');
var argv = require('minimist')(process.argv.slice(2));

var cmd;

if(argv.t !== undefined){
    var tag = argv.t;
    cmd = '.\\node_modules\\.bin\\cucumber-js --tags @' + tag + ' -f json:' + jsonFile;
}
else{
    cmd = '.\\node_modules\\.bin\\cucumber-js -f json:' + jsonFile;
}

executor.createResultFolder();
executor.execute(cmd);
