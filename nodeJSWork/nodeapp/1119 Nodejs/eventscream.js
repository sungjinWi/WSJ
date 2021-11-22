const events = require("events");
const eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log("I hear a scream");
};

eventEmitter.on('scream', myEventHandler); // 이벤트핸들러 등록

eventEmitter.emit('scream');