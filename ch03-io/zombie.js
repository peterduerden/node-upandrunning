var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

var rssWarn = (50 * 1024 * 1024),
  heapWarn = (50 * 1024 * 1024);
  
var workers = {};

if (cluster.isMaster) {
  
  for (var i=0; i<numCPUs; i++) {
    createWorker();
  }
  setInterval( function() {
    var time = new Date().getTime();
    for (workerProcessId in workers) {
      if (workers.hasOwnProperty(workerProcessId) && workers[workerProcessId].lastCb + 5000 < time) {
        console.log('Long running worker ' + workerProcessId + ' killed');
        workers[workerProcessId].worker.destroy();
        delete workers[workerProcessId];
        createWorker();
      }
    }
  }, 1000);
  
} else {
  //Server
  http.Server(function(req,res) {
    //mess up 1 in 10 reqs
    if (Math.floor(Math.random() * 10) === 4) {
      console.log('Stopped ' + process.pid + ' from ever finishing');
      while(true) {
        continue;
      }
    } 
    res.writeHead(200);
    res.end('hello world from ' + process.pid + '\n')
  }).listen(8000);
  
  //Report stats once a second
  setInterval(function report() {
    process.send({cmd: "reportMem", memory: process.memoryUsage(), process: process.pid})
  }, 1000);
}

function createWorker() {
  var worker = cluster.fork();
  console.log('Created worker: ' + worker.process.pid);
  
  //allow boot time
  workers[worker.process.pid] = {
    worker:worker,
    lastCb: new Date().getTime() - 1000
  };
  
  console.log(workers);

  worker.on('message', function(m) {
    if (m.cmd === "reportMem") {
      //console.log(m);
      workers[m.process].lastCb = new Date().getTime();
      if (m.memory.rss > rssWarn) {
        console.log('Worker ' + m.process + ' using too much memory.') }
      }
  });
}