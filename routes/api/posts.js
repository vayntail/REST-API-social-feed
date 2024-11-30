const { posts, myUser } = require("../data");

const express = require("express");
const router = express.Router();



router.route("/api/posts").get((req, res) => {
  // display all posts
  console.log(posts)
  res.json(posts);
});

router
  .route("/api/posts/:id")
  // get a specific post by id
  .get((req, res) => {
    const user = getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.send("not valid id, user does not exist.");
    }
  })
  // remove a post
  .delete((req, res) => {
    // FIRST CHECK IF POST BELONGS TO THE CURRENT USER
  });

router
.route("/api/posts/new")
// create a new post
.post((req, res) => {
  console.log(req)
})

module.exports = router;
