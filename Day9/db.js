const mongoose = require("mongoose");
const config = require("config");
const connectionString = config.get("connectionString");

mongoose.connect(connectionString, function (err) {
  if (err)
    return console.log("Failed to connect to the database: " + err.message);

  console.log("Database connection successfull");
});
