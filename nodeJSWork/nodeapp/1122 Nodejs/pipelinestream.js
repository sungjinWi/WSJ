const fs = require("fs"); //single quotation도 되고 double quotation도 된다 C++에서 한글은 캐릭터가 아니라 스트링

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream('output.txt');
// var readerStream = fs.createReadStream("metallica_seattle.mp4");
// var writerStream = fs.createWriteStream('seattle.mp4');

readerStream.pipe(writerStream);

console.log("Write pipe stream finished!!!");