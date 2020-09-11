const mongoose = require("mongoose");

// Defined schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      maxlength: 30,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// Created a Model for our collection in database.
const UserModel = mongoose.model("USer", userSchema);

module.exports.UserModel = UserModel;
// module.exports.courseSchema = courseSchema;
// module.exports.CourseModel = CourseModel;
