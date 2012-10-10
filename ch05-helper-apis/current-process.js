// Interacting with the current Node process (page 90)
console.log(process.version);
console.log(process.installPrefix); //undefined?
console.log(process.platform);
console.log(process.uptime());
if (process.hasOwnProperty('getgid')) {
  // http://nodejs.org/api/process.html#process_process_getgid
  // Note: this function is only available on POSIX platforms (i.e. not Windows)
  console.log(process.getgid());
} else {
  console.log('getgid() not available.')
}
if (process.hasOwnProperty('getuid')) {
  // http://nodejs.org/api/process.html#process_process_getuid
  // Note: this function is only available on POSIX platforms (i.e. not Windows)
  console.log(process.getuid());
} else {
  console.log('getuid() not available.')
}
console.log(process.pid);
console.log(process.title);
console.log(process.execPath);
console.log(process.cwd());
console.log(process.memoryUsage());