const express = require("express");
const app = express();
const port = 3000;

const jsxViewEngine = require("jsx-view-engine");
const bodyParser = require('body-parser');

// routing
const home = require("./routes/home");
const profile = require("./routes/profile");


// middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// set static files to public folder
app.use(express.static("public"));
// set up view engine
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// route
app.use('/submit', home);
app.use(profile);

// render home page
app.get('/', (req, res) => {
  res.render('Home', { posts: [], user: { pfp: 'path/to/pfp.jpg' } });
})

// apis routes
const users = require("./routes/api/users");
app.use(users);

// start server
app.listen(port, () => {
  console.log("server is running!");
});
