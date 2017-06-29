// calculate time taken by a function to complete

var fs = require('fs');
var EventEmitter = require('events');

class WithTime extends EventEmitter{
  execute(asyncFunc, ...args){
    console.time('execute');
    this.emit('begin');
    asyncFunc(...args,(err,data)=>{
      if(err){
        return this.emit('error',err);
      }
      this.emit('data',data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}
const withTime = new WithTime();

withTime.on('begin',()=> console.log('about to execute'));
withTime.on('end',()=> console.log('done with execute'));
withTime.on('data',(data)=> console.log(data.toString()));

withTime.execute(fs.readFile, __filename);
