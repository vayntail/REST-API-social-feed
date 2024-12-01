const express = require("express");
const app = express();
const port = 3000;

const jsxViewEngine = require("jsx-view-engine");
const bodyParser = require("body-parser");

// routing
const home = require("./routes/home");
const profile = require("./routes/profile");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

// logging middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(
    `${time.toLocaleTimeString()}: ${req.method} request sent to "${req.url}!"`
  );
  next();
});

// parser middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // parse form data

// set static files to public folder
app.use(express.static("public"));

// set up view engine
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// routes
app.use(home);
app.use(profile);
app.use("/api/users", users);
app.use("/api/posts", posts);

// error-handling middlewares
app.use((err, req, res, next) => {
  res.status(500).send("something went wrong with the server");
});
app.use((req, res, next) => {
  res.status(404).send("page or resource not found.");
});

// start server
app.listen(port, () => {
  console.log("server is running!");
});
