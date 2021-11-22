const fs = require("fs");

var data = '';

var readStream = fs.createReadStream('input.txt'); // default로 읽어오는 바이트수가 있을텐데
readStream.setEncoding('utf-8');

readStream.on('data', function(chunk) {
    data += chunk; //파일이 크면 뒤에다가 붙여주는거야
});

readStream.on('end', () => {
    console.log(data);
});

readStream.on('error', (err) => {
    console.log(err.stack); //각각 사용하는 object마다 err형태가 다를 것이다
});

console.log("ReadStream file read finished!!!")