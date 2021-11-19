const fs = require("fs");

fs.rename('lorem.txt', 'hello.txt', (err) => {
    if(err) throw err; //console.error(err) 대신

    console.log('File rename success!!!');
});