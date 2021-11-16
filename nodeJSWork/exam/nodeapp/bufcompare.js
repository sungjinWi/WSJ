var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
var x = Buffer.compare(buf1, buf2);

console.log(x);

var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var x = Burffer.compare(buf1, buf2);


var x = Buffer.compare(buf2, buf1);
console.log(x);

//==================================================

varbuf1 = Buffer.from('b');
varbuf2 = Buffer.from('c');
varbuf3 = Buffer.from('a');
var arr = [buf1, buf2, buf3];

console.log(arr);
console.log("======================")
console.log(arr.sort(Buffer.compare));