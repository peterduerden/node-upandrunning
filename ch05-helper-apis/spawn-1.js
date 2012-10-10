// Example 5-31. Starting child processes using spawn( )
var cp = require('child_process');
var cat = cp.spawn('CHOICE', ['/M', '"Do you want to quit"']);

cat.stdout.on('data', function(d) {
  console.log(d.toString());
});

cat.on('exit', function() {
  console.log('Thanks, bye!');
});

cat.stdin.write('Y');
cat.stdin.end();