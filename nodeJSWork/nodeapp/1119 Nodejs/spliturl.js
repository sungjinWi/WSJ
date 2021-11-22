const http = require("http");
const url = require("url");

const port = 3000;
const strIp = '127.0.0.1';

//이렇게 서버하는걸 습관들여야 listen해서 할 수 있다
var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset-utf8'});
    var strQuery = url.parse(req.url, true).query;//request에서 받은 url을 parsing해서
    var text = strQuery.year + " " + strQuery.month;
    res.end(text);
});

server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`);
});
//http://localhost:3000/?year=2021&month=10
// 물음표는 왜 붙을까요