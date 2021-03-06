'use strict';

let data = 'stackabuse.com';
let buff = new Buffer.from(data);
console.log(buff)
let ndata = JSON.stringify(buff);
ndata = JSON.parse(ndata);
console.log(ndata)
let dat = new Buffer.from(ndata.data)
console.log(dat)
let base64dat = dat.toString('base64');
console.log(base64dat)
let base64data = buff.toString('base64');

console.log('"' + data + '" converted to Base64 is "' + base64data + '"');