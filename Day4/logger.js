const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message){
    emitter.emit("messageLogged", message)
};

module.exports.emitter = emitter;
module.exports.log = log;