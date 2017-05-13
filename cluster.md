The cluster module allows you to easily create child processes that all share server ports
```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection, In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```
// server.js

```js
const http = require('http');
const pid = process.pid;

http.createServer((req,res)=>{
	for (let i=0 ;i < 1e7; i++); // simulate CPU work
		res.end(`handled by process ${pid}`);
}).listen(3000,(err)=>{
	console.log('server start on 3000');
	console.log(`started process ${pid}`);

})
```
// cluster.js
```js
const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
	const cpus = os.cpus().length;
	console.log(`Forking for ${cpus} CPU`);
	for(let i =0; i<cpus;i++){
		cluster.fork();
	} 
}else{
	require(`./server`);
}
```
