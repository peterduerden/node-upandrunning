var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.id + ' exited');
    // Fork replacement process
    cluster.fork();
  });
  
  cluster.on('fork', function(worker) {
    console.log('worker ' + worker.id + ' forked');
  });
  
} else {
  // Worker processes have a http server.
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("hello world");
  }).listen(8000);
}