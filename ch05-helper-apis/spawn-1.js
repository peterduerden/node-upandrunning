// Example 5-31. Starting child processes using spawn( )
var cp = require('child_process');

// Modified to use Windows CHOICE command as it waits for
// an input like the Unix 'cat' command.
var choice = cp.spawn('CHOICE', ['/M', '"Do you want to quit"']);

choice.stdout.on('data', function(d) {
  console.log(d.toString());
});

choice.on('exit', function() {
  console.log('Thanks, bye!');
});

choice.stdin.write('Y');
choice.stdin.end();