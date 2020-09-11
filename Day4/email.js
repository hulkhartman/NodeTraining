const EventEmitter = require('events');
const emitter = new EventEmitter();

function sendEmail(){
    emitter.emit("emailSent","Email sent sucessfully!");
}

module.exports.emitter = emitter;
module.exports.sendEmail = sendEmail;