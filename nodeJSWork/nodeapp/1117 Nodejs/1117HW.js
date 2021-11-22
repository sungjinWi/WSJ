const fileSystem = require("fs");
var buf = Buffer.alloc(1024);


gugu = () => {
    let text = ""
    for(i=0; i<9; i++) {
        for(j=0; j<9; j++) {
            if((i+1)*(j+1)>9){text += (i+1) + " * " + (j+1) + " = " + (i+1)*(j+1) + " ";}
            else{text += (i+1) + " * " + (j+1) + " =  " + (i+1)*(j+1) + " ";}
        }
        text += "\n";
    }
    return text;
}

console.log("Open existing 1117text.txt file!!!");
fileSystem.open('1117text.txt', 'w+', (err, fd, bf) => {
    if(err) return console.error(err);

    console.log("text.txt open success!!!");

    console.log("Writing 1117text.txt file")
    fileSystem.write(fd, gugu(), (err, written, str) => {
        if(err) return console.error(err);

        console.log("1117text.txt Writing success!!!")
    
        console.log("Reading 1117text.txt file!!!");
    
        fileSystem.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if(err) return console.error(err);

            console.log("1117text.txt reading success!!!!");
            if(bytes > 0) console.log(buf.slice(0, bytes).toString());

            fileSystem.close(fd, (err) => {
                if(err) return console.log(err);

                console.log("1117text.txt file closed success!!!");
            })
    
    
        });
    });
});