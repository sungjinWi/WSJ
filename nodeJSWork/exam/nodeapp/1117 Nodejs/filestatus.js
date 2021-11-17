var fs = require("fs");

console.log("Get file information");
fs.stat('input.txt', (err, stat) => {
    if(err) return console.error(err);

    console.log(stat);
    console.log("get file information success!!");

    console.log("isFile ? " + stat.isFile());
    console.log("isDirectory ? " + stat.isDirectory());
});

console.log()