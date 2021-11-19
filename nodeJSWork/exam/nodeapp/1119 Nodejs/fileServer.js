const http = require("http");
const url = require("url");
const fs = require("fs");

var port = 3000;
var strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    var qString = url.parse(req.url, true); //req가 받아온 url을 파싱해
    var fileName = "." + qString.pathname; 

    fs.readFile(fileName, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html; charset-utf8'});
            return res.end("404 Not Found!") //콜백을 리턴하는 것은 나가는 것이다
        };

        res.writeHead(200, {'Content-Type' : 'text/html; charset-utf8'});
        res.write(data); //12번째에서 읽은 data
        return res.end();
    });
});

server.listen(port, strIp, () => {
    console.log(`Running Server at http://${strIp}:${port}`);
});