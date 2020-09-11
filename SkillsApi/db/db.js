const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/skillsDB", function (err) {
  if (err) console.log("Failed to connect to the database: " + err.message);

  console.log("Database connection successfull");
});
