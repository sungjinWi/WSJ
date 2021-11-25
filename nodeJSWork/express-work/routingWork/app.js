const express = require("express");
const app = express();
console.log

const host = '127.0.0.1'; //localhost
const port = 3000;

app.get('/:id', (req, res) => {
    res.send("The id is : " + req.params.id);
});

app.get('/hello/:name/:id', (req, res) =>{
    res.send('id : ' + req.params.id + ' name : ' + req.params.name);
})


app.get('/helloworld/:id([0-9]{5})/:name([a-z]{5})', (req, res) =>{ // id가 0부터 9까지 숫자, name은 a부터 z까지 받을거고 5개일때만 받을래
    res.send('id: ' + req.params.id + ' name: ' + req.params.name);
}); 

app.listen(port, host, () => {
    console.log(`Application Server running at http://${host}:${port}/`);
});