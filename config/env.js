var envFile;
var url;
var userName;
var password;
var env = process.env.NODE_ENV;
// var env = 'qa';

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
userName = envFile.userName;
password = envFile.password;

module.exports = {
    env: env,
    url: url,
    userName: userName,
    password: password
}

