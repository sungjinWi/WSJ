const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const host = '127.0.0.1';
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'express').send('cookie set');
    // res.cookie(name, 'express', {expire: 360000 + Date.now()});
});

app.get('/home', (req, res) =>{
    res.send("Cookie alive?")
})

app.get('/clear', (req, res) => {
    res.clearCookie('name', 'express');
    res.send('cookie express cleared');
})

app.listen(port, host, () => {
    console.log(`Application Server running at http://${host}:${port}/`)
});