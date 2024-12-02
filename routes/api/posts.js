const { posts, myUser } = require("../data");

const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  // display all posts
  console.log(posts);
  res.json(posts);
});

router
  .route("/:id")
  // get a specific post by id
  .get((req, res) => {
    const user = getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.send("not valid id, user does not exist.");
    }
  });

module.exports = router;
