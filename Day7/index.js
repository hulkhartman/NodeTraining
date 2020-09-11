require("./db");
const express = require("express");
const courseRoute = require("./router/courses");
const auth = require('./middlewares/auth');
const config = require('config');

console.log("email host: ",config.get("emailHost"));
console.log('emailHost ', emailHost);

// CourseModel.courseSchema
// CourseModel.CourseModel

const app = express();
app.use(express.json()); // parse json data and expose in req.body object.
app.use(auth);

app.get("/", function (req, res) {
  res.send("Hello!");
});

app.use('/api/courses', courseRoute);

let port = 3000;

app.listen(port, function () {
  // console.log("App is listening on port"+port);
  console.log(`App is listening on port ${port}`);
});
