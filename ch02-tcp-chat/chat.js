var net = require('net');

var chatServer = net.createServer(),
  clientList = [];

console.log('Starting TCP Chat Server.');

chatServer.on('connection', function(client) {
  client.name = client.remoteAddress + ':' + client.remotePort;
  
  console.log(client.name + ' has joined the chat.');
  client.write('Hi! ' + client.name + '\n');
  
  clientList.push(client);
  
  client.on('data', function(data) {
    console.log(client.name + ' has sent a message.');
    broadcast(data, client);
  });
  
  client.on('end', function() {
    console.log(client.name + ' has left the chat.');
    clientList.splice(clientList.indexOf(client), 1);
  });
  
  client.on('error', function(e) {
    console.log(e);
  });
});

function broadcast(message, client) {
  var cleanup = [];
  
  for(var i=0; i<clientList.length; i+=1) {
    if(client != clientList[i]) {
      if(clientList[i].writable) {
        clientList[i].write(client.name + ' says ' + message);
      } else {
        cleanup.push(clientList[i]);
        clientList[i].destroy();
      }
    }
  }
  
  //Remove dead Nodes out of write loop to avoid trashing loop index
  for(i=0; i<cleanup.length; i+=1) {
    clientList.splice(clientList.indexOf(cleanup[i]), 1);
  }
}

chatServer.listen(9000);

console.log('TCP Chat Server listing on 127.0.0.1:9000...');