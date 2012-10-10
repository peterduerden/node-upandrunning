//Example 5-25. nextTick( ) continues after other code’s exceptions

process.on('uncaughtException', function(e) {
 console.log(e);
});

process.nextTick(function() {
 console.log('nextTick 1');
});

process.nextTick(function() {
 iAmAMistake();
 console.log('nextTick 2');
});

process.nextTick(function() {
  console.log('nextTick 3');
});

console.log('End of 1st loop');