//Example 5-14. Calling code when Node is exiting
//process.on('exit', function() {
//  setTimeout(function () {
//    console.log('This will not run');
//  }, 100);
//  console.log('Bye.');
//});

//Example 5-15. Trapping an exception with the uncaughtException event
process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});

setTimeout(function() {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');