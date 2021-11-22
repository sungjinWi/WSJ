const fs = require("fs");

var data = 'Standard Input / Output Streams Libarary Header that defines the standaard input/output stream objects';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');

writerStream.end(); // 다쓰면 마크를 해줘야함

writerStream.on('finish', function () {
    console.log("Finished write file!!!");
});

writerStream.on('error', (err) => {
    console.log(err.stack);
});

console.log("writestream file write finished!!!")