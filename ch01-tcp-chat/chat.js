var net = require('net'),
  chatServer = net.createServer();

console.log('Starting TCP Chat Server...');

chatServer.on('connection', function(client) {
  client.write('Hi!\n');
  
  client.on('data', function(data) {
    console.log(data);
  });
});

chatServer.listen(9000);

console.log('TCP Chat Server listing on 127.0.0.1:9000...');