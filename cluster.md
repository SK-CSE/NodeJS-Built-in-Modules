The cluster module allows you to easily create child processes that all share server ports
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
broadcasting message to all workers
```js
// client.js
const cluster = require('cluster');
const os = require('os');

 //*** mock DB
  const numberOfUsersInDB = function(){
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
  }
  //****

if(cluster.isMaster){
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPU`);
  for(let i =0; i<cpus;i++){
    cluster.fork();
  } 

const updateWorkers = () => {
  const userCount = numberOfUsersInDB();
  Object.values(cluster.workers).forEach((worker)=>{
    worker.send({userCount})
  })
}
updateWorkers();
setInterval(updateWorkers,10000);

  // console.dir(cluster.workers,{depth:0});
  /*Object.values(cluster.workers).forEach((worker)=>{
    worker.send(`Hello worker ${worker.id}`)
  })*/
}else{
  require(`./server`);
}

//server.js
const http = require('http');
const pid = process.pid;

let userCount;

http.createServer((req,res)=>{
  for (let i=0 ;i < 1e7; i++); // simulate CPU work
    res.write(`handled by process ${pid}\n`);
  	res.end(`users :  ${userCount}`)
}).listen(3000,(err)=>{
  console.log('server start on 3000');
  console.log(`started process ${pid}`);
});

process.on('message',msg => {
  userCount : msg.userCount;
});
