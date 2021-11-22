const fs = require("fs");
var buf = Buffer.alloc(1024);

console.log("Open input.txt file!!!!");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("input.txt open success!!!");

    console.log("truncate input.txt file after 20 bytes");

    fs.ftruncate(fd, 20, (err) => {
        if(err) return console.error(err);

        console.log("input.txt file truncated success!!!");

        console.log("reading input.txt file!!!");

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, dataBuf) => {
            if(err) return console.error(err); //return 안하면 오류처리 안해도 success가 찍힘
            
            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            };

            fs.close(fd, (err) => {
                if(err) return console.error(err);

                console.log("input.txt file closed success!!!")
            });
        });
    });
});