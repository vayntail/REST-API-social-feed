const express = require("express");
const app = express();
const port = 3000;
const jsxViewEngine = require("jsx-view-engine");

// set static files to public folder
app.use(express.static("public"));

// set up view engine
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// render home page
app.get("/", (req, res) => {
  res.render("Home");
});

// start server
app.listen(port, () => {
  console.log("server is running!");
});
