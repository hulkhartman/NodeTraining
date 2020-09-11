const email = require('./email');
const logger = require('./logger');

logger.emitter.on("messageLogged",(message)=>{
    console.log("Message is: ",message);
});

email.emitter.on("emailSent",function(payload){
    logger.log(payload)
});

email.sendEmail();
