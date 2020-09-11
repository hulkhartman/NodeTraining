require("./db/db");
const express = require("express");

const app = express();

let port = 3200;

app.listen(port, function () {
  // console.log("App is listening on port"+port);
  console.log(`App is listening on port ${port}`);
});
