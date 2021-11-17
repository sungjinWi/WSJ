var http = require("http")
var dt = require('./myfirstnodemodule')
const homePage = '127.0.0.1';
const port = 3001;

const server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
});

console.log

server.listen(port, homePage, () => {
    console.log(`Server running at http://${homePage}:${port}/`)
})
