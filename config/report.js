const baseDir = './';
const reports = 'reports/';
fileName = 'cucumber_report';
reportsFolder = baseDir + reports;
jsonFile = reports + fileName + '.json';
output = reports + fileName + '.html';

module.exports = {
    reportsFolder: reportsFolder,
    jsonFile: jsonFile,
    output: output
}
