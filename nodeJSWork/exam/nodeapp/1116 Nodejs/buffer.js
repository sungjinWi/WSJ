// var buf = Buffer.from('Abc');

//15바이트의 메모리를 잡을래
// var buf = Buffer.alloc(15, 'a');


var buf = Buffer.allocUnsafe(15); 
buf.fill(10) //초기값 채우기

console.log(buf);