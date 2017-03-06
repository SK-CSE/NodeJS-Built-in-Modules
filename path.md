The `path` module provides utilities for working with file and directory paths
```js
const path = require('path');
```
```js
console.log(__filename); // C:\Users\saurabh\Desktop\path.js
console.log(__dirname); // C:\Users\saurabh\Desktop
```
The `path.dirname()` method returns the directory name of a path same as `__dirname`
```js
console.log(path.dirname(__filename)); // C:\Users\saurabh\Desktop
```
The `path.basename()` methods returns the last portion of a `path`
```js
console.log(path.basename(__filename)); // path.js
console.log(path.basename(__filename,'.js')); // path
console.log(path.basename(__filename,'.html')); // path.js
```
Provides the platform-specific path delimiter
```js
console.log(process.env.PATH)
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'
```
```js
console.log(path.delimiter); // ; for window 
```
```js
console.log(process.env.PATH.split(path.delimiter))
// Returns: ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
```
The `path.extname()` method returns the extension of the `path`
```js
console.log(path.extname(__filename)) // .js
console.log(path.extname('server.html')) // .html
console.log(path.extname('hello.world.md')) // .md
console.log(path.extname('hello.')) // .
console.log(path.extname('hello')) // Returns: ''
console.log(path.extname('.hello')) // Returns: ''
```
The `path.parse()` method returns an object whose properties represent significant elements of the `path`
```js
console.log(path.parse(__filename));
   // output : { root: 'C:\\',
            dir: 'C:\\Users\\OSX\\Desktop',
            base: 'path.js',
            ext: '.js',
            name: 'rough' }
```
The `path.normalize()` method normalizes the given `path`
```js
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\')); // C:\temp\foo\bar\
```
The `path.relative()` method returns the relative path from `from` to `to`
```js
console.log(path.relative('C:\\saurabh\\test\\blabla.js', 'C:\\saurabh\\imp\\foobar.js')); // ..\..\imp\foobar.js
```
The `path.join()` method joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting `path`
```js
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // \foo\bar\baz\asdf
```
The `path.isAbsolute()` method determines if `path` is an absolute `path`
```js
console.log(path.isAbsolute('//server')); // true
console.log(path.isAbsolute('\\\\server')); // true
console.log(path.isAbsolute('C:/foo/..')); // true
console.log(path.isAbsolute('C:\\foo\\..')); // true
console.log(path.isAbsolute('bar\\baz')); // false
console.log(path.isAbsolute('bar/baz')); // false
console.log(path.isAbsolute('.')); // false
```
The `path.posix` property provides access to POSIX specific implementations of the `path` methods
```js
console.log(path.posix);
```
The `path.win32` property provides access to Windows-specific implementations of the `path` methods
```js
console.log(path.win32);
```
Provides the platform-specific path segment separator
```js
console.log(path.sep); // \ for window
console.log('foo\\bar\\baz'.split(path.sep)); // [ 'foo', 'bar', 'baz' ]
```
