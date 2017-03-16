The `net` module provides you with an asynchronous network wrapper. It contains functions for creating both servers and clients (called streams)
```js
var net = require('net');
var server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab a random port.
server.listen(() => {
  console.log('opened server on', server.address());
});
```
