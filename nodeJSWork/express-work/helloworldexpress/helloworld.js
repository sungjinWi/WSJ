const express = require("express");
const app = express(); // 여기서 createServer가 되는것이다

app.get('/', (req, res) => {
    res.end('Hello World')
});

app.get('/hellodir', (req, res) => {
    res.end('Hello dir')
}); // 라우팅 기능

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});