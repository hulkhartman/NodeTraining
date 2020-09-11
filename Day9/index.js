require("./db");
const express = require("express");
const courseRoute = require("./router/courses");
//const checkAuth = require("./middlewares/auth");
const authRouter = require("./router/auth");

/* const config = require("config");
console.log("Email host:", config.get("emailHost"));
console.log("App Name:", config.get("name"));
console.log("Database Name:", config.get("dbName"));
console.log("Database password:", config.get("dbPassword")); */

const app = express();
app.use(express.json()); // parse json data and expose in req.body object.

app.get("/", function (req, res) {
  res.send("Hello!");
});

// Routes
app.use("/api/courses", courseRoute);
app.use("/api/auth", authRouter);

let port = process.env.PORT || 3000;
app.listen(port, function () {
  // console.log("App is listening on port"+port);
  console.log(`App is listening on port ${port}`);
});
