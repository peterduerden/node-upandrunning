//Example 5-27. Calling ls with exec( )

var cp = require('child_process');

cp.exec('dir /B', function(e, stdout, stderr) {
  if(!e) {
    console.log(stdout);
    console.log(stderr);
  }
});