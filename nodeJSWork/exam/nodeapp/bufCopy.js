var buf1 = Buffer.from('abcdefghifjklmn')
var buf2 = Buffer.from("HELLOWORLD")

//buf1의 2번쨰부터 buf2를 copy해서 넣어준다
buf2.copy(buf1, 2);
// buf2.copy(buf1, 2, 0, 5);
// buf1.write('hello world', 2);

console.log(buf1);
console.log(buf1.toString());
