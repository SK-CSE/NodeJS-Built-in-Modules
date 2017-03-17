The `process` object is a global that provides information about, and control over, the current Node.js process
```js
console.log(process.cwd()); // The process.cwd() method returns the current working directory of the Node.js process
console.log(process.env); // The process.env property returns an object containing the user environment
console.log(process.cpuUsage()); // The process.cpuUsage() method returns the user and system CPU time usage of the current process
console.log(process.config); // The process.config property returns an Object containing the JavaScript representation of the configure options used to compile the current Node.js executable
console.log(process.connected); // If the Node.js process is spawned with an IPC channel, the process.connected property will return true
console.log(process.platform); // The process.platform property returns a string identifying the operating system platform on which the Node.js process is running
console.log(process.argv); // The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched
console.log(process.argv0); // The process.argv0 property stores a read-only copy of the original value of argv[0] passed when Node.js starts
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```
