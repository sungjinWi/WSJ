const express = require("express");
let app = express(); //express에 http가 내장되있다
app.get('/', (req, res) => {
    console.log("Get request for /(root page)!!!");
    res.send('Hello Get /');
});

//액션을 취해야 나타남
app.post('/', function(req, res) { 
    console.log("Got a post request the root page!!!");
    res.send('Hello post /');
});
//액션을 취해야 나타남
app.delete('/del_user', function(req, res) {
    console.log('Get Delete user request for /del_user');
    res.send('Hello DELETE');
});

app.get('/list_user', (req, res) => {
    console.log("Get request for /list_user");
    res.send("User Listing to page");
});

app.get('/ab*cd', (req, res) => {
    console.log("Get request for /ab*cd"); // *은 공백포함한 모든 문자
    res.send("Display pattern matching route");
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server app listening at http://%s:%s", host, port);
});