The `os` module provides a number of operating system-related utility methods
```js
const os = require('os');
console.log(os.EOL); // A string constant defining the operating system-specific end-of-line marker
console.log(os.arch()); // The os.arch() method returns a string identifying the operating system CPU architecture
console.log(os.constants); // Returns an object containing commonly used operating system specific constants for error codes, process signals, and so on
console.log(os.endianness()); // The os.endianness() method returns a string identifying the endianness of the CPU
console.log(os.freemem()); // The os.freemem() method returns the amount of free system memory in bytes as an integer
console.log(os.homedir()); // The os.homedir() method returns the home directory of the current user as a string
console.log(os.hostname()); // The os.hostname() method returns the hostname of the operating system as a string
console.log(os.loadavg()); // The os.loadavg() method returns an array containing the 1, 5, and 15 minute load averages
console.log(os.platform()); // The os.platform() method returns a string identifying the operating system platform
console.log(os.release()); // The os.release() method returns a string identifying the operating system release
console.log(os.tmpdir()); // The os.tmpdir() method returns a string specifying the operating system's default directory for temporary files
console.log(os.totalmem()); // The os.totalmem() method returns the total amount of system memory in bytes as an integer.
console.log(os.type()); // The os.type() method returns a string identifying the operating system name
console.log(os.uptime()); // The os.uptime() method returns the system uptime in number of seconds
console.log(os.userInfo()); // The os.userInfo() method returns information about the currently effective user
console.log(os.networkInterfaces()); // The os.networkInterfaces() method returns an object containing only network interfaces that have been assigned a network address
console.log(os.cpus()); // The `os.cpus()` method returns an array of objects containing information about each CPU/core installed
```
