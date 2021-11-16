var buf = Buffer.from('Hello, and welcome to Hell!');
var x = "abc"


console.log(buf.toString('ascii'));
console.log(buf.toJSON());
console.log("=========================================")

console.log(buf.includes('welcome'));
//눈에 보이기는 welcome 스트링이지만 버퍼안에서는 이진수이다
console.log("=========================================")

console.log(buf.indexOf('welcome'));
//제일 첫번째 인덱스를 뽑아낸다
console.log("=========================================")

console.log(buf.indexOf('l'));
//마지막 인덱스를 뽑아낸다
console.log(buf.lastIndexOf('l'));
console.log("=========================================")

console.log("buf length =" + buf.length) //함수가 아니라 ㅁㅁ이다
console.log("=========================================")

console.log(Buffer.isBuffer(buf));
console.log(Buffer.isBuffer(x));
console.log("=========================================")

console.log(Buffer.isEncoding('ascii'));