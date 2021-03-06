'use strict';

const { exec } = require('child_process');
var fs = require('fs');
let { reportsFolder } = require('../config/report');

module.exports = {
    execute: function(cmd){
        exec(cmd, function(error) {
            if(error){
                console.error(error);
            }
            else{
                console.log('Successfully execute command: ' + cmd);
            }
        });
    },

    createResultFolder: function (){
        if (fs.existsSync(reportsFolder) == false){
            fs.mkdir(reportsFolder,function(err){
                if (err) {
                    return console.error(err);
                }
                console.log("Successfully create reports folder.");
            });
        }
    }
}

