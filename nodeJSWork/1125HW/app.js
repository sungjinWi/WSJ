const express = require("express");
const app = express();

const host = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send("Creating server");
});

app.listen(port, host, () => {
    console.log(`Application server running at http://${host}:${port}/`)
});