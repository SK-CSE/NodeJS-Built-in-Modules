###File I/O is provided by simple wrappers around standard POSIX functions

Create a file named "input.txt" with some random text where this "fsDemo.js" file exist.
here i use a single file "input.txt"

const fs = require("fs");

Asynchronous read
```js
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
```
Synchronous read
```js
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
```
Asynchronous - Opening File
```js
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");     
});
```
This method will use file descriptor to read the file
```js
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err) {
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if (bytes > 0) {
         console.log(buf.slice(0, bytes).toString());
      }
      
      // Close the opened file.
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("File closed successfully.");
      });
   });
});
```
Get File Information
```js
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err.stack);

   } else {
      console.log(stats);
      console.log("Got file info. successfully!");
       
      // Check file type
      console.log("is File ? " + stats.isFile());
      console.log("is Directory ? " + stats.isDirectory()); 
   }
});
```
overWriting a File or create a new file if not exist
```js
fs.writeFile('newFile.txt','random text inserted', function(err){
  console.log("Going to write into existing file or creating a new file if not exist");
  if (err) {
    return console.error(err);
  } else {
    console.log("Data written successfully in file!");
    console.log("Let's read newly written data from file");
    fs.readFile('newFile.txt', function(err,data){
      if (err) {
        return console.error(err);
      } else {
        console.log("Asynchronous read: " + data.toString());
      }
    });
  }
});
```
Appending data to existing file or create new file
```js
fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) {
      return console.error(err);
   }
  console.log('The "data to append" was appended to file!');
});
```
Deleting file
```js
fs.unlink('input1.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
```
make Directory
```js
fs.mkdir("temp_folder",function(e){
  console.log(e); // e is error if any occur
});
```
Read a Directory
```js
console.log("Going to read directory NodeDocs");
fs.readdir("NodeDocs",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});
```
Deleting Directory
```js
console.log("Going to delete directory temp_folder");
fs.rmdir("temp_folder",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory deleted successfully!");
   
});
```















