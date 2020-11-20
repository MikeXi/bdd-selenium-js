var envFile;
var url;
var env = process.env.ENV;

switch(env){
    case 'dev' :
        envFile = require('./dev');
        break;
    case 'qa' :
        envFile = require('./qa');
        break; 
    default : 
        console.log('Could not find the environment:' + env);
}

url= envFile.url;

module.exports = {
    env: env,
    url: url,
}

