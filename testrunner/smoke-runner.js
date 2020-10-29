'use strict';

var executor = require('./executor');

executor.createResultFolder();
executor.execute('.\\node_modules\\.bin\\cucumber-js --tags @smoke -f json:reports\\cucumber_report.json');