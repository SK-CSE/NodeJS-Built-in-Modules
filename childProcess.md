###The child_process module provides the ability to spawn child processes

using fork()
```js
//server.js
const http = require('http');
const cp = require('child_process');
const server = http.createServer();

server.on('request',(req,res)=>{
	if(req.url ==='/compute'){
		const compute = cp.fork('client.js');
		compute.send('start');
		compute.on('message',(sum)=>{
			res.end(`sum is ${sum}`);
		})
	}else{
		res.end(`ok`);
	}
})
server.listen(3000,(err)=>{
	console.log('server start on 3000');
})

//client.js
const longComputation = () =>{
	let sum =0;
	for (let i=0 ;i < 1e9; i++){
		sum =+i;
	}
	return sum;
};

process.on('message',(msg)=>{
	const sum = longComputation();
	process.send(sum);
})
```

running ls -lh /usr on spawn()

```js
const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```
run `ps ax | grep ssh`
```js
const spawn = require('child_process').spawn;
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.log(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.log(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```
