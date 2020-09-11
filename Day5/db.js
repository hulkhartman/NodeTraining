const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeCourse',(err)=>{
    if(err) console.log("Failed to connect to the DB: " +err.message);
    console.log("DB connection success!");

});