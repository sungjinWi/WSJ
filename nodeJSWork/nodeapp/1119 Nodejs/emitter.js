const events = require("events");
const { EventEmitter } = require("stream");
const eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listener1 executed!!!!");
}
//function listener1 꼭 써야하나

var listener2 = function listener2() {
    console.log("listener2 executed!!!!");
}

var listener3 = function listener3() {
    console.log("listener3 executed!!!!");
}

// Bind the connection event with the listener1
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);
eventEmitter.on('connection', listener3);

var eventListener = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event!!!!");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener2);

console.log("Listener2 will be removed");;

eventListener = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event!!!!");

eventEmitter.emit('connection');

console.log("Finished Program!!!")
