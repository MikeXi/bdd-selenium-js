'use strict';

var exec = require('child_process').exec;
var fs = require('fs')
var reportsFolder = './reports'

exports.execute = function(cmd){
	
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log('Successfully execute command: ' + cmd);
        }
    });
	
}

exports.createResultFolder = function (){
    if (fs.existsSync(reportsFolder) == false){
        fs.mkdir(reportsFolder,function(err){
            if (err) {
                return console.error(err);    
            }    
            console.log("Successfully create reports folder.");    
        });
    }
}


