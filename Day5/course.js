const mongoose = require('mongoose');

//defined schea
const courseSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require:true,
            maxlength:50,
            trim:true,
        },
        author:{
            type: String,
            require:true,
            maxlength:15,
            trim:true,
        }
    },
    {timestamps:true}
);
//Created model for colectin in database
const CourseModel = mongoose.model("Course",courseSchema);


//when only exporting 1 thing, so you dont have to use CourseModel.CourseModel in index.js
module.exports = CourseModel;