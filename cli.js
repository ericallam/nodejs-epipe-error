var util = require("util");
var spawn = require("child_process").spawn;

var doSpawn = function(callback){
  var child = spawn('child.js');

  child.stdout.on('data', function(data){
    console.log("Child stdout: " + data);
  });

  child.stderr.on('data', function(data){
    console.log("Child stderr: " + data);
  });

  child.on('exit', function(code){
    callback(code);
  });

  child.stdin.write("ping");
  child.stdin.end();
};


doSpawn(function(code){
  console.log("Child exited with code " + code);
});

