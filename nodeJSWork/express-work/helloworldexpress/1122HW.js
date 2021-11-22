var fs = require("fs");
var buf = Buffer.alloc(5);
var remainSize = 0;
var pos = 0;
var srcFileName = '';
var desFileName = '';
buf.fill(0)
console.log(buf);
fs.readdir("./source/", (err, files) =>{
    if(err) throw err;
    console.log(files);

    files.forEach((file)=>{ 
        
        console.log(file);
        srcFileName = "./source/" + file;
        desFileName = "./target/" + file;
        remainSize = fs.statSync(srcFileName).size;
        console.log(remainSize);

        var rfd = fs.openSync(srcFileName, 'r');
        var wfd = fs.openSync(desFileName, 'a');
        
        pos = 0;
        var readBytes = 0;
        while(true) {
            readBytes = fs.readSync(rfd, buf, 0, buf.length, pos);
            if(remainSize > buf.length){
                fs.writeSync(wfd, buf, 0, buf.length);
                pos += readBytes;
                remainSize -= readBytes;
                console.log(file)
            }
            else {
                fs.writeSync(wfd, buf, 0, readBytes);
                fs.closeSync(rfd);
                fs.closeSync(wfd);
                break;
            };
        };
    });
});

// 이미지, 동영상은 비손실 압축