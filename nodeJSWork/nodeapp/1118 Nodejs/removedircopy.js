const fs = require("fs");

console.log("Remove files first!!!");
fs.readdir('.temp/hellodir', (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        // fs.unlink('.temp/hellodir/'+file, (err) => {
        fs.unlink(`.temp/hellodir/${file}`, (err) => {
            if(err) throw err;
        });
    });

    fs.rmdir('./temp/hellodir'), (err) => {
        if(err) throw err;
    };
});

//if문으로 다시 해보기