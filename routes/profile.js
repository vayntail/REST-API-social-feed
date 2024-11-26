const { getPostsByUserId, myUser } = require("./data");

const express = require("express");
const router = express.Router();

// render home page
router.route("/profile").get((req, res) => {
  const userPosts = getPostsByUserId(myUser.id);
  res.render("Profile", { posts: userPosts });
});

module.exports = router;
