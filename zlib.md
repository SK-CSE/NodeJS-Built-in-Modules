The `zlib` module provides compression functionality implemented using `Gzip` and Deflate/Inflate
```js
const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('bla.js');
const out = fs.createWriteStream('bla.js.gz');

inp.pipe(gzip).pipe(out);
```
It is also possible to compress or decompress data in a single step:
```js
const zlib = require('zlib');
const input = 'Saurabh';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    // handle error
  }
});

const buffer = Buffer.from('eJwLTiwtSkzKAAAK8gLH', 'base64');
zlib.unzip(buffer, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString());
  } else {
    // handle error
  }
});
```
