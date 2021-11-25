const express = require("express");
const app = express();

app.set('view engine', 'pug'); //view engine은 pug
app.set('views','./views'); //views는 ./views 폴더에 연결


const host = '127.0.0.1';
const port = 3000;

app.get('/firsttemp', (req, res) => {
    res.render('firstview');
});

app.get('/dynamic_view', (req, res) =>{
    res.render('dynamic', {
        name:"K-Digital for class",
        url:"https://www.naver.com/"
    });
});

app.get('/dynamic_view2', (req, res) =>{
    res.render('dynamic2', {
        name:"Apple home page",
        url:"https://www.apple.com/"
    });
});

app.get('/hi', (req, res) => {
    res.render('hifriend', { //그냥 오브젝트 주는것
        user : {name: "Michael", age:20}
    });
});

app.get('/components', (req, res) => {
    res.render('content');
})

app.listen(port, host, () => {
    console.log(`Index application running at http://${host}:${port}/`);
});