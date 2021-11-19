const http = require('http');// 왜 일부러 이렇게 하신걸까
const fs = require("fs");
const url = require("url");

var port = 3000;
var strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname; //req 안에는 url이 들었다

    console.log("request for " + pathName + "received!!!");
    fs.readFile(pathName.substr(1), (err, data) => {
        if (err) {
            console.error(err);
            //HTTP Status : 404 : NOT FOUND
            // Content Type : text/plain
            res.writeHead(404, {'Content-Type' : 'text/html; charset-utf8'});
            //writeHead(200)은 정상
        }
        else {
            //HTTP Status : 200 : OK
            res.writeHead(200, {'Content-Type' : 'text/html; charset-utf8'})
            res.write(data.toString());
        }

        //Send the response first
        res.end();
    });
});

server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`);
});