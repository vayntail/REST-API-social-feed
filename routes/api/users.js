const { users, getUserById, myUser, posts, getNewPostId } = require("../data");

const express = require("express");
const router = express.Router();

router
  .route("/:id")
  // get a specific user by id
  .get((req, res) => {
    const user = getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.send("not valid id, user does not exist.");
    }
  })
  // edit a specific user by id
  .put((req, res) => {
    // FIRST CHECK IF USER IS THE CURRENT USER
    const user = getUserById(Number(req.params.id));
    if (user) {
      if (user.id == myUser.id) {
        const { name, pfp, username, bio } = req.body;
        if (name && pfp && username && bio) {
          user.name = name;
          user.pfp = pfp;
          user.username = username;
          user.bio = bio;
          res.json(user);
        } else {
          res.send(
            "Error: edit params are incomplete. You need to provide name, pfp, username, and bio."
          );
        }
      } else {
        res.send("Error: you can only edit your own user profile");
      }
    } else {
      res.send("Error: user does not exist.");
    }
  });

router.route("/:userId/posts/:postId").delete((req, res) => {
  // FIRST CHECK IF POST BELONGS TO THE CURRENT USER
  const user = getUserById(Number(req.params.userId));
  if (user) {
    if (user.id == myUser.id) {
      // find matching post and delete
      const post = posts.find((post, index) => {
        if (post.id == req.params.postId) {
          posts.splice(index, 1);
          return true;
        }
      });
      if (post) res.json(post + " deleted.");
      else {
        res.send("Error: post not found by id.");
      }
    } else {
      res.send("Error: you can only delete your own posts!");
    }
  } else {
    res.send("Error: user does not exist.");
  }
});

router
  .route("/:userId/posts/new")
  // create a new post
  .post((req, res) => {
    // FIRST CHECK IF POST BELONGS TO THE CURRENT USER
    const user = getUserById(Number(req.params.userId));

    if (user) {
      if (user.id == myUser.id) {
        // check if content exists.
        if (req.body.content) {
          const post = {
            id: getNewPostId(),
            userId: req.params.userId,
            content: req.body.content,
          };
        } else {
          res.send("Error: insufficient data.");
        }
      } else {
        res.send("Error: you can only create posts under your profile!");
      }
    } else {
      res.send("Error: user does not exist.");
    }
  });

module.exports = router;
