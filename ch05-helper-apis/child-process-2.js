// Example 5-28. Default options object for child_process.exec()
var options = { encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: 'SIGTERM',
  setsid: false,
  cwd: null,
  env: null
};

var cp = require('child_process');

// Example 5-29. Restricting the Buffer size on child_process.exec() calls
cp.exec('dir /B', {maxBuffer:1}, function(e, stdout, stderr) {
  if(!e) {
    console.log(stdout);
    console.log(stderr);
  } else {
    console.log(e);
  }
});

// Result:
// [Error: maxBuffer exceeded.]