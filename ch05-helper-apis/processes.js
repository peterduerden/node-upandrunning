//Example 5-14. Calling code when Node is exiting
process.on('exit', function () {
 setTimeout(function () {
  console.log('This will not run');
 }, 100);
 console.log('Bye.');
});