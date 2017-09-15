var questions = [
	"what is your name ?",
	"where are you from ?",
	"how old are you ?"
];

var answer = [];

function ask(i){
	process.stdout.write(`\n\n\n ${questions[i]}`);
	process.stdout.write(`\n\ > `);
}

process.stdin.on('data',(data) =>{
	answer.push(data.toString().trim());

	if(answer.length < questions.length){
		ask(answer.length);
	}else{
		process.exit();
	}
});

process.on('exit',()=>{
	process.stdout.write('\n\n\n');
	process.stdout.write(`your name is ${answer[0]}, you are ${answer[2]} and you are from ${answer[1]}`);
	process.stdout.write('\n\n\n');
})

ask(0);
