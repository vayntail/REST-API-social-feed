const express = require("express");
const app = express();
const port = 3000;
const jsxViewEngine = require("jsx-view-engine");

// routing
const home = require("./routes/home");
const profile = require("./routes/profile");
app.use(home);
app.use(profile);
// apis routes
const users = require("./routes/api/users");
app.use(users);

// set static files to public folder
app.use(express.static("public"));

// set up view engine
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// start server
app.listen(port, () => {
  console.log("server is running!");
});
