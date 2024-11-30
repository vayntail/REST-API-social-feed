const {posts, myUser, getNewPostId, addNewPost}= require("./data");

const express = require("express");
const router = express.Router();

// render home page
router
  .route("/")
  .get((req, res) => {
    res.render("Home", { posts: posts, user: myUser });
  })
  .post((req, res) => {
    addNewPost({
      id: getNewPostId(),
      userId: myUser.id,
      content: req.body.content,
    });
    res.redirect("/");
  });

module.exports = router;
