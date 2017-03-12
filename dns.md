```js
const dns = require('dns');

dns.lookup('google.co.in', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family); // address: "216.58.220.46" family: IPv4

});

dns.resolve4('google.co.in', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`); // addresses: ["216.58.197.46"]

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`); // reverse for 216.58.197.46: ["maa03s20-in-f46.1e100.net","maa03s20-in-f14.1e100.net"]
    });
  });
});
```
