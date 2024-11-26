const { posts, myUser } = require("./data");

const express = require("express");
const router = express.Router();

// render home page
router.route("/").get((req, res) => {
  res.render("Home", { posts: posts, user: myUser });
});

module.exports = router;
