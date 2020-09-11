const mongoose = require("mongoose");

// Defined schema
const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 50,
      trim: true,
    },
    author: {
      type: String,
      require: true,
      maxlength: 15,
      trim: true,
    },
  },
  { timestamps: true }
);

// Created a Model for our collection in database.
const CourseModel = mongoose.model("Course", courseSchema);

module.exports.CourseModel = CourseModel;
// module.exports.courseSchema = courseSchema;
// module.exports.CourseModel = CourseModel;
