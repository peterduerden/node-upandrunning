//Example 5-19. Catching signals to the Node process
//Start reading from stdin so we don't exit.
process.stdin.resume();

process.on('SIGINT', function() {
  console.log('Got SIGINT. Press Control-D to exit.');
});

//Mmmm... this doesn't seem to work?