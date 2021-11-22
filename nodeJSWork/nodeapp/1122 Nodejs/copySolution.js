const fs = require("fs");
var buf = Buffer.alloc(20480);

var pos = 0; // file position moving check 파일을 얘기할때
// 오프셋은 메모리를 얘기할 때
var remainSize = 0; // remain file size
var srcFileName = '';
var destFileName = '';
var bOpenedRead = false; //b는 불린
var bOpenedWrite = false;
var percent = '';

fs.readdir("./source", (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        if("metalica_seattle.mp4" === file) {
            srcFileName = "./source/" + file;
            destFileName = "./target/" + file;
            fs.stat(srcFileName, (err, stats) => {
                if(err) return console.error(err);

                remainSize = stats.size;
                console.log("fileName =" + srcFileName + ", remainSize = " + remainSize);

                var rfd = fs.openSync(srcFileName, 'r'); //콜바이 밸류
                bOpenedRead = true;
                var wfd = fs.openSync(destFileName, 'a');
                bOpenedWrite = true;

                var readBytes = 0;
                while(true) {
                    readBytes = fs.readSync(rfd, buf, 0, buf.length, pos); //포지션을 변수로 놓은것은 움직일 것이라고 설계한것
                    // readSync를 통해 읽은 값이 buf에 들어가는데 이를 콜바이 레퍼런스라 한다 -> 메모리
                    // 콜바이 밸류는 아규먼트의 값을 쓰고 나면 이후에 쓸수 없다 ?? -> 값만 넘긴다
                    // 콜바이 레퍼런스는 주소값을 넘겨주기 때문에 값을 주소에 고스란히 가지고 있어서 가져다 쓸 수 있다 메모리 참조
                    if(remainSize > buf.length) {
                        fs.writeSync(wfd, buf, 0, buf.length);
                        remainSize -= readBytes;
                        pos += readBytes;
                        percent = parseInt((stats.size - reminSize) / stats.size * 100) + '%'
                    }
                    else {
                        fs.writeSync(wfd, buf, 0, readBytes);

                        if(bOpenedRead == true) {
                            fs.closeSync(rfd);
                            bOpenedRead = false;
                        }
                        if(bOpenedWrite == true) {
                            fs.closeSync(wfd);
                            bOpenedWrite = false
                        }
                        break; // while문 나가기위해
                    }
                }
            });
        }
        return false; // break은 안먹힌다 else 일때 return false
    });
});
// 동기로 해야하는 이유는 닫기도 전에 열 수 있기 때문에 너무 많은 파일이 열렸다고 오류가 뜨게됨