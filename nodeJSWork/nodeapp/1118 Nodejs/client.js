const http = require("http");

// Option to be used by request
var options = {
    host: 'localhost',
    port: '3000',
    path: '/helloworld.html'
}

var callback = function(response) {
    var body = '';
    response.on('data', function(data) { //data는 path helloworld에 있다
        body += data;
    });

    response.on('end', () => { //data 받은게 끝나면
        console.log(body); //찍어
    });
}

var req = http.request(options, callback);
req.end(); 