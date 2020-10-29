'use strict';

var executor = require('./executor');

executor.createResultFolder();
executor.execute('.\\node_modules\\.bin\\cucumber-js -f json:reports\\cucumber_report.json');