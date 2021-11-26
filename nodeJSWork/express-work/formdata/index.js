const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

let upload = multer();
let app = express();

const host = '127.0.0.1';
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('form');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
//true라고 하면 query String 을 qs를 쓸것이다

app.use(upload.array());
app.use(express.static('public'));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("recieved request");
});

app.listen(port, host, () => {
    console.log(`Application Server running at http://${host}:${port}`);
});