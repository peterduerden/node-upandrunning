// Example 5-30. Setting a timeout on process.exec() calls

var cp = require('child_process');

var child = cp.exec('FOR /L %A IN (1, 1, 1000000) DO ECHO %A',
  {timeout:500, killSignal:'SIGKILL'},
  function(e, stdout, stderr) {
    console.log(e);
});