var buf = Buffer.from('abcd');

for(x of buf.entries()) {
    console.log(x);
}
// for x of ;; x 하나씩 꺼내는 것이다
// entries 하면 index와 값을 모두 꺼내온다

console.log("=================================")
for(x of buf.keys()) {
    console.log(x);
}

console.log("=================================")
for(x of buf.values()) {
    console.log(x);
}