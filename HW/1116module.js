exports.multiple = function() {
    var text;
    for (i=0; i<9; i++) {
        text = ""
        for(j=0; j<9; j++) {
            text += (i+1) + " * " + (j+1) + " = " + (i+1)*(j+1) + " ";
        }
        console.log(text);
    }
}