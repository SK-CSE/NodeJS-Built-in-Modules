
//cluster.js
const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
	const cpus = os.cpus().length;
	console.log(`Forking for ${cpus} CPU`);
	for(let i =0; i<cpus;i++){
		cluster.fork();
	} 
	console.log(`Master PID : ${process.pid}`);

	process.on('SIGUSR2',()=>{
		const workers = Object.values(cluster.workers);
		const restartWorker = (workerIndex) => {
			const worker = workers[workerIndex];
			if(!worker) return;
			worker.on('exit',()=>{
				if(!worker.exitedAfterDisconnect) return;

				console.log(`Exited process ${worker.process.pid}`);

				cluster.fork().on('listening',() =>{
					restartWorker(workerIndex+1);
				
				});
			});
			worker.disconnect();
		};
		restartWorker(0);
	});

}else{
	require(`./server`);
}

//server.js
const http = require('http');
const pid = process.pid;

http.createServer((req,res)=>{
	for (let i=0 ;i < 1e7; i++); // simulate CPU work
		res.end(`handled by process ${pid}`);
}).listen(3000,(err)=>{
	console.log('server start on 3000');
	console.log(`started process ${pid}`);

});
