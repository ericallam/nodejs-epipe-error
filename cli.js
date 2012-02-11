var util = require("util");
var spawn = require("child_process").spawn;

var doSpawn = function(callback){
  var child = spawn('child.js');

  child.on('exit', function(code){
    console.log("Child exited with code " + code);
  });

  child.stdin.write("ping");
  child.stdin.end();
};


doSpawn();

setTimeout(function(){}, 10000);

