const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = function() {
    console.log("connection success!!!");

    eventEmitter.emit('data_recieved');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_recieved', function() {
    console.log('data recieved success!!')
});

eventEmitter.emit('connection'); //trigger
//background로 'connection'을 보낸다
console.log("Program finished!!!");

// c++에선 함수를 호출할 때 메모리에 적재하고 실행한다.
//새로운 프로세스를 생성하는 것을 스레드라고 하는데
//스레드라는 개념이 없어서 이벤트를 활용
