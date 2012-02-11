var express = require("express");
var util = require("util");
var spawn = require("child_process").spawn;

var app = express.createServer();

var doSpawn = function(callback){
  var child = spawn('child.js');
  var stdout = '';
  child.stdout.on('data', function(){
    if (!!data) stdout += data;
  });
  child.on('exit', function(code){
    callback(code);
  });

  child.stdin.write("ping");
  child.stdin.end();
};

app.configure(function(){
  app.use(app.router);
});

app.get('/ping', function(req, res) {
  console.log("Pinging...");
  
  doSpawn(function(code){
    res.send({"child-exit-code": code}, {'Content-Type': 'application/json'}, 200);
  });

});

var port = process.env.PORT || 8081;
var cluster = require('cluster');

if(process.argv[2] == "cluster") {
  if(cluster.isMaster){
    cluster.fork()
    cluster.fork()

    cluster.on('death', function(worker){
      console.log("worker " + worker.pid + " died");
    });
  } else {
    console.log("Express server listening on port %d", port);
    app.listen(port);
  }
}else{
  console.log("Express server listening on port %d", port);
  app.listen(port);
}

