//Example 5-25. nextTick( ) continues after other code’s exceptions

process.on('uncaughtException', function(e) {
 console.log(e);
});

process.nextTick(function() {
 console.log('tick');
});

process.nextTick(function() {
 iAmAMistake();
 console.log('tock');
});